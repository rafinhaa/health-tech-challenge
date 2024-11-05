import { useTranslation } from "react-i18next"

import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar"
import { Box } from "@/components/ui/box"
import { Button, ButtonText } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { SettingsButton } from "@/components/ui/settings-button"
import { Text } from "@/components/ui/text"

export default function Config() {
  const { t } = useTranslation()

  return (
    <Box className="flex-1 bg-white ">
      <Box className="w-full h-1/4 bg-blue-600" />
      <Avatar size="2xl" className="-mt-[50px] self-center">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </Avatar>
      <Box className="flex-1 px-5 items-center">
        <Heading className="color-black font-inter600" size="2xl">
          Jane Doe
        </Heading>
        <Text className="color-shadow-secondary font-inter400" size="2xl">
          jane.doe@example.com
        </Text>
        <Box className="gap-4 mt-8">
          <SettingsButton label={t("configScreen.myData")} icon="account" />
          <SettingsButton label={t("configScreen.notifications")} icon="bell" />
          <SettingsButton label={t("configScreen.terms")} icon="information" />
        </Box>

        <Button className="bg-error-500 mt-8 w-full" size="lg">
          <ButtonText>{t("configScreen.exit")}</ButtonText>
        </Button>
      </Box>
    </Box>
  )
}
