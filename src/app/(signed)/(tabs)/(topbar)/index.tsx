import { router } from "expo-router"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { FlatList } from "react-native"

import { Product } from "@/@types/product"
import { Box } from "@/components/ui/box"
import { Heading } from "@/components/ui/heading"
import { ProductCard } from "@/components/ui/product-card"

export default function Mens() {
  const [products] = useState<Product[]>([])
  const { t } = useTranslation()

  const handlePressProduct = (id: number) => {
    return () => router.push(`/(signed)/${id}`)
  }

  return (
    <Box className="flex-1 bg-white px-5">
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-4 py-4 grow"
        columnWrapperStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={handlePressProduct(item.id)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListEmptyComponent={
          <Box className="flex-1 items-center justify-center">
            <Heading className="text-center">{t("common.noProducts")}</Heading>
          </Box>
        }
      />
    </Box>
  )
}
