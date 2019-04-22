!function(e,a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var t=a();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,a,t){t("201c"),e.exports=t("wx8R")},"2Csg":function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("q1tI"),h=t.n(p),d=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"md"},h.a.createElement("h1",null,"安装"),h.a.createElement("hr",null),h.a.createElement("h2",null,"使用 npm 安装"),h.a.createElement("p",null,"推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用"),h.a.createElement("pre",null,h.a.createElement("code",{className:"language-bash"},"npm install xview --save",h.a.createElement("br",null))))}}]),a}(h.a.Component);a.default=d},"7pUa":function(e){e.exports={"开发指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"快速开始"},{name:"logs",path:"/logs",desc:"更新日志"}],"组件":[{desc:"基础组件",path:"/component",items:[{desc:"Button 按钮",name:"button",path:"/button"},{desc:"Tag 标签",name:"tag",path:"/tag"}]}]}},"A5+8":function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("284h"),h=t.n(p),d=t("q1tI"),N=t.n(d),g=t("lSNA"),j=t.n(g),b=t("17x9"),v=t.n(b),f=function(e){function a(e){var t;return l()(this,a),(t=m()(this,o()(a).call(this,e))).state={},t}return i()(a,e),r()(a,[{key:"render",value:function(){var e=this,a=[e.props.type?"x-btn-"+e.props.type:null,e.props.round?"is-round":null,e.props.radius?"is-radius":null,e.props.circle?"is-circle":null,e.props.disabled?"is-disabled":null];return N.a.createElement("button",{className:"x-btn ".concat(a.join(" "))},e.props.children||"按钮")}}]),a}(d.Component);j()(f,"propTypes",{type:v.a.string,plain:v.a.bool,disabled:v.a.bool,round:v.a.bool,radius:v.a.bool,circle:v.a.bool}),j()(f,"defaultProps",{type:""});var y=f,w=t("n2wi");Promise.resolve().then(function(){return h()(t("Luly"))});var X=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return N.a.createElement("div",{className:"md"},N.a.createElement("h1",null,"Button 按钮"),N.a.createElement("hr",null),N.a.createElement("h3",null,"基础用法"),N.a.createElement("p",null,"使用",N.a.createElement("code",null,"type"),"定义按钮颜色, ",N.a.createElement("code",null,"circle")," ",N.a.createElement("code",null,"radius"),"  ",N.a.createElement("code",null,"round")," ",N.a.createElement("code",null,"disabled"),"属性来定义 Button 的样式。"),N.a.createElement("div",{className:"demo-block"},N.a.createElement("div",{className:"cell"},N.a.createElement(y,{circle:!0},N.a.createElement("i",{className:"icon-iconset0157 fs-16"})),N.a.createElement(y,{type:"plain",round:!0},"plain"),N.a.createElement(y,{type:"info",radius:!0},"info"),N.a.createElement(y,{type:"primary"},"primary"),N.a.createElement(y,{type:"success"},"success"),N.a.createElement(y,{type:"success",disabled:!0},"success"),N.a.createElement(y,{type:"warning"},"warning"),N.a.createElement(y,{type:"danger",radius:!0},N.a.createElement("i",{className:"icon-iconset0144 fs-16"})," danger")),N.a.createElement("div",{className:"cell"},N.a.createElement(y,{type:"outline",circle:!0},N.a.createElement("i",{className:"icon-iconset0157 fs-16"})),N.a.createElement(y,{type:"plain-outline",round:!0},"plain"),N.a.createElement(y,{type:"info-outline",radius:!0},"info"),N.a.createElement(y,{type:"primary-outline"},"primary"),N.a.createElement(y,{type:"success-outline"},"success"),N.a.createElement(y,{type:"success-outline",disabled:!0},"success"),N.a.createElement(y,{type:"warning-outline"},"warning"),N.a.createElement(y,{type:"danger-outline",radius:!0},N.a.createElement("i",{className:"icon-iconset0144 fs-16"})," danger"))),N.a.createElement(w.a,null,N.a.createElement("pre",null,N.a.createElement("code",{className:"language-html"},N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"div")," ",N.a.createElement("span",{className:"hljs-attr"},"class"),"=",N.a.createElement("span",{className:"hljs-string"},'"demo-block"'),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"circle"),">"),N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"i")," ",N.a.createElement("span",{className:"hljs-attr"},"className"),"=",N.a.createElement("span",{className:"hljs-string"},'"icon-iconset0157 fs-16"'),">"),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"i"),">"),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"plain"')," ",N.a.createElement("span",{className:"hljs-attr"},"round"),">"),"plain",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"info"')," ",N.a.createElement("span",{className:"hljs-attr"},"radius"),">"),"info",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"primary"'),">"),"primary",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"success"'),">"),"success",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"success"')," ",N.a.createElement("span",{className:"hljs-attr"},"disabled"),">"),"success",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"warning"'),">"),"warning",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"danger"')," ",N.a.createElement("span",{className:"hljs-attr"},"radius"),">"),N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"i")," ",N.a.createElement("span",{className:"hljs-attr"},"className"),"=",N.a.createElement("span",{className:"hljs-string"},'"icon-iconset0144 fs-16"'),">"),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"i"),">")," danger",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"outline"')," ",N.a.createElement("span",{className:"hljs-attr"},"circle"),">"),N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"i")," ",N.a.createElement("span",{className:"hljs-attr"},"className"),"=",N.a.createElement("span",{className:"hljs-string"},'"icon-iconset0157 fs-16"'),">"),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"i"),">"),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"plain-outline"')," ",N.a.createElement("span",{className:"hljs-attr"},"round"),">"),"plain",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"info-outline"')," ",N.a.createElement("span",{className:"hljs-attr"},"radius"),">"),"info",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"primary-outline"'),">"),"primary",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"success-outline"'),">"),"success",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"success-outline"')," ",N.a.createElement("span",{className:"hljs-attr"},"disabled"),">"),"success",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"warning-outline"'),">"),"warning",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"        ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xbutton")," ",N.a.createElement("span",{className:"hljs-attr"},"type"),"=",N.a.createElement("span",{className:"hljs-string"},'"danger-outline"')," ",N.a.createElement("span",{className:"hljs-attr"},"radius"),">"),N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"i")," ",N.a.createElement("span",{className:"hljs-attr"},"className"),"=",N.a.createElement("span",{className:"hljs-string"},'"icon-iconset0144 fs-16"'),">"),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"i"),">")," danger",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xbutton"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null)))),N.a.createElement("h3",null,"Attributes"),N.a.createElement("table",null,N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"参数"),N.a.createElement("th",null,"说明"),N.a.createElement("th",null,"类型"),N.a.createElement("th",null,"可选值"),N.a.createElement("th",null,"默认值"))),N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",null,"type"),N.a.createElement("td",null,"类型  +(-outline)为线条按钮"),N.a.createElement("td",null,"string"),N.a.createElement("td",null,"plain , primary , success , info , warning , danger"),N.a.createElement("td",null,"—")),N.a.createElement("tr",null,N.a.createElement("td",null,"round"),N.a.createElement("td",null,"圆端按钮"),N.a.createElement("td",null,"Boolean"),N.a.createElement("td",null,"—"),N.a.createElement("td",null,"false")),N.a.createElement("tr",null,N.a.createElement("td",null,"radius"),N.a.createElement("td",null,"圆角按钮"),N.a.createElement("td",null,"boolean"),N.a.createElement("td",null,"—"),N.a.createElement("td",null,"false")),N.a.createElement("tr",null,N.a.createElement("td",null,"disabled"),N.a.createElement("td",null,"是否禁用状态"),N.a.createElement("td",null,"boolean"),N.a.createElement("td",null,"—"),N.a.createElement("td",null,"false")))),N.a.createElement("h3",null,"Event"),N.a.createElement("table",null,N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"事件名称"),N.a.createElement("th",null,"说明"),N.a.createElement("th",null,"回调参数"))),N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",null,"按自己需求绑"),N.a.createElement("td",null),N.a.createElement("td",null)))))}}]),a}(N.a.Component);a.default=X},D4Np:function(e,a,t){var n={"./":"WwSE","./index":"WwSE","./index.jsx":"WwSE","./index.scss":"yYKh"};function l(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id="D4Np"},Luly:function(e,a,t){},"Mz+e":function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("q1tI"),h=t.n(p),d=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"md"},h.a.createElement("h1",null,"介绍"),h.a.createElement("hr",null),h.a.createElement("p",null,h.a.createElement("code",null,"xview")," 是一款基于 ",h.a.createElement("code",null,"react.js 16.0")," 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品"),h.a.createElement("h2",null,"特性"),h.a.createElement("ul",null,h.a.createElement("li",null,"基于 ",h.a.createElement("code",null,"react")," 开发的 UI 组件"),h.a.createElement("li",null,"使用 npm + webpack + babel 的工作流，支持 ES2015"),h.a.createElement("li",null,"提供友好的 API，可灵活的使用组件")),h.a.createElement("h2",null,"浏览器支持"),h.a.createElement("ul",null,h.a.createElement("li",null,"现代浏览器和 IE9 及以上"),h.a.createElement("li",null,h.a.createElement("a",{href:"http://electron.atom.io/"},"Electron")),h.a.createElement("li",null,h.a.createElement("a",{href:"http://nwjs.io"},"NW.js"))),h.a.createElement("h2",null,"贡献"),h.a.createElement("p",null,"如果你在使用 ",h.a.createElement("code",null,"xview")," 时遇到问题，或者有好的建议，欢迎给我们提 ",h.a.createElement("a",{href:"https://github.com/xview/xview/issues"},"Issue")," 或 ",h.a.createElement("a",{href:"https://github.com/xview/xview/pulls"},"Pull Request")))}}]),a}(h.a.Component);a.default=d},QrRY:function(e,a,t){},T0xl:function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("q1tI"),h=t.n(p),d=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"md"},h.a.createElement("h1",null,"Logs 更新日志"),h.a.createElement("hr",null),h.a.createElement("ul",null,h.a.createElement("li",null,"2019/04/19 ",h.a.createElement("code",null,"v1.0")," 发布")))}}]),a}(h.a.Component);a.default=d},WwSE:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return N});var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("q1tI"),h=t.n(p),d=t("2iEm"),N=(t("yYKh"),function(e){function a(e){var t;return l()(this,a),(t=m()(this,o()(a).call(this,e))).state={height:document.documentElement.clientHeight},t}return i()(a,e),r()(a,[{key:"render",value:function(){return h.a.createElement(p.Fragment,null,h.a.createElement("div",{className:"pg-index"},h.a.createElement("div",{className:"index-container"},h.a.createElement("img",{src:"../../static/img/logo.png"}),h.a.createElement("p",null,"一款轻量级、模块化的前端 UI 组件库")),h.a.createElement("div",{className:"separate-panel"},h.a.createElement("div",{className:"about"},h.a.createElement(d.a,{to:"./giud"},"开始使用"),h.a.createElement("a",{target:"_blank",className:"btn-github",href:"https://github.com/a7866443121/xview"},"GitHub")))))}}]),a}(p.Component))},Ys1S:function(e,a,t){var n={"./button.md":"A5+8","./giud.md":"Mz+e","./install.md":"2Csg","./logs.md":"T0xl","./start.md":"hD8l","./tag.md":"tvn+"};function l(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id="Ys1S"},hD8l:function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("q1tI"),h=t.n(p),d=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"md"},h.a.createElement("h1",null,"快速上手"),h.a.createElement("hr",null),h.a.createElement("h2",null,"使用前准备"),h.a.createElement("blockquote",null,h.a.createElement("p",null,"在使用之前，推荐学习 ",h.a.createElement("code",null,"react")," 和 ",h.a.createElement("code",null,"ES2015")," ，并正确配置 ",h.a.createElement("code",null,"Node.js")," v6.x 或以上版本")))}}]),a}(h.a.Component);a.default=d},n2wi:function(e,a,t){"use strict";t.d(a,"a",function(){return b});var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("PJYZ"),i=t.n(E),p=t("7W2i"),h=t.n(p),d=t("lSNA"),N=t.n(d),g=t("q1tI"),j=t.n(g),b=function(e){function a(e){var t;return l()(this,a),t=m()(this,o()(a).call(this,e)),N()(i()(t),"toggle",function(){var e=i()(t);t.setState({isExpand:!e.state.isExpand})}),t.state={isExpand:!1},t}return h()(a,e),r()(a,[{key:"render",value:function(){var e=this.state;return j.a.createElement("div",{className:"docs-demo-wrapper"},j.a.createElement("div",{style:{height:e.isExpand?"auto":"0"},className:"demo-container"},j.a.createElement("div",{span:"14"},j.a.createElement("div",{className:"docs-demo docs-demo--expand"},j.a.createElement("div",{className:"highlight-wrapper"},this.props.children)))),j.a.createElement("span",{className:"docs-trans docs-demo-triangle",onClick:this.toggle},e.isExpand?"隐藏代码":"显示代码"))}}]),a}(g.Component)},"tvn+":function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("284h"),h=t.n(p),d=t("q1tI"),N=t.n(d),g=t("PJYZ"),j=t.n(g),b=t("lSNA"),v=t.n(b),f=t("17x9"),y=t.n(f),w=function(e){function a(e){var t;return l()(this,a),t=m()(this,o()(a).call(this,e)),v()(j()(t),"hiddenTag",function(e){t.state.isclosed=!1,vm.props.onclose(e,t.name)}),t.state={isclosed:!0},t}return i()(a,e),r()(a,[{key:"render",value:function(){var e=this,a=[e.props.color?"x-tag-"+e.props.color:null,e.props.ishover?"is-hover":null];return this.state.isclosed?N.a.createElement("div",{className:"x-tag ".concat(a.join(" "))},N.a.createElement("span",{className:"x-tag-desc"},e.props.children),e.props.closable?N.a.createElement("i",{className:"icon-iconset0127 x-tag-close"}):""):""}}]),a}(d.Component);v()(w,"propTypes",{color:y.a.string,ishover:y.a.bool,isclosed:y.a.bool});var X=w,k=t("n2wi");Promise.resolve().then(function(){return h()(t("Luly"))});var x=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return N.a.createElement(N.a.Fragment,null,N.a.createElement("div",null,N.a.createElement(X,null,"标签一"),N.a.createElement(X,{color:"info"},"标签三"),N.a.createElement(X,{color:"primary"},"标签二"),N.a.createElement(X,{color:"success"},"标签二"),N.a.createElement(X,{color:"warning"},"标签四"),N.a.createElement(X,{color:"danger"},"标签五")),N.a.createElement("div",null,N.a.createElement(X,{ishover:!0},"hover1"),N.a.createElement(X,{ishover:!0,color:"info"},"hover3"),N.a.createElement(X,{ishover:!0,color:"primary"},"标签二"),N.a.createElement(X,{ishover:!0,color:"success"},"hover2"),N.a.createElement(X,{ishover:!0,color:"warning"},"hover4"),N.a.createElement(X,{ishover:!0,color:"danger"},"hover5")))}}]),a}(N.a.Component),C=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return[{name:"标签一",color:"primary"},{name:"标签二",color:"success"},{name:"标签三",color:"info"},{name:"标签四",color:"warning"},{name:"标签五",color:"danger"}].map(function(e,a){return N.a.createElement(X,{key:a,ishover:a<=2,closable:!0,color:e.color,name:e.name,onclose:function(e,a){console.log(e,a)}},e.name)})}}]),a}(N.a.Component),W=function(e){function a(){return l()(this,a),m()(this,o()(a).apply(this,arguments))}return i()(a,e),r()(a,[{key:"render",value:function(){return N.a.createElement("div",{className:"md"},N.a.createElement("h1",null,"Tag 标签"),N.a.createElement("hr",null),N.a.createElement("h3",null,"基础用法"),N.a.createElement("p",null,"由",N.a.createElement("code",null,"type"),"属性来选择tag的类型，也可以通过",N.a.createElement("code",null,"color"),"属性来自定义背景色。"),N.a.createElement("div",{className:"md__demo"},N.a.createElement("div",{className:"demo-block"},N.a.createElement(x,null)),N.a.createElement(k.a,{className:"docs-demo-wrapper"},N.a.createElement("pre",null,N.a.createElement("code",{className:"language-js"},"render() ","{",N.a.createElement("br",null),"  ",N.a.createElement("span",{className:"hljs-keyword"},"return")," ",N.a.createElement("span",{className:"xml"},N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"React.Fragment"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),"标签一",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"info"'),">"),"标签三",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"primary"'),">"),"标签二",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"success"'),">"),"标签二",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"warning"'),">"),"标签四",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"danger"'),">"),"标签五",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"ishover"),">"),"hover1",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"ishover")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"info"'),">"),"hover3",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"ishover")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"primary"'),">"),"标签二",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"ishover")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"success"'),">"),"hover2",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"ishover")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"warning"'),">"),"hover4",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"      ",N.a.createElement("span",{className:"hljs-tag"},"<",N.a.createElement("span",{className:"hljs-name"},"Xtag")," ",N.a.createElement("span",{className:"hljs-attr"},"ishover")," ",N.a.createElement("span",{className:"hljs-attr"},"color"),"=",N.a.createElement("span",{className:"hljs-string"},'"danger"'),">"),"hover5",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"Xtag"),">"),N.a.createElement("br",null),"    ",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"div"),">"),N.a.createElement("br",null),"  ",N.a.createElement("span",{className:"hljs-tag"},"</",N.a.createElement("span",{className:"hljs-name"},"React.Fragment"),">"),N.a.createElement("br",null),"}",N.a.createElement("br",null)))))),N.a.createElement("h3",null,"可移除标签"),N.a.createElement("p",null,"设置",N.a.createElement("code",null,"closable"),"属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。"),N.a.createElement("div",{className:"md__demo"},N.a.createElement("div",{className:"demo-block"},N.a.createElement(C,null)),N.a.createElement(k.a,{className:"docs-demo-wrapper"},N.a.createElement("pre",null,N.a.createElement("code",{className:"language-js"},"render() ","{",N.a.createElement("br",null),"  const dynamicTags = [",N.a.createElement("br",null),"    ","{",N.a.createElement("br",null),"        name: '标签一',",N.a.createElement("br",null),"        color:'primary'",N.a.createElement("br",null),"    ","}",",","{",N.a.createElement("br",null),"        name: '标签二',",N.a.createElement("br",null),"        color: 'success' ",N.a.createElement("br",null),"    ","}",", ","{",N.a.createElement("br",null),"        name: '标签三',",N.a.createElement("br",null),"        color: 'info' ",N.a.createElement("br",null),"    ","}",", ","{",N.a.createElement("br",null),"        name: '标签四',",N.a.createElement("br",null),"        color: 'warning'           ",N.a.createElement("br",null),"    ","}",", ","{",N.a.createElement("br",null),"        name: '标签五',",N.a.createElement("br",null),"        color: 'danger'",N.a.createElement("br",null),"    ","}",N.a.createElement("br",null),"  ];",N.a.createElement("br",null),"return dynamicTags.map((v,i) => ",N.a.createElement("br",null),"    <Xtag",N.a.createElement("br",null),"      key=","{","i","}",N.a.createElement("br",null),"      ishover=","{","i <= 2","}",N.a.createElement("br",null),"      closable ",N.a.createElement("br",null),"      color=","{","v.color","}",N.a.createElement("br",null),"      name=","{","v.name","}"," ",N.a.createElement("br",null),"      onclose=","{","(e,n) => ","{","console.log(e,n)","}","}",">",N.a.createElement("br",null),"      ","{","v.name","}",N.a.createElement("br",null),"    </Xtag>    ",N.a.createElement("br",null),"  )",N.a.createElement("br",null),"}",N.a.createElement("br",null))))),N.a.createElement("h2",null,"API"),N.a.createElement("table",null,N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"参数"),N.a.createElement("th",null,"说明"),N.a.createElement("th",null,"类型"),N.a.createElement("th",null,"可选值"),N.a.createElement("th",null,"默认值"))),N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",null,"name"),N.a.createElement("td",null,"用于触发关闭事件时的回调"),N.a.createElement("td",null,"Boolean"),N.a.createElement("td",null,"—"),N.a.createElement("td",null,"false")),N.a.createElement("tr",null,N.a.createElement("td",null,"color"),N.a.createElement("td",null,"类型"),N.a.createElement("td",null,"String"),N.a.createElement("td",null,N.a.createElement("code",null,"primary"),", ",N.a.createElement("code",null,"success"),", ",N.a.createElement("code",null,"error"),", ",N.a.createElement("code",null,"warning"),", ",N.a.createElement("code",null,"info")),N.a.createElement("td",null,"primary")),N.a.createElement("tr",null,N.a.createElement("td",null,"ishover"),N.a.createElement("td",null,"是否有hover效果"),N.a.createElement("td",null,"Boolean"),N.a.createElement("td",null,"—"),N.a.createElement("td",null,"false")),N.a.createElement("tr",null,N.a.createElement("td",null,"closable"),N.a.createElement("td",null,"是否可关闭"),N.a.createElement("td",null,"Boolean"),N.a.createElement("td",null,"—"),N.a.createElement("td",null,"false")))),N.a.createElement("h2",null,"Tag 事件"),N.a.createElement("table",null,N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"事件名称"),N.a.createElement("th",null,"说明"),N.a.createElement("th",null,"返回值"))),N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",null,"onclose"),N.a.createElement("td",null,"点击关闭按钮时触发"),N.a.createElement("td",null,"event,name")))))}}]),a}(N.a.Component);a.default=W},uNg9:function(e,a,t){},wx8R:function(e,a,t){"use strict";t.r(a);var n=t("lwsE"),l=t.n(n),s=t("W8MJ"),r=t.n(s),c=t("a1gu"),m=t.n(c),u=t("Nsbk"),o=t.n(u),E=t("7W2i"),i=t.n(E),p=t("q1tI"),h=t.n(p),d=t("IN8/"),N=t("jKe7"),g=t("2INN"),j=t("PJYZ"),b=t.n(j),v=t("lSNA"),f=t.n(v),y=t("284h"),w=t.n(y),X=t("7pUa"),k=[];Object.keys(X).forEach(function(e){k=k.concat(X[e])});function x(e){var a,t;return t=a=function(a){function t(){var e,a;l()(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return a=m()(this,(e=o()(t)).call.apply(e,[this].concat(s))),f()(b()(a),"state",{Component:t.Component}),a}return i()(t,a),r()(t,[{key:"componentWillMount",value:function(){var a=this;this.state.Component||e().then(function(e){var n=e.default;t.Component=n,a.setState({Component:n})})}},{key:"render",value:function(){var e=this.state.Component;return e?h.a.createElement(e,this.props):null}}]),t}(h.a.Component),f()(a,"Component",null),t}var C,W=function e(a){return a.forEach(function(a){if(a.items)e(a.items),k=k.concat(a.items);else{if("pages"===a.type)return void(a.component=x(function(){return Promise.resolve().then(function(){return w()(t("D4Np")("./".concat(a.name)))})}));a.component=x(function(){return Promise.resolve().then(function(){return w()(t("Ys1S")("./".concat(a.name,".md")))})})}}),k}(k),I=(t("QrRY"),t("2iEm")),S=function(e){function a(e){var t;return l()(this,a),(t=m()(this,o()(a).call(this,e))).state={data:X},t}return i()(a,e),r()(a,[{key:"render",value:function(){var e=this.state.data,a=Object.keys(e),t=location.hash;return h.a.createElement("div",{className:"side-nav nav"},a.map(function(a){return h.a.createElement("div",{className:"group-container",key:a},h.a.createElement("p",{className:"side-nav-title"},a),e[a].map(function(e){return e.desc?h.a.createElement("div",{className:"side-nav-items",key:e.desc},e.name?h.a.createElement(I.a,{className:t===e.name?"active":"",to:"./"+e.name},e.desc):h.a.createElement("p",{className:"side-nav-group"},e.desc),e.items?e.items.map(function(a){return h.a.createElement("div",{key:a.name},h.a.createElement(I.a,{to:"./"+a.name,className:"slid-nav-component "+t===e.name?"active":""},a.desc))}):null):null}))}))}}]),a}(p.Component),M=function(e){function a(e){var t;return l()(this,a),(t=m()(this,o()(a).call(this,e))).state={},t}return i()(a,e),r()(a,[{key:"render",value:function(){var e=location.hash;return h.a.createElement(p.Fragment,null,h.a.createElement("div",{className:"page-header",style:{boxShadow:"index"===e?"none":"0 10px 60px 0 rgba(29,29,31,0.07)"}},h.a.createElement("div",{className:"header-container"},h.a.createElement("a",{href:"./index'"},h.a.createElement("img",{src:"./static/img/logo.png",width:"100"})),h.a.createElement("a",{href:"./giud"},"组件"))))}}]),a}(p.Component),J=function(e){function a(e){var t;return l()(this,a),(t=m()(this,o()(a).call(this,e))).state={init:!1},t}return i()(a,e),r()(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({init:!0})},250),this.setState({init:!0})}},{key:"render",value:function(){return h.a.createElement(d.a,null,h.a.createElement(h.a.Fragment,null,h.a.createElement(M,null),h.a.createElement("div",{className:"container"},h.a.createElement(S,{className:"nav"}),h.a.createElement("section",{className:"view"},h.a.createElement(N.a,null,W.map(function(e,a){return h.a.createElement(g.a,{path:e.path,component:e.component,key:a})}))))))}}]),a}(p.Component),T=(t("uNg9"),t("i8i4")),q=t.n(T),P=t("0cfB");C=J,q.a.render(h.a.createElement(P.AppContainer,null,h.a.createElement(C,null)),document.getElementById("app"))},yYKh:function(e,a,t){}},[[0,1,2]]])});