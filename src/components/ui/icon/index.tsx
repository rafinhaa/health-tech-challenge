import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { cssInterop } from "nativewind"
import { ComponentProps } from "react"

type MaterialCommunityIconsProps = Omit<
  ComponentProps<typeof MaterialCommunityIcons>,
  "size"
>

export type IconProps = MaterialCommunityIconsProps & {
  colorTailwind?: { color: string }
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | number
}

const sizeMap = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
}

const Icon = cssInterop(
  ({ color, colorTailwind, size, ...rest }: IconProps) => {
    const sizeIsNumber = typeof size === "number"
    const sizeMapped = sizeIsNumber ? size : sizeMap[size || "base"]

    const colorClassName = colorTailwind?.color
    const colorPriority = colorClassName || color
    const colorFinal = colorPriority || "black"
    const testID = rest?.testID || `icon-${rest.name}-${sizeMapped}`

    return (
      <MaterialCommunityIcons
        testID={testID}
        size={sizeMapped}
        color={colorFinal}
        {...rest}
      />
    )
  },
  {
    colorClassName: "colorTailwind",
  },
)

export default Icon
