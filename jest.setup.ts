import "@testing-library/react-native/extend-expect"

import { resources as mockResources } from "./src/utils/tests/index"

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (path: string) =>
      path
        .split(".")
        .reduce((acc: any, key: any) => acc && acc[key], mockResources),
  }),
}))

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnValue({
    init: jest.fn(),
  }),
}))

jest.mock("expo-font", () => ({
  useFonts: jest.fn().mockReturnValue([true]),
}))

jest.mock("@expo/vector-icons/MaterialCommunityIcons", () => {
  const { Text } = require("react-native")
  return {
    __esModule: true,
    default: Text,
  }
})
