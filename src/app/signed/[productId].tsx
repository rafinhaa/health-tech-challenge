import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Box } from "@/components/ui/box"
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import Icon from "@/components/ui/icon"
import { Modal } from "@/components/ui/modal"
import { Spinner } from "@/components/ui/spinner"
import { Text } from "@/components/ui/text"
import { TryAgain } from "@/components/ui/try-again"
import { useDeleteProductMutation } from "@/hooks/useDeleteProductMutation"
import { useFetchProduct } from "@/hooks/useFetchProduct"
import { calcDiscount } from "@/utils/calc-discount"
import { formatValueToLocaleString } from "@/utils/currency"

export default function ProductDetails() {
  const [showAlertDialog, setShowAlertDialog] = useState(false)
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()
  const { productId } = useLocalSearchParams<{ productId: string }>()

  const {
    data: product,
    isPending,
    error,
    refetch,
  } = useFetchProduct({ productId: productId })

  const hasDiscount = product?.discountPercentage! > 0

  const valueWithDiscount = calcDiscount(
    product?.price,
    product?.discountPercentage,
  )
  const discountLocaleString = formatValueToLocaleString(valueWithDiscount)

  const values = {
    price: hasDiscount
      ? discountLocaleString
      : formatValueToLocaleString(product?.price!),
    oldPrice: hasDiscount ? formatValueToLocaleString(product?.price!) : "",
  }

  const { mutate } = useDeleteProductMutation({
    onSuccess: () => {
      router.back()
    },
  })

  const handlePressOpenAlertDialog = () => {
    setShowAlertDialog(true)
  }

  const handlePressCloseAlertDialog = () => {
    setShowAlertDialog(false)
  }

  const handlePressConfirmAlertDialog = () => {
    mutate(productId)
    setShowAlertDialog(false)
  }

  if (isPending) {
    return <Spinner className="flex-1 bg-white" size="large" />
  }

  if (error) {
    return (
      <TryAgain
        onTryAgain={() => {
          refetch()
        }}
      />
    )
  }

  return (
    <Box
      className={`flex-1 bg-white px-4 justify-between mb-[${insets.bottom}px]`}
    >
      <Box className="gap-2">
        <Image
          source={{
            uri: product?.images[0],
          }}
          className="w-full h-[300px] self-center"
        />
        <Heading className="font-inter600 text-[24px] color-black">
          {product?.title}
        </Heading>
        <Box className="flex-row gap-1 items-end">
          <Text className="font-inter600 text-[24px] color-price-primary">
            {values.price}
          </Text>
          <Text className="font-inter600 text-[20px] color-body-primary line-through">
            {values.oldPrice}
          </Text>
        </Box>
        <Text className="font-inter400 text-[16px] color-body-primary">
          {product?.description}
        </Text>
      </Box>
      <Box className="gap-2">
        <Button className="bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400">
          <ButtonText>{t("common.edit")}</ButtonText>
          <ButtonIcon
            as={() => (
              <Icon
                name="square-edit-outline"
                size={24}
                colorClassName="color-white"
              />
            )}
          />
        </Button>
        <Button
          className="bg-error-500 data-[active=true]:bg-error-400"
          onPress={handlePressOpenAlertDialog}
        >
          <ButtonText>{t("common.delete")}</ButtonText>
          <ButtonIcon
            as={() => (
              <Icon name="delete" size={24} colorClassName="color-white" />
            )}
          />
        </Button>
        <Modal
          isOpen={showAlertDialog}
          onCancel={handlePressCloseAlertDialog}
          onConfirm={handlePressConfirmAlertDialog}
          title={t("common.delete")}
          description={t("productDetails.deleteDescription")}
          action="secondary"
          actionText={t("common.delete")}
        />
      </Box>
    </Box>
  )
}
