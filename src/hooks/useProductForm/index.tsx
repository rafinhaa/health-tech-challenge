import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Product } from "@/@types/product"
import { productSchema, ProductSchema } from "@/utils/schemas/product-schema"

export type UseProductFormProps = {
  initialValues?: Product
}

export const useProductForm = ({ initialValues }: UseProductFormProps) => {
  const productForm = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: initialValues?.title ?? undefined,
      description: initialValues?.description ?? undefined,
      price: initialValues?.price ? String(initialValues?.price) : undefined,
      discountPercentage: initialValues?.discountPercentage
        ? String(initialValues?.discountPercentage)
        : undefined,
      imageUrl: initialValues?.thumbnail ?? undefined,
      id: initialValues?.id ?? undefined,
    },
  })

  return {
    ...productForm,
  }
}
