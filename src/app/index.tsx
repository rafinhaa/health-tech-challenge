import { router } from "expo-router"
import { useRef, useState } from "react"
import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { KeyboardAvoidingView, Platform } from "react-native"

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
import { Heading } from "@/components/ui/heading"
import Icon from "@/components/ui/icon"
import { Input, InputField, InputSlot } from "@/components/ui/input"
import { Text } from "@/components/ui/text"
import { useAuthForm } from "@/hooks/useAuthForm"
import { useAuthMutation } from "@/hooks/useAuthMutation"
import { AuthSchema } from "@/utils/schemas/auth-schema"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const usernameRef = useRef<any>(null)

  const { t } = useTranslation()
  const authForm = useAuthForm()
  const { mutate, isPending, status } = useAuthMutation({
    onError: () => {
      authForm.resetField("password")
      usernameRef?.current?.focus()
    },
    onSuccess: () => {
      router.push("/(signed)")
    },
  })

  const handlePressLogin = async (data: AuthSchema) => {
    mutate(data)
  }

  const handlePressShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Box className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Box className="absolute top-0 w-full h-3/6 bg-blue-600" />
        <Box className="flex-1 items-center justify-center px-[30px]">
          <Heading className="text-4xl font-inter600 text-white mb-4">
            {t("loginScreen.welcome")}
          </Heading>
          <Text className="text-white font-inter400 text-[16px] mb-8">
            {t("loginScreen.subtitle")}
          </Text>

          <Box className="w-full bg-white rounded-2xl border border-shadow-primary px-6 py-[50px] gap-6">
            {status === "error" && (
              <Text className="font-inter400 text-[16px] color-error-700 self-center">
                {t("loginScreen.loginFailed")}
              </Text>
            )}
            <Controller
              control={authForm.control}
              name="username"
              render={({ field: { onChange, value }, formState }) => (
                <FormControl isInvalid={!!formState.errors.username}>
                  <FormControlLabel>
                    <FormControlLabelText>
                      {t("loginScreen.username")}
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input className="my-1">
                    <InputField
                      type="text"
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize="none"
                      autoCorrect={false}
                      ref={usernameRef}
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
                      {t("common.requiredField")}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              )}
            />
            <Controller
              control={authForm.control}
              name="password"
              render={({ field: { onChange, value }, formState }) => (
                <FormControl isInvalid={!!formState.errors.password}>
                  <FormControlLabel>
                    <FormControlLabelText>
                      {t("loginScreen.password")}
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input className="my-1">
                    <InputField
                      type={showPassword ? "text" : "password"}
                      onChangeText={onChange}
                      value={value}
                    />
                    <InputSlot className="px-4">
                      <Icon
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={20}
                        colorClassName="color-gray-600"
                        onPress={handlePressShowPassword}
                      />
                    </InputSlot>
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
                      {t("common.requiredField")}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              )}
            />
            <Button
              className="bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400"
              onPress={authForm.handleSubmit(handlePressLogin)}
            >
              {authForm.formState.isSubmitting || isPending ? (
                <ButtonSpinner color="white" />
              ) : (
                <ButtonText className="text-white">
                  {t("common.enter")}
                </ButtonText>
              )}
            </Button>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </Box>
  )
}
