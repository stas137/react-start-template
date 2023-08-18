"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[458],{"./src/components/Cart/CartBody/CartBody.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _CartBodyStandard$par,_CartBodyStandard$par2,_CartBodyStandard$par3;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CartBodyStandard:()=>CartBodyStandard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CartBody",component:__webpack_require__("./src/components/Cart/CartBody/CartBody.tsx").x,tags:["autodocs"],parameters:{layout:"fullscreen"}};var CartBodyStandard={args:{}};CartBodyStandard.parameters=_objectSpread(_objectSpread({},CartBodyStandard.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CartBodyStandard$par=CartBodyStandard.parameters)||void 0===_CartBodyStandard$par?void 0:_CartBodyStandard$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    // size: 's',\n    // price: '1205',\n    // title: 'Гель для стирки Ласка (Super)',\n    // description:\n    //   'Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)',\n    // images: ProductImg1,\n  }\n}"},null===(_CartBodyStandard$par2=CartBodyStandard.parameters)||void 0===_CartBodyStandard$par2||null===(_CartBodyStandard$par3=_CartBodyStandard$par2.docs)||void 0===_CartBodyStandard$par3?void 0:_CartBodyStandard$par3.source)})});var __namedExportsOrder=["CartBodyStandard"]},"./src/components/Cart/CartBody/CartBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>CartBody_CartBody_CartBody});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),CartItem=__webpack_require__("./src/components/Cart/CartItem/CartItem.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CartBody=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Cart/CartBody/CartBody.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CartBody.Z,options);CartBody.Z&&CartBody.Z.locals&&CartBody.Z.locals;var product1=__webpack_require__("./src/stories/assets/product1.jpg"),product3=__webpack_require__("./src/stories/assets/product3.jpg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartBody_CartBody_CartBody=function CartBody(props){var className=props.className;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("CartBody",className),children:[(0,jsx_runtime.jsx)(CartItem.b,{title:"Гель для стирки Ласка (Super)",img:product1,price:"1205",count:1}),(0,jsx_runtime.jsx)(CartItem.b,{title:"Гель для стирки Ласка (Super)",img:product3,price:"1205",count:1})]})};CartBody_CartBody_CartBody.displayName="CartBody";try{CartBody_CartBody_CartBody.displayName="CartBody",CartBody_CartBody_CartBody.__docgenInfo={description:"",displayName:"CartBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cart/CartBody/CartBody.tsx#CartBody"]={docgenInfo:CartBody_CartBody_CartBody.__docgenInfo,name:"CartBody",path:"src/components/Cart/CartBody/CartBody.tsx#CartBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Cart/CartItem/CartItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>CartItem_CartItem_CartItem});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),ButtonCart=__webpack_require__("./src/components/ButtonCart/ButtonCart.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CartItem=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Cart/CartItem/CartItem.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CartItem.Z,options);CartItem.Z&&CartItem.Z.locals&&CartItem.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var CartItem_CartItem_CartItem=function CartItem(props){var className=props.className,img=props.img,title=props.title,price=props.price,count=props.count,_useState2=_slicedToArray((0,react.useState)(count),2),countProducts=_useState2[0],setCountProducts=_useState2[1];return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("CartItem",className),children:[(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("CartItem--wrapper-image"),children:(0,jsx_runtime.jsx)("img",{className:(0,clsx_m.Z)("CartItem--image"),src:img,alt:title})}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("CartItem--title"),children:(0,jsx_runtime.jsx)("span",{children:title})}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("CartItem--price"),children:(0,jsx_runtime.jsxs)("span",{children:[price,"₽"]})}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("CartItem--delete-button"),children:(0,jsx_runtime.jsx)(Button.z,{children:"Delete"})}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("CartItem--count"),children:(0,jsx_runtime.jsx)(ButtonCart.k,{countProducts,setCountProducts})})]})};CartItem_CartItem_CartItem.displayName="CartItem";try{CartItem_CartItem_CartItem.displayName="CartItem",CartItem_CartItem_CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},img:{defaultValue:null,description:"",name:"img",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cart/CartItem/CartItem.tsx#CartItem"]={docgenInfo:CartItem_CartItem_CartItem.__docgenInfo,name:"CartItem",path:"src/components/Cart/CartItem/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Cart/CartBody/CartBody.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CartBody {\n  /* padding: 16px; */\n  /* background: #fff; */\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}","",{version:3,sources:["webpack://./src/components/Cart/CartBody/CartBody.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX",sourcesContent:[".CartBody {\n  /* padding: 16px; */\n  /* background: #fff; */\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Cart/CartItem/CartItem.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.CartItem {\n  padding: 16px;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.CartItem--wrapper-image {\n  width: 160px;\n  height: 160px;\n}\n\n.CartItem--image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 1em;\n}\n\n.CartItem--price {\n  padding: 8px;\n  background: green;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.CartItem--delete-button {\n  margin-left: auto;\n}\n\n.CartItem--title,\n.CartItem--price {\n  font-family: "Open Sans",arial,sans-serif;\n  font-size: 14px;\n}',"",{version:3,sources:["webpack://./src/components/Cart/CartItem/CartItem.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,yCAAyC;EACzC,eAAe;AACjB",sourcesContent:['.CartItem {\n  padding: 16px;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.CartItem--wrapper-image {\n  width: 160px;\n  height: 160px;\n}\n\n.CartItem--image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 1em;\n}\n\n.CartItem--price {\n  padding: 8px;\n  background: green;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.CartItem--delete-button {\n  margin-left: auto;\n}\n\n.CartItem--title,\n.CartItem--price {\n  font-family: "Open Sans",arial,sans-serif;\n  font-size: 14px;\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/assets/product1.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/product1.6a2f3dc4.jpg"},"./src/stories/assets/product3.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/product3.c87ad9fd.jpg"}}]);