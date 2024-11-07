import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { productSchema, ProductSchema } from "@/utils/schemas/product-schema"

export const useProductForm = () => {
  const productForm = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  })

  return {
    ...productForm,
  }
}
