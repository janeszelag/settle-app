import React from "react"
import renderer from "react-test-renderer"
import Button from "../Button"

describe("<Button />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Button>Words</Button>).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it("renders", () => {
    const tree = renderer
      .create(<Button>Text Button</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders an outline variant with the default colour as 'orange'", () => {
    const tree = renderer
      .create(<Button variant='outline'>Text Button</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders an outline variant in gunmetal", () => {
    const tree = renderer
      .create(
        <Button variant='outline' colour='dark'>
          Text Button
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders a filled variant with the default colour as 'orange'", () => {
    const tree = renderer
      .create(<Button variant='filled'>Text Button</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders a filled variant in gunmetal", () => {
    const tree = renderer
      .create(<Button variant='filled'>Text Button</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
