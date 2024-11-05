import { router } from "expo-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { KeyboardAvoidingView, Platform } from "react-native"

import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const { t } = useTranslation()

  const handlePressLogin = () => {
    router.replace("/(signed)")
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
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>
                  {t("loginScreen.username")}
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1">
                <InputField type="text" />
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
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>
                  {t("loginScreen.password")}
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1">
                <InputField type={showPassword ? "text" : "password"} />
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
            <Button
              className="bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400"
              onPress={handlePressLogin}
            >
              <ButtonText className="text-white">
                {t("common.enter")}
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </Box>
  )
}
