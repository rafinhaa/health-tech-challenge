import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"
import React, { ComponentProps } from "react"
import { useTranslation } from "react-i18next"
import { ViewProps } from "react-native"
import { cssInterop } from "react-native-css-interop"
import { SafeAreaProvider } from "react-native-safe-area-context"

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={28} {...props} />
}

type TailwindBottomTabProps = ComponentProps<typeof Tabs> & {
  tabBarStyle?: ViewProps["style"]
  tabBarIconStyle?: ViewProps["style"]
  tabBarLabelStyle?: ViewProps["style"]
  tabBarActiveTintColor?: { color: string }
  tabBarInactiveTintColor?: { color: string }
  tabBarItemStyle?: ViewProps["style"]
}

const TailwindBottomTab = cssInterop(
  ({
    tabBarActiveTintColor,
    tabBarInactiveTintColor,
    tabBarStyle,
    tabBarItemStyle,
    screenOptions,
    ...props
  }: TailwindBottomTabProps) => {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle,
          tabBarItemStyle,
          tabBarActiveTintColor: tabBarActiveTintColor?.color,
          tabBarInactiveTintColor: tabBarInactiveTintColor?.color,
          ...screenOptions,
        }}
        {...props}
      />
    )
  },
  {
    tabBarClassName: "tabBarStyle",
    tabBarIconClassName: "tabBarIconStyle",
    tabBarActiveTintColorClassName: "tabBarActiveTintColor",
    tabBarInactiveTintColorClassName: "tabBarInactiveTintColor",
    tabBarLabelStyleClassName: "tabBarLabelStyle",
    tabBarItemStyleClassName: "tabBarItemStyle",
  },
)

export default function TabLayout() {
  const { t } = useTranslation()

  return (
    <SafeAreaProvider>
      <TailwindBottomTab
        tabBarClassName="h-[90px]"
        tabBarItemStyleClassName="h-[70px] p-2"
        tabBarActiveTintColorClassName="bg-blue-600"
        tabBarInactiveTintColorClassName="color-tabBar-secondary"
      >
        <Tabs.Screen
          name="(topbar)"
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            title: t("start"),
          }}
        />
        <Tabs.Screen
          name="config"
          options={{
            title: t("settings"),
            tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
          }}
        />
      </TailwindBottomTab>
    </SafeAreaProvider>
  )
}
