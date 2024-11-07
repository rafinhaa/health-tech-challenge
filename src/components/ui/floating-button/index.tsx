import { ComponentProps } from "react"

import { Button } from "../button"
import Icon from "../icon"

export type FloatingButtonProps = ComponentProps<typeof Button> & {
  icon: ComponentProps<typeof Icon>["name"]
}

export const FloatingButton = ({ icon, ...rest }: FloatingButtonProps) => (
  <Button
    size="lg"
    className=" bg-blue-600 data-[hover=true]:bg-blue-400 data-[active=true]:bg-blue-400 absolute bottom-4 right-4 rounded-full w-16 h-16 flex-col p-0"
    {...rest}
  >
    <Icon name={icon} size={20} color="white" />
  </Button>
)
