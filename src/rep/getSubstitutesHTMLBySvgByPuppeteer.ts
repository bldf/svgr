import { Page } from "puppeteer";
import BindSvg from "../interface/BindSvg";
import {sleep} from "../utils/tools" ;

/**
 *获取 绑定数据的 span html 会破坏svg ， 把svg需要绑定数据的html置为空
 * @demo [
    {
        id:'_10',
        describe:'设备台数',
        bind:'{deviceInfo.num}'
    },
    {
        id:'_99_',
        describe:'合格率',
        bind:'{deviceInfo.hgl}'
    },
    {
        id:'_2000',
        describe:'能源功率',
        bind:'{deviceInfo.a}'
    }
    ]
 * @param {BindSvg[]} arr
 * @returns {string}
 */
const getSubstitutesHTMLBySvg = (bindSvgStr: string): string => {
    var html = '';
    var arr = JSON.parse(bindSvgStr);
    arr.forEach((d, i) => {
        var el = document.querySelector(d.id);
        var rect;
        var style :any = {};
        if (el) {
            rect = el.getBoundingClientRect();
            if (el.getAttribute('font-size')) {
                style.fontSize = `${el.getAttribute('font-size')}px`;
            }
            if (el.getAttribute('font-family')) {
                style.fontFamily = `${el.getAttribute('font-family')}`;
            }
            if (el.getAttribute('font-weight')) {
                style.fontWeight = `${el.getAttribute('font-weight')}`;
            }
            if (el.getAttribute('fill')) {
                style.color = `${el.getAttribute('fill')}`;
            }
            style.position = 'absolute';
            style.top = (rect.top).toFixed(4) + 'px';
            style.left = (rect.left - Math.max(rect.width * 3, 200)).toFixed(4) + 'px';
            style.width = (rect.width + Math.max(rect.width * 3, 200)).toFixed(4) + 'px';
            style.height = (rect.height).toFixed(4) + 'px';
            style.lineHeight = (rect.height).toFixed(4) + 'px';
            style.textAlign = "right";
            html += `<span ${d.bindAttr ? d.bindAttr : ''} style={${JSON.stringify(style)}}>${d.bind}</span>`;
        }
    });
    arr.forEach((d, i) => {// 将原来的svg的被绑定的html转为空
        var el = document.querySelector(d.id);
        el && (el.outerHTML = '') ;
    });
    return html;
}



/**
 *从 puppeteer 浏览器中抓取 绑定的svg的span标签html字符串
 *
 * @param {Page} page
 * @param {BindSvg[]} bindSvgArr
 * @param {*} browserPath
 * @returns {Promise<{spanHTML:string,svgHTML:string}>}
 */
const getSubstitutesHTMLBySvgByPuppeteer = async (page: Page, bindSvgArr: BindSvg[],browserPath): Promise<{spanHTML:string,svgHTML:string}> => {
    let spanHTML = '' ;
    let svgHTML = '' ;
    await page.goto(browserPath);
    await sleep(1000*1) ;
    spanHTML = await page.evaluate(getSubstitutesHTMLBySvg, JSON.stringify(bindSvgArr));
    svgHTML =  await page.evaluate(()=>{
        return document.querySelector('svg').outerHTML; 
    });
     return {spanHTML,svgHTML}
}

export default getSubstitutesHTMLBySvgByPuppeteer;

// const 
