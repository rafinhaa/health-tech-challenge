import { router } from "expo-router"
import React from "react"
import { useTranslation } from "react-i18next"
import { FlatList } from "react-native"

import { Box } from "@/components/ui/box"
import { Heading } from "@/components/ui/heading"
import { ProductCard } from "@/components/ui/product-card"
import RenderProductsContent from "@/components/ui/render-products-content"
import { Spinner } from "@/components/ui/spinner"
import { TryAgain } from "@/components/ui/try-again"
import { useGetWomensProducts } from "@/hooks/useGetWomensProducts"

export default function Womans() {
  const { t } = useTranslation()

  const { womansProducts } = useGetWomensProducts()

  const handlePressProduct = (id: number) => {
    return () => router.push(`/signed/${id}`)
  }

  return (
    <Box className="flex-1 bg-white px-5">
      <RenderProductsContent
        options={{
          loading: womansProducts.isLoading,
          error: womansProducts.error,
          data: womansProducts.products,
        }}
        renderLoading={() => <Spinner className="flex-1" size="large" />}
        renderError={() => (
          <TryAgain onTryAgain={() => womansProducts.refetch()} />
        )}
        renderData={(data) => (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-4 py-4 grow"
            columnWrapperStyle={{ gap: 16 }}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={handlePressProduct(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            ListEmptyComponent={
              <Box className="flex-1 items-center justify-center">
                <Heading className="text-center">
                  {t("common.noProducts")}
                </Heading>
              </Box>
            }
          />
        )}
      />
    </Box>
  )
}
