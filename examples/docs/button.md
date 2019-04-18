:::import
```js
import Xbutton from '../../packages/button/index.js';
import DemoBlock from '../components/DemoBlock.jsx';
```
:::


# Button 按钮
----
### 基础用法
使用```type```定义按钮颜色, ```circle``` ```radius```  ```round``` ```disabled```属性来定义 Button 的样式。

<div class="demo-block">
	<div>
		<Xbutton circle><i className="icon-iconset0157 fs-16"></i></Xbutton>
		<Xbutton type="plain" round>plain</Xbutton>
		<Xbutton type="info" radius>info</Xbutton>
		<Xbutton type="primary">primary</Xbutton>
		<Xbutton type="success">success</Xbutton>
		<Xbutton type="success" disabled>success</Xbutton>
		<Xbutton type="warning">warning</Xbutton>
		<Xbutton type="danger" radius><i className="icon-iconset0144 fs-16"></i> danger</Xbutton>
	</div>
	<div>
		<Xbutton type="outline" circle><i className="icon-iconset0157 fs-16"></i></Xbutton>
		<Xbutton type="plain-outline" round>plain</Xbutton>
		<Xbutton type="info-outline" radius>info</Xbutton>
		<Xbutton type="primary-outline">primary</Xbutton>
		<Xbutton type="success-outline">success</Xbutton>
		<Xbutton type="success-outline" disabled>success</Xbutton>
		<Xbutton type="warning-outline">warning</Xbutton>
		<Xbutton type="danger-outline" radius><i className="icon-iconset0144 fs-16"></i> danger</Xbutton>
	</div>
</div>

<DemoBlock>

``` html
<div class="demo-block">
	<div>
		<Xbutton circle><i className="icon-iconset0157 fs-16"></i></Xbutton>
		<Xbutton type="plain" round>plain</Xbutton>
		<Xbutton type="info" radius>info</Xbutton>
		<Xbutton type="primary">primary</Xbutton>
		<Xbutton type="success">success</Xbutton>
		<Xbutton type="success" disabled>success</Xbutton>
		<Xbutton type="warning">warning</Xbutton>
		<Xbutton type="danger" radius><i className="icon-iconset0144 fs-16"></i> danger</Xbutton>
	</div>
	<div>
		<Xbutton type="outline" circle><i className="icon-iconset0157 fs-16"></i></Xbutton>
		<Xbutton type="plain-outline" round>plain</Xbutton>
		<Xbutton type="info-outline" radius>info</Xbutton>
		<Xbutton type="primary-outline">primary</Xbutton>
		<Xbutton type="success-outline">success</Xbutton>
		<Xbutton type="success-outline" disabled>success</Xbutton>
		<Xbutton type="warning-outline">warning</Xbutton>
		<Xbutton type="danger-outline" radius><i className="icon-iconset0144 fs-16"></i> danger</Xbutton>
	</div>
</div>
```

</DemoBlock>



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型  +(-outline)为线条按钮  | string    | plain , primary , success , info , warning , danger |     —    |
| round     | 圆端按钮  | Boolean    | — | false   |
| radius  | 圆角按钮    | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|     按自己需求绑    ||   |