import React from 'react'
import { pictures } from './data';
import PictureSelect from './PictureSelect'
export default function Page1 () {
  /* 实现一个如下图的图片选择 组件 PictureSelect ，
  要求其能接受 value  和 onChange  两个属性， 
  value 表示当前选中了哪些图片， 
  onChange 是当选择发生变化时的回调，它的参数是新的 value 。 */
  const [value, setValue] = React.useState(['1']);

  console.log(value); // 输出用户选择图片 id。

  return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
}
