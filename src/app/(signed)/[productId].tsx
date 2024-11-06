import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Image } from "react-native"

import { Box } from "@/components/ui/box"
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import Icon from "@/components/ui/icon"
import { Modal } from "@/components/ui/modal"
import { Text } from "@/components/ui/text"

export default function ProductDetails() {
  const [showAlertDialog, setShowAlertDialog] = useState(false)
  const { t } = useTranslation()
  const _localSearchParams = useLocalSearchParams<{ productId: string }>()

  const handlePressOpenAlertDialog = () => {
    setShowAlertDialog(true)
  }

  const handlePressCloseAlertDialog = () => {
    setShowAlertDialog(false)
  }

  return (
    <Box className="flex-1 bg-white px-4 justify-between mb-[30px]">
      <Box className="gap-1">
        <Image
          source={{
            uri: "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
          }}
          className="w-full h-[300px] self-center"
        />
        <Heading className="font-inter600 text-[24px] color-black">
          Essence Mascara Lash Princess
        </Heading>
        <Box className="flex-row gap-1 items-end">
          <Text className="font-inter600 text-[24px] color-price-primary">
            R$ 35,50
          </Text>
          <Text className="font-inter600 text-[20px] color-body-primary line-through">
            R$ 50,00
          </Text>
        </Box>
        <Text className="font-inter400 text-[16px] color-body-primary">
          The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula.
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
          title={t("common.delete")}
          description={t("productDetails.deleteDescription")}
          action="secondary"
          actionText={t("common.delete")}
        />
      </Box>
    </Box>
  )
}
