export const calcDiscount = (price?: number, discount?: number) => {
  if (!price || !discount) return "0"

  const valorFinal = price * (1 - discount / 100)
  return valorFinal.toFixed(2)
}
