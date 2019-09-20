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