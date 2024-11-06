import type { VariantProps } from "@gluestack-ui/nativewind-utils"
import { tva } from "@gluestack-ui/nativewind-utils/tva"
import { useTranslation } from "react-i18next"

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../alert-dialog"
import { Button, ButtonText } from "../button"
import { Heading } from "../heading"
import { Text } from "../text"

const buttonStyle = tva({
  variants: {
    action: {
      primary:
        "bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400",
      secondary:
        "bg-error-500 data-[hover=true]:bg-error-500 data-[active=true]:bg-error-500",
    },
  },
})

export type ModalProps = VariantProps<typeof buttonStyle> & {
  isOpen: boolean
  onConfirm?: () => void
  onCancel?: () => void

  title: string
  description?: string
  actionText?: string
  cancelText?: string
}

export const Modal = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
  action,
  ...rest
}: ModalProps) => {
  const { t } = useTranslation()

  const actionText = rest?.actionText || t("common.exit")
  const cancelText = rest?.cancelText || t("common.cancel")

  return (
    <AlertDialog isOpen={isOpen} onClose={onCancel} size="md">
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading className="text-typography-950 font-roboto600" size="md">
            {title}
          </Heading>
        </AlertDialogHeader>
        <AlertDialogBody className="mt-3 mb-4">
          <Text className="font-roboto400 text-typography-500" size="sm">
            {description}
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter className="">
          <Button
            variant="outline"
            action="secondary"
            onPress={onCancel}
            size="sm"
          >
            <ButtonText className="text-typography-500">
              {cancelText}
            </ButtonText>
          </Button>
          <Button
            size="sm"
            onPress={onConfirm}
            className={buttonStyle({ action })}
          >
            <ButtonText>{actionText}</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
