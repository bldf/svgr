// 将style 转换为object对象
/**
* demo: "width:1920px" 
*    return   {width:'1920px'}
*/   
function cssToObj(str){
    var re =  str.replace(/: ?/g, ": '")
               .replace(/;/g, "',")
               .replace(/-[^0-9]/g, function (v) {
                   return v.charAt(1).toUpperCase()
               }) ;
               if(re[re.length-1]==","){
                   re = re.substring(0,re.length-1);
               }
               if(re[re.length-1]!="'"){
                   re += "'" ;
               }
    var obj = eval('({'+re+'})') ;
    return obj ;
}
/**
 * svgToReactSvg 的返回值
 *
 * @interface ToSvgObj
 */
interface ToSvgObj{
    /**
     *提取svg中的style标签内容
     *
     * @type {string}
     * @memberof ToSvgObj
     */
    outStyle:string; 
    /**
     *转出的React能识别的svg
     *
     * @type {string}
     * @memberof ToSvgObj
     */
    outSvg:string ;
}
/**
 *将 原始svg转换为 React能识别的svg
 *
 * @param {string} inSvg
 * @returns
 */
function svgToReactSvg(inSvg:string):ToSvgObj{
    let str = inSvg ;
    let re = false ;
    let outStyle = '' ;
    let outSvg = '' ; 
    try {
        str = str.replace(/\s+style="([^"]*)"/gi,function(s){
            // str = str.replace(/style\=.*(\")/gi,function(s){
            // console.log(RegExp.$1)
            var o = cssToObj ( RegExp.$1 )  ;
            var re = ' style={'+JSON.stringify(o)+'} ' ; 
            return  re;
        }) ;    
    } catch (error) {
        re = true ;
        console.error('程序报错')
    }
    if(re){
        return ;
    }
    str = str.replace(/class=/gi,'className=').replace(/xmlns\:xlink\=/gi,'xmlnsXlink=').replace(/xml\:space=/gi,'xmlSpace=') ;
    str = str.replace(/stop\-color=/gi,'stopColor=').replace(/stop\-opacity\=/gi,'stopOpacity=').replace(/flood\-color=/gi,'floodColor=') ;
    str = str.replace(/flood\-opacity=/gi,'floodOpacity=').replace(/xlink\:href=/gi,'xlinkHref=').replace(/font\-size=/gi,'fontSize=');
    str = str.replace(/font\-family=/gi,'fontFamily=').replace(/font\-weight/gi,'fontWeight').replace(/letter\-spacing=/gi,'letterSpacing=');
    str = str.replace(/stroke\-width=/gi,'strokeWidth=').replace(/clip\-path=/gi,'clipPath=').replace(/fill\-rule=/gi,'fillRule=') ;
    str = str.replace(/stroke\-linecap=/gi,'strokeLinecap=').replace(/stroke-linejoin=/gi,'strokeLinejoin=').replace(/text\-decoration=/gi,'textDecoration=') ;
    // .replace(/fill\-rule=/gi,'fillRule=') ;
    

    outStyle = (str.match(/<style(([\s\S])*?)<\/style>/gi) || [] ).join('') ; 
    outStyle =outStyle.replace(/\<\s*style\s*\>/gi,'').replace(/\<\s*\/style\s*\>/gi,'') ; 
    str = str.replace(/<style(([\s\S])*?)<\/style>/gi,'');//删除所有的style标签
    outSvg = str ; 
    return {
        outStyle,
        outSvg
    } ;
}

export default svgToReactSvg ;