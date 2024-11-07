import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Product } from "@/@types/product"
import { calcDiscount } from "@/utils/calc-discount"
import { formatValueToLocaleString } from "@/utils/currency"

import { Box } from "../box"
import { Divider } from "../divider"
import { Heading } from "../heading"
import { Text } from "../text"

export type ProductCardProps = TouchableOpacityProps & {
  product: Product
}

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  const hasDiscount = product?.discountPercentage > 0

  const valueWithDiscount = calcDiscount(
    product?.price,
    product?.discountPercentage,
  )
  const discountLocaleString = formatValueToLocaleString(valueWithDiscount)

  const values = {
    price: hasDiscount
      ? discountLocaleString
      : formatValueToLocaleString(product.price),
    oldPrice: hasDiscount ? formatValueToLocaleString(product.price) : "",
  }

  return (
    <TouchableOpacity
      className="flex-1 border border-shadow-primary rounded-lg"
      {...props}
    >
      <Image
        source={{ uri: product.thumbnail }}
        className="w-[90%] h-[100px] self-center m-1"
        resizeMode="cover"
      />
      <Divider className="my-0.5 h-[1px] border-shadow-primary" />
      <Box className="p-2 grow">
        <Heading className="font-inter600 text-[16px] mb-2" numberOfLines={2}>
          {product.title}
        </Heading>
        <Text
          className="font-inter400 text-[10px] color-body-primary"
          numberOfLines={4}
        >
          {product.description}
        </Text>
      </Box>
      <Box className="flex-row gap-1 items-end p-2 flex-wrap">
        <Heading size="sm" className="font-inter600">
          {values.price}
        </Heading>
        <Text
          size="xs"
          className="font-inter600 color-body-primary line-through"
        >
          {values.oldPrice}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}
