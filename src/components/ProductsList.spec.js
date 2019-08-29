import React from 'react'
import { shallow } from 'enzyme'
import ProductsList from './ProductsList'

const setup = props => {
  const component = shallow(
    <ProductsList>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(1)
  }
}

describe('ProductsList component', () => {
  it('should render children', () => {
    const { children } = setup({ title: 'Test Products', children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
