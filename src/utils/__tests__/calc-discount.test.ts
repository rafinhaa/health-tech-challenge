import { calcDiscount } from "../calc-discount"

describe("calcDiscount function", () => {
  it("should return correct discount with valid price and discount", () => {
    const price = 100
    const discount = 20
    const result = calcDiscount(price, discount)
    expect(result).toBe("80.00")
  })

  it("should return 0 when price is undefined or discount is undefined", () => {
    const price = undefined
    const discount = undefined
    const result = calcDiscount(price, discount)
    expect(result).toBe("0")
  })
})
