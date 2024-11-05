import { render, screen } from "@/utils/tests"

import Icon from ".."

describe("Icon", () => {
  it("should to be able to render default component correctly", () => {
    render(<Icon name="loading" />)

    expect(screen.getByTestId("icon-loading-16")).toBeTruthy()
    expect(screen.getByTestId("icon-loading-16")).toHaveProp("color", "black")
    expect(screen.getByTestId("icon-loading-16")).toHaveProp("size", 16)
  })

  describe("should to be able to render correctly with different:", () => {
    it("color", () => {
      render(<Icon name="loading" color="red" />)

      expect(screen.getByTestId("icon-loading-16")).toBeTruthy()
      expect(screen.getByTestId("icon-loading-16")).toHaveProp("color", "red")
      expect(screen.getByTestId("icon-loading-16")).toHaveProp("size", 16)
    })

    it("size", () => {
      render(<Icon name="loading" size={22} />)

      expect(screen.getByTestId("icon-loading-22")).toBeTruthy()
      expect(screen.getByTestId("icon-loading-22")).toHaveProp("color", "black")
      expect(screen.getByTestId("icon-loading-22")).toHaveProp("size", 22)
    })

    it("testID", () => {
      render(<Icon name="loading" testID="test" />)

      expect(screen.getByTestId("test")).toBeTruthy()
      expect(screen.getByTestId("test")).toHaveProp("color", "black")
      expect(screen.getByTestId("test")).toHaveProp("size", 16)
    })
  })
})
