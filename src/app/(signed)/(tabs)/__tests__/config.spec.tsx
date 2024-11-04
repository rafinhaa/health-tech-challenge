import { render, screen } from "@/utils/tests"

import Config from "../config"

describe("Config", () => {
  it("should be to be render correctly", () => {
    render(<Config />)

    expect(screen.getByText("Config")).toBeTruthy()
  })
})
