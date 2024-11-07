import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs"
import { ParamListBase, TabNavigationState } from "@react-navigation/native"
import { router, withLayoutContext } from "expo-router"
import React from "react"
import { useTranslation } from "react-i18next"
import { TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Box } from "@/components/ui/box"
import { FloatingButton } from "@/components/ui/floating-button"
import { Heading } from "@/components/ui/heading"

function TabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: insets.top,
        backgroundColor: "white",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.title

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        return (
          <TouchableOpacity
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderBottomColor: isFocused ? "#2567E8" : "transparent",
              borderBottomWidth: 2,
              paddingVertical: 16,
            }}
          >
            <Heading size="sm" className="font-inter600 color-black">
              {label}
            </Heading>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const { Navigator } = createMaterialTopTabNavigator()

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator)

export default function TabTopLayout() {
  const { t } = useTranslation()

  const handlePressAddProduct = () => {
    router.push("/signed/tabs/add-product?type=add")
  }

  return (
    <Box className="flex-1">
      <MaterialTopTabs tabBar={(props) => <TabBar {...props} />}>
        <MaterialTopTabs.Screen
          name="index"
          options={{ title: t("products.mens") }}
        />
        <MaterialTopTabs.Screen
          name="womans"
          options={{ title: t("products.womans") }}
        />
      </MaterialTopTabs>
      <FloatingButton icon="plus" onPress={handlePressAddProduct} />
    </Box>
  )
}
