import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { KeyboardAvoidingView, Platform } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Box } from "@/components/ui/box"
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button"
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control"
import Icon from "@/components/ui/icon"
import { Input, InputField } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { Spinner } from "@/components/ui/spinner"
import { useAddProductMutation } from "@/hooks/useAddProductMutation"
import { useFetchProduct } from "@/hooks/useFetchProduct"
import { useProductForm } from "@/hooks/useProductForm"
import { useUpdateProductMutation } from "@/hooks/useUpdateProductMutation"
import { numberToCurrency } from "@/utils/currency"
import { ProductSchema } from "@/utils/schemas/product-schema"

export default function AddProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const insets = useSafeAreaInsets()
  const { t } = useTranslation()

  const { productId, type } = useLocalSearchParams<{
    productId: string
    type: "add" | "edit"
  }>()

  const product = useFetchProduct({
    productId: productId,
  })
  const productForm = useProductForm({
    initialValues: product.data,
  })
  const addProduct = useAddProductMutation({
    onSuccess: () => {
      router.back()
    },
  })

  const updateProduct = useUpdateProductMutation({
    onSuccess: () => {
      router.back()
    },
  })

  const handlePressSaveProduct = (data: ProductSchema) => {
    const save = {
      add: () => handlePressAddProduct(data),
      edit: () => setIsModalOpen(true),
    }[type]

    save()
  }

  const handlePressAddProduct = (data: ProductSchema) => {
    addProduct.mutate(data)
  }

  const handlePressEditProduct = (data: ProductSchema) => {
    updateProduct.mutate(data)
  }

  if (type === "edit" && product.isPending)
    return <Spinner className="flex-1 bg-white" size="large" />

  return (
    <KeyboardAvoidingView
      className={`flex-1 mb-[${insets.bottom}px] bg-white`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box className={`flex-1 bg-white p-5 justify-between pb-8`}>
        <Box className="gap-5">
          <Controller
            control={productForm.control}
            name="name"
            render={({ field: { value, onChange }, formState }) => (
              <FormControl isInvalid={!!formState.errors.name}>
                <FormControlLabel>
                  <FormControlLabelText>
                    {t("product.name")}
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="my-1">
                  <InputField
                    type="text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChange}
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Icon
                        name="alert-circle-outline"
                        size={20}
                        colorClassName="color-indicator-error"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {formState.errors.name?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
          />

          <Controller
            control={productForm.control}
            name="description"
            render={({ field: { value, onChange }, formState }) => (
              <FormControl isInvalid={!!formState.errors.description}>
                <FormControlLabel>
                  <FormControlLabelText>
                    {t("product.description")}
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="my-1">
                  <InputField
                    type="text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChange}
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Icon
                        name="alert-circle-outline"
                        size={20}
                        colorClassName="color-indicator-error"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {formState.errors.description?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
          />

          <Controller
            control={productForm.control}
            name="price"
            render={({ field: { value, onChange }, formState }) => (
              <FormControl isInvalid={!!formState.errors.price}>
                <FormControlLabel>
                  <FormControlLabelText>
                    {t("product.price")}
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="my-1">
                  <InputField
                    type="text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={(text) => onChange(numberToCurrency(text))}
                    keyboardType="numeric"
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Icon
                        name="alert-circle-outline"
                        size={20}
                        colorClassName="color-indicator-error"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {formState.errors.price?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
          />

          <Controller
            control={productForm.control}
            name="discountPercentage"
            render={({ field: { value, onChange }, formState }) => (
              <FormControl isInvalid={!!formState.errors.discountPercentage}>
                <FormControlLabel>
                  <FormControlLabelText>
                    {t("product.discountPercentage")}
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="my-1">
                  <InputField
                    type="text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="numeric"
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Icon
                        name="alert-circle-outline"
                        size={20}
                        colorClassName="color-indicator-error"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {formState.errors.discountPercentage?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
          />

          <Controller
            control={productForm.control}
            name="imageUrl"
            render={({ field: { value, onChange }, formState }) => (
              <FormControl isInvalid={!!formState.errors.imageUrl}>
                <FormControlLabel>
                  <FormControlLabelText>
                    {t("product.imageUrl")}
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="my-1">
                  <InputField
                    type="text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChange}
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon
                    as={() => (
                      <Icon
                        name="alert-circle-outline"
                        size={20}
                        colorClassName="color-indicator-error"
                      />
                    )}
                  />
                  <FormControlErrorText>
                    {formState.errors.imageUrl?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
          />
        </Box>

        <Button
          size="lg"
          className={` bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400`}
          disabled={productForm.formState.isSubmitting}
          onPress={productForm.handleSubmit(handlePressSaveProduct)}
        >
          {addProduct.isPending ||
          updateProduct.isPending ||
          productForm.formState.isSubmitting ? (
            <ButtonSpinner />
          ) : (
            <ButtonText>{t("common.save")}</ButtonText>
          )}
        </Button>
        <Modal
          action="primary"
          actionText={t("common.edit")}
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => handlePressEditProduct(productForm.getValues())}
          title={t("product.editProduct")}
          description={t("product.editProductDescription")}
        />
      </Box>
    </KeyboardAvoidingView>
  )
}
