import { z } from "zod"

import i18n from "@/locales"

export const productSchema = z.object({
  id: z.number().optional(),
  name: z
    .string({
      required_error: i18n.t("common.requiredField"),
    })
    .min(2, {
      message: i18n.t("product.fieldValueMinRequired", {
        field: i18n.t("product.name"),
        min: 2,
      }),
    })
    .max(100, {
      message: i18n.t("product.fieldValueMaxRequired", {
        field: i18n.t("product.name"),
        max: 100,
      }),
    }),
  description: z
    .string({
      required_error: i18n.t("common.requiredField"),
    })
    .min(20, {
      message: i18n.t("product.fieldValueMinRequired", {
        field: i18n.t("product.description"),
        min: 20,
      }),
    })
    .max(500, {
      message: i18n.t("product.fieldValueMaxRequired", {
        description: i18n.t("product.description"),
        max: 500,
      }),
    }),
  price: z
    .string({
      required_error: i18n.t("common.requiredField"),
    })
    .refine(
      (val) => {
        const num = parseFloat(val.replace(/[R$,.]/g, "")) / 100
        return num > 0
      },
      {
        message: i18n.t("product.positiveNumber"),
      },
    ),
  discountPercentage: z
    .string({
      required_error: i18n.t("common.requiredField"),
    })
    .refine(
      (val) => {
        const num = parseFloat(val)
        return !isNaN(num) && num >= 0 && num <= 100
      },
      {
        message: i18n.t("product.discountPercentageInvalid"),
      },
    ),
  imageUrl: z
    .string({
      required_error: i18n.t("common.requiredField"),
    })
    .url({ message: i18n.t("product.imagemInvalid") }),
})

export type ProductSchema = z.infer<typeof productSchema>
