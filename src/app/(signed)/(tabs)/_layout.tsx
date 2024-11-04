import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"
import React, { ComponentProps } from "react"
import { useTranslation } from "react-i18next"
import { ViewProps } from "react-native"
import { cssInterop } from "react-native-css-interop"

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={28} {...props} />
}

type TailwindBottomTabProps = ComponentProps<typeof Tabs> & {
  headerStyle?: ViewProps["style"]
  tabBarStyle?: ViewProps["style"]
  tabBarIconStyle?: ViewProps["style"]
  tabBarLabelStyle?: ViewProps["style"]
  tabBarActiveTintColor?: { color: string }
  tabBarInactiveTintColor?: { color: string }
}

const TailwindBottomTab = cssInterop(
  ({
    headerStyle,
    tabBarStyle,
    tabBarIconStyle,
    tabBarActiveTintColor,
    tabBarInactiveTintColor,
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
          headerStyle,
          tabBarStyle,
          tabBarIconStyle,
          tabBarActiveTintColor: tabBarActiveTintColor?.color,
          tabBarInactiveTintColor: tabBarInactiveTintColor?.color,
          ...screenOptions,
        }}
        {...props}
      />
    )
  },
  {
    headerClassName: "headerStyle",
    tabBarClassName: "tabBarStyle",
    tabBarIconClassName: "tabBarIconStyle",
    tabBarActiveTintColorClassName: "tabBarActiveTintColor",
    tabBarInactiveTintColorClassName: "tabBarInactiveTintColor",
    tabBarLabelStyleClassName: "tabBarLabelStyle",
  },
)

export default function TabLayout() {
  const { t } = useTranslation()

  return (
    <TailwindBottomTab
      tabBarClassName="h-[90px]"
      tabBarActiveTintColorClassName="bg-blue-600"
      tabBarInactiveTintColorClassName="color-tabBar-secondary"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("start"),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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
  )
}
