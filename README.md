# svgr
将ui用XD软件导出的svg转换为React组件，配置需要绑定的标签可快速数据绑定
## 1. git clone https://github.com/bldf/svgr.git
## 2. npm install 
## 3. 配置 svg文件路径 (config/index.ts文件)

```
// config/index.ts
import Config from "../interface/Config" ;
const config:Config = {
    svgPath:'C:/Users/SDLP06/svg' , //svg文件夹路径
    projectSvgComponentPath:'D:/yxl/project/svnpro/web_expo2/src/components/expo/'//项目中存放svg组件的路径
}

export default config ; 
```

## 4. npm run dev 
###  配置绑定数据的配置文件 (config/bindSvgObjectArr.ts文件 )(可忽略)

```
const bindSvgObjectArr = {
    page_5: [
        { id: '#_2-2', describe: 'CT', bind: '{props["Robot_RC8_51!CT"]}' },
        { id: '#运行中-7', describe: '运行', bind: '{props.deviceAlarmCode1.deviceStatus}', bindAttr: `className={props.deviceAlarmCode1.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}` }
    ]
};
export default bindSvgObjectArr ; 
interface BindSvg{
/**
 *选中元素的选择器 ，  
 * demo : #app
 * @demo #app
 * @type {string}
 * @memberof SvgBind
 */
id:string ;
/**
 *描述，绑定的元素的描述
 *
 * @type {string}
 * @memberof SvgBind
 */
describe:string ; 
/**
 *绑定内容
 * @demo {props.info.name}
 * @type {string}
 * @memberof SvgBind
 */
bind:string ; 
/**
 *绑定的标签属性
 * @demo className={props.thisShowDev.deviceStatusCopy?'sd-int-do-ok':'sd-int-do-red'}
 * @type {string}
 * @memberof SvgBind
 */
bindAttr?:string;     
}

export default BindSvg ;

```

###  配置 svg文件内容替换 (config/bindSvgObjectArr.ts文件 )(可忽略)
有时候我们需要把svg中某些内容替换掉，比如className  , onClick，绑定事件等等。。。

```

/**
 *读取到的svg字符串进行字符串替换
 *
 * @param {string} str
 * @param {{index:number}} d
 * @returns {string}
 */
const rep = (str:string,d:{index:number}):string=>{
    str = str.replace(/id\="地标工博会选中"/gi, `id="地标工博会选中" style={props.check1}  onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="工博会选中"/gi, `id="工博会选中" style={props.check1}  onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="工博会"/gi, `id="工博会"  style={{cursor:"pointer"}}    onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="地标上海工厂"/gi, `id="地标上海工厂" style={props.check11}  onClick={()=>{props.checkFn(1)}} `);
    str = str.replace(/id\="查看详情-11"/gi, `id="查看详情-11"   onClick={()=>{props.checkInfoFn(1)}} `);

    if (d.index == 5) {
        str = str.replace(/id\="联合_22-6"/gi, `id="联合_22-6"   style={{fill:props.deviceAlarmCode1.deviceStatusCopy?'#5fd67e':'red'}} `);
       
    }
    return str ; 
}        
export default  rep ; 
```

### 配置渲染生产组件的模板  templateReactSvgComponent.ejs ， 默认如下

```
import React from 'react';
import style from './css/index.less' ;
import { connect } from 'dva';
function Base(props: any) {
    return (
        <div className={style.layout}>
                {{ spanHTML }}
                {{ reactSvg }}
            </div>
            )
};
export default connect((model: any) => {
    return {
      deviceAlarmCode1: model['index'].deviceAlarmCode1,
      deviceAlarmCode2: model['index'].deviceAlarmCode2,
      deviceAlarmCode3: model['index'].deviceAlarmCode3,
      deviceAlarmCode4: model['index'].deviceAlarmCode4,
      deviceAlarmCode5: model['index'].deviceAlarmCode5,
      UtilizationRate11:model['index'].UtilizationRate11,
      UtilizationRate21:model['index'].UtilizationRate21,
      UtilizationRate31:model['index'].UtilizationRate31,
      UtilizationRate41:model['index'].UtilizationRate41,
      UtilizationRate51:model['index'].UtilizationRate51,
      'Robot_RC8_11!CT':model['index']['Robot_RC8_11!CT'],
      'Robot_RC8_21!CT':model['index']['Robot_RC8_21!CT'],
      'Robot_RC8_31!CT':model['index']['Robot_RC8_31!CT'],
      'Robot_RC8_41!CT':model['index']['Robot_RC8_41!CT'],
      'Robot_RC8_51!CT':model['index']['Robot_RC8_51!CT'],
      thisShowDev:model['index'].thisShowDev
    }
  })(Base)
```
### 配置 生成页面的模板，默认不会保存到项目中，只是保存到dist文件夹下。templateReactSvgPage.ejs 

```
import React from 'react';
import {{reactSvgComponentName}} from "@/components/expo/{{ reactSvgComponentName }}" ;
import style from "./css/index.less" ;
export default function(){
    return (
        <div>
			       <{{reactSvgComponentName}}/>  
            <div className={style['layout']}>
                
            </div>
	  	</div>
    )
};
```
#### svg压缩优化，使用 svgo出了点问题，如有需要可查看
https://www.npmjs.com/package/svgo