"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[238],{"./src/pages/EditProductPage/EditProductPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditProductPageStandard:()=>EditProductPageStandard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EditProductPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),product1=__webpack_require__("./src/stories/assets/product1.jpg"),Page=__webpack_require__("./src/components/Page/index.ts"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),ProductForm=__webpack_require__("./src/components/Forms/ProductForm/index.ts"),Title=__webpack_require__("./src/components/Title/index.ts"),validations=__webpack_require__("./src/utils/validations/validations.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProductCompletedForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/EditProductPage/ProductCompletedForm/ProductCompletedForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProductCompletedForm_module.Z,options);const ProductCompletedForm_ProductCompletedForm_module=ProductCompletedForm_module.Z&&ProductCompletedForm_module.Z.locals?ProductCompletedForm_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductCompletedForm=(0,react.memo)((function(_ref){var className=_ref.className,product=_ref.product,t=(0,es.$G)().t,_useMemo=(0,react.useMemo)((function(){return{initialValues:{name:product.name,photo:product.photo,description:null==product?void 0:product.description,oldPrice:null==product?void 0:product.oldPrice,price:product.price,category:product.category},onSubmit:function onSubmit(values,_ref2){_ref2.setErrors;console.log({values})},validate:function validate(values){var errors={};return(0,validations.nC)(values.name)&&(errors.name=t("errors.is_required")),errors}}}),[product,t]),onSubmit=_useMemo.onSubmit,validate=_useMemo.validate,initialValues=_useMemo.initialValues,formManager=(0,formik_esm.TA)({initialValues,onSubmit,validate}),submitForm=formManager.submitForm,setValues=formManager.setValues;return(0,react.useEffect)((function(){setValues({name:product.name,photo:product.photo,description:null==product?void 0:product.description,oldPrice:Number(null==product?void 0:product.oldPrice),price:Number(product.price),category:product.category})}),[product,setValues]),(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(ProductCompletedForm_ProductCompletedForm_module.root,className),children:[(0,jsx_runtime.jsx)(Title.D,{className:ProductCompletedForm_ProductCompletedForm_module.title,children:t("screens.EditProductScreen.editProduct.title")}),(0,jsx_runtime.jsx)(ProductForm.H,{formManager}),(0,jsx_runtime.jsx)(es_button.ZP,{type:"primary",loading:!1,onClick:submitForm,children:t("screens.EditProductScreen.editProduct.save")})]})}));ProductCompletedForm.displayName="ProductCompletedForm";try{ProductCompletedForm.displayName="ProductCompletedForm",ProductCompletedForm.__docgenInfo={description:"",displayName:"ProductCompletedForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/EditProductPage/ProductCompletedForm/ProductCompletedForm.tsx#ProductCompletedForm"]={docgenInfo:ProductCompletedForm.__docgenInfo,name:"ProductCompletedForm",path:"src/pages/EditProductPage/ProductCompletedForm/ProductCompletedForm.tsx#ProductCompletedForm"})}catch(__react_docgen_typescript_loader_error){}var EditProductPage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/EditProductPage/EditProductPage.module.scss"),EditProductPage_module_options={};EditProductPage_module_options.styleTagTransform=styleTagTransform_default(),EditProductPage_module_options.setAttributes=setAttributesWithoutAttributes_default(),EditProductPage_module_options.insert=insertBySelector_default().bind(null,"head"),EditProductPage_module_options.domAPI=styleDomAPI_default(),EditProductPage_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EditProductPage_module.Z,EditProductPage_module_options);const EditProductPage_EditProductPage_module=EditProductPage_module.Z&&EditProductPage_module.Z.locals?EditProductPage_module.Z.locals:void 0;var _templateObject;var EditProductPage=function EditProductPage(){var strings,raw,t=(0,es.$G)().t,product=(0,react.useMemo)((function(){return{name:"Laundry gel Laska (Super)",photo:[{uid:"product-img-11",name:"product-image-11.png",status:"done",url:product1}],description:"Restore COLOR for color, liquid laundry detergent 4L (66 washes)",oldPrice:1e3,price:1250,category:"notebook"}}),[]);return(0,jsx_runtime.jsx)(Page.T,{title:t(_templateObject||(strings=["screens.EditProductScreen.title"],raw||(raw=strings.slice(0)),_templateObject=Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})))),children:(0,jsx_runtime.jsx)("div",{className:EditProductPage_EditProductPage_module.block,children:(0,jsx_runtime.jsx)(ProductCompletedForm,{product})})})};EditProductPage.displayName="EditProductPage";try{EditProductPage.displayName="EditProductPage",EditProductPage.__docgenInfo={description:"",displayName:"EditProductPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/EditProductPage/EditProductPage.tsx#EditProductPage"]={docgenInfo:EditProductPage.__docgenInfo,name:"EditProductPage",path:"src/pages/EditProductPage/EditProductPage.tsx#EditProductPage"})}catch(__react_docgen_typescript_loader_error){}var _EditProductPageStand,_EditProductPageStand2,_EditProductPageStand3;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const EditProductPage_stories={title:"Pages/EditProductPage",component:EditProductPage,tags:["autodocs"],parameters:{layout:"fullscreen"}};var EditProductPageStandard={args:{}};EditProductPageStandard.parameters=_objectSpread(_objectSpread({},EditProductPageStandard.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EditProductPageStand=EditProductPageStandard.parameters)||void 0===_EditProductPageStand?void 0:_EditProductPageStand.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_EditProductPageStand2=EditProductPageStandard.parameters)||void 0===_EditProductPageStand2||null===(_EditProductPageStand3=_EditProductPageStand2.docs)||void 0===_EditProductPageStand3?void 0:_EditProductPageStand3.source)})});var __namedExportsOrder=["EditProductPageStandard"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/EditProductPage/EditProductPage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-EditProductPage-EditProductPage-module__block--s1_1AM6Y{width:100%}","",{version:3,sources:["webpack://./src/pages/EditProductPage/EditProductPage.module.scss"],names:[],mappings:"AAAA,mEACE,UAAA",sourcesContent:[".block {\n  width: 100%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={block:"src-pages-EditProductPage-EditProductPage-module__block--s1_1AM6Y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/EditProductPage/ProductCompletedForm/ProductCompletedForm.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-EditProductPage-ProductCompletedForm-ProductCompletedForm-module__title--I7uROSbO{font-size:16px;margin-bottom:12px}","",{version:3,sources:["webpack://./src/pages/EditProductPage/ProductCompletedForm/ProductCompletedForm.module.scss"],names:[],mappings:"AAAA,6FACE,cAAA,CACA,kBAAA",sourcesContent:[".title {\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={title:"src-pages-EditProductPage-ProductCompletedForm-ProductCompletedForm-module__title--I7uROSbO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/assets/product1.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/product1.6a2f3dc4.jpg"}}]);