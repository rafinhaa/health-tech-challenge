export const numberToCurrency = (value: number | string) => {
  const numericValue = String(value).replace(/\D/g, "")
  if (numericValue === "") return ""
  const floatValue = (parseInt(numericValue) / 100).toFixed(2)
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(floatValue))
}
