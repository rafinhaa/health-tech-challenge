import { Text } from "react-native"

import { render, screen } from "@/utils/tests"

import Render from "../"

describe("Render", () => {
  it("should be able to render correctly", () => {
    render(
      <Render
        options={{
          loading: false,
          error: false,
          data: [{ data: "data" }],
        }}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText("data")).toBeTruthy()
  })

  it("should be able to render correctly with loading", () => {
    render(
      <Render
        options={{
          loading: true,
          error: false,
          data: [{ data: "data" }],
        }}
        renderLoading={() => <Text>loading</Text>}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText("loading")).toBeTruthy()
  })

  it("should be able to render correctly with loading", () => {
    render(
      <Render
        options={{
          loading: false,
          error: true,
          data: [{ data: "data" }],
        }}
        renderError={() => <Text>error</Text>}
        renderLoading={() => <Text>loading</Text>}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText("error")).toBeTruthy()
  })
})
