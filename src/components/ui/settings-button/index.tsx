import { ComponentProps } from "react"

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export type SettingsButtonProps = ComponentProps<typeof Button> & {
  icon: ComponentProps<typeof Icon>["name"]
  label: string
}

export const SettingsButton = ({
  label,
  icon,
  ...rest
}: SettingsButtonProps) => {
  return (
    <Button variant="outline" className="w-full h-12 rounded-lg px-2" {...rest}>
      <ButtonIcon
        as={() => (
          <Icon name={icon} size={32} colorClassName="color-shadow-tertiary" />
        )}
      />
      <ButtonText className="flex-1 font-roboto500 text-shadow-tertiary">
        {label}
      </ButtonText>
      <ButtonIcon
        as={() => (
          <Icon
            name="chevron-right"
            size={32}
            colorClassName="color-shadow-tertiary"
          />
        )}
      />
    </Button>
  )
}
