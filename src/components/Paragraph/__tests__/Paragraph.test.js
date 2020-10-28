import React from "react"
import renderer from "react-test-renderer"
import Paragraph from "../Paragraph"

describe("<Paragraph />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<Paragraph>Paragraph</Paragraph>)
      .toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders at medium size", () => {
    const tree = renderer
      .create(<Paragraph>Paragraph</Paragraph>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders medium and bold", () => {
    const tree = renderer
      .create(<Paragraph bold={true}>Paragraph</Paragraph>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders at small size", () => {
    const tree = renderer
      .create(<Paragraph small='small'>Paragraph</Paragraph>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders at large size", () => {
    const tree = renderer
      .create(<Paragraph size='large'>Paragraph</Paragraph>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
