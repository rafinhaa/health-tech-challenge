import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Product } from "@/@types/product"

import { Box } from "../box"
import { Divider } from "../divider"
import { Heading } from "../heading"
import { Text } from "../text"

export type ProductCardProps = TouchableOpacityProps & {
  product: Product
}

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
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
      <Box className="p-2">
        <Heading className="font-inter600 text-[16px] mb-2" numberOfLines={2}>
          {product.title}
        </Heading>
        <Text
          className="font-inter400 text-[10px] color-body-primary mb-4"
          numberOfLines={4}
        >
          {product.description}
        </Text>
        <Box className="flex-row gap-1 items-end">
          <Heading className="font-inter600">{product.price}</Heading>
          <Text className="font-inter600 color-body-primary line-through">
            {product.discountPercentage}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}
