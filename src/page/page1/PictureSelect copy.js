import React from 'react'
import './Picture.css'
function PictureItem (props) {
  const { id, name, url, onChange, value } = props;
  const handleChange = (pid) => {
    let flag = value.find((idx) => idx === pid);
    if (flag) {
      //有,删除
      let newValue = value.filter((idx) => idx !== pid);
      onChange(newValue)
    } else {
      //没有,添加
      let newValue = JSON.parse(JSON.stringify(value));
      newValue.push(pid);
      onChange(newValue);
    }
  }
  return <div className="picture_item">
    <input type="checkbox" checked={value.find((idx) => idx === id) ? true : false} name={name} value={id} onChange={() => { handleChange(id) }} />
    <img src={url} alt={name} />
  </div>
}
function CheckAll (props) {
  const { onChange, value } = props;
  // 事件处理,点击以后才会发生改变的
  const handleChangeAll = () => {
    if (value.length === 3) {
      // 现在全部勾选,全部反选
      onChange([])
    }
    else if (value.length >= 0 && value.length < 3) {
      // 现在有1个或者2个,全部
      onChange(['1', '2', '3'])
    }
  }
  return <>
    <input type="checkbox" checked={value.length === 3 ? true : false} onChange={handleChangeAll} />
  </>
}
export default function PictureSelect (props) {
  const {
    pictures,//数据
    value,//数组
    onChange//回调
  } = props
  return (
    <div className="PictureSelect">
      <CheckAll onChange={onChange} value={value} />
      <br />
      {
        pictures.map((picture, index) => <PictureItem value={value} key={picture.id}  {...picture} onChange={onChange} />)
      }
    </div>

  )
}
