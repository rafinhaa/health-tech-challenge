import { useTranslation } from "react-i18next"

import { Box } from "../box"
import { Button, ButtonText } from "../button"
import { Heading } from "../heading"

export type TryAgainProps = {
  onTryAgain: () => void
}

export const TryAgain = ({ onTryAgain }: TryAgainProps) => {
  const { t } = useTranslation()

  return (
    <Box className="flex-1 items-center justify-center gap-2">
      <Heading className="text-center">{t("common.fetchError")}</Heading>
      <Button
        className="bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400"
        onPress={() => onTryAgain()}
      >
        <ButtonText>{t("common.tryAgain")}</ButtonText>
      </Button>
    </Box>
  )
}
