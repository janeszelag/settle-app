import React from "react"
import renderer from "react-test-renderer"
import Heading from "../Heading"

describe("<Heading />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<Heading level='h1'>Heading</Heading>)
      .toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders an h1 level heading", () => {
    const tree = renderer
      .create(<Heading level='h1'>Heading h1</Heading>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders an h2 level heading", () => {
    const tree = renderer
      .create(<Heading level='h2'>Heading h2</Heading>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders an h3 level heading", () => {
    const tree = renderer
      .create(<Heading level='h3'>Heading h3</Heading>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders an h4 level heading", () => {
    const tree = renderer
      .create(<Heading level='h4'>Heading h4</Heading>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
