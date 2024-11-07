import { router } from "expo-router"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar"
import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Modal } from "@/components/ui/modal"
import { SettingsButton } from "@/components/ui/settings-button"
import { Text } from "@/components/ui/text"
import { useUserStore } from "@/stores/useUserStore"

export default function Config() {
  const [showAlertDialog, setShowAlertDialog] = useState(false)

  const { user, clearUser } = useUserStore()
  const { t } = useTranslation()

  const handlePressOpenAlertDialog = () => {
    setShowAlertDialog(true)
  }

  const handlePressCloseAlertDialog = () => {
    setShowAlertDialog(false)
  }

  const handlePressOnDialogConfirm = () => {
    clearUser()
    setShowAlertDialog(false)
    router.replace("/")
  }

  return (
    <Box className="flex-1 bg-transparent">
      <Box className="w-full h-1/4 bg-blue-600" />
      <Box className="flex-1 rounded-t-2xl -mt-4 bg-white">
        <Avatar size="2xl" className="-mt-[50px] self-center">
          <AvatarFallbackText>{user?.firstName[0]}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: user?.image,
            }}
          />
        </Avatar>
        <Box className="flex-1 px-5 items-center">
          <Heading className="color-black font-inter600" size="2xl">
            {user?.firstName} {user?.lastName}
          </Heading>
          <Text className="color-shadow-secondary font-inter400" size="2xl">
            {user?.email}
          </Text>
          <Box className="gap-4 mt-8">
            <SettingsButton label={t("configScreen.myData")} icon="account" />
            <SettingsButton
              label={t("configScreen.notifications")}
              icon="bell"
            />
            <SettingsButton
              label={t("configScreen.terms")}
              icon="information"
            />
          </Box>

          <Button
            className="bg-error-500 mt-8 w-full"
            size="lg"
            onPress={handlePressOpenAlertDialog}
          >
            <ButtonText>{t("configScreen.exit")}</ButtonText>
          </Button>
          <Modal
            isOpen={showAlertDialog}
            onCancel={handlePressCloseAlertDialog}
            onConfirm={handlePressOnDialogConfirm}
            title={t("configScreen.exit")}
            description={t("configScreen.exitDescription")}
            action="secondary"
          />
        </Box>
      </Box>
    </Box>
  )
}
