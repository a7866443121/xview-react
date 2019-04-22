:::import
```js
import Xtag from '../../packages/tag/index.js';
import DemoBlock from '../components/DemoBlock.jsx';
import('./style/button.css');
```
:::

# Tag 标签
----
### 基础用法
由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

:::demo
```js
render() {
  return <React.Fragment>
    <div>
      <Xtag>标签一</Xtag>
      <Xtag color="info">标签三</Xtag>
      <Xtag color="primary">标签二</Xtag>
      <Xtag color="success">标签二</Xtag>
      <Xtag color="warning">标签四</Xtag>
      <Xtag color="danger">标签五</Xtag>
    </div>
    <div>
      <Xtag ishover>hover1</Xtag>
      <Xtag ishover color="info">hover3</Xtag>
      <Xtag ishover color="primary">标签二</Xtag>
      <Xtag ishover color="success">hover2</Xtag>
      <Xtag ishover color="warning">hover4</Xtag>
      <Xtag ishover color="danger">hover5</Xtag>
    </div>
  </React.Fragment>
}
```
:::



### 可移除标签
设置```closable```属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。

:::demo
```js
render() {
  const dynamicTags = [
    {
        name: '标签一',
        color:'primary'
    },{
        name: '标签二',
        color: 'success' 
    }, {
        name: '标签三',
        color: 'info' 
    }, {
        name: '标签四',
        color: 'warning'           
    }, {
        name: '标签五',
        color: 'danger'
    }
  ];

  return dynamicTags.map((v,i) => 
    <Xtag
      key={i}
      ishover={i <= 2}
      closable 
      color={v.color}
      name={v.name} 
      onclose={(e,n) => {console.log(e,n)}}>
      {v.name}
    </Xtag>    
  )
}
```
:::


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 类型 | String |  `primary`, `success`, `error`, `warning`, `info` | primary |
| ishover | 是否有hover效果 | Boolean | — | false |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onclose | 点击关闭按钮时触发 | event,name |
