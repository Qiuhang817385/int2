import React from 'react'
import { render } from '@testing-library/react'
import PictureSelect from './PictureSelect'
import { pictures } from './data';


describe('第一个测试用例', () => {
  it('测试组件渲染', () => {
    const wrapper = render(<PictureSelect pictures={pictures} />)
    const element = wrapper.getByTestId('test')
    console.log(element)
  })
})


// 语法有点忘记了