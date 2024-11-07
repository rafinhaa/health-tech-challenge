import { useLocalSearchParams } from "expo-router"
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
import { useProductForm } from "@/hooks/useProductForm"
import { numberToCurrency } from "@/utils/currency"
import { ProductSchema } from "@/utils/schemas/product-schema"

export default function AddProduct() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()

  const _params = useLocalSearchParams()

  const productForm = useProductForm()

  const handlePressAddProduct = (_data: ProductSchema) => {}

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box className={`flex-1 bg-white p-5 justify-between`}>
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
          className={` bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400 mb-[${insets.bottom}px]`}
          disabled={productForm.formState.isSubmitting}
          onPress={productForm.handleSubmit(handlePressAddProduct)}
        >
          {productForm.formState.isSubmitting && <ButtonSpinner />}
          <ButtonText>{t("common.save")}</ButtonText>
        </Button>
      </Box>
    </KeyboardAvoidingView>
  )
}
