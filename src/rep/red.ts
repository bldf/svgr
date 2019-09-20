import getHtmlPathAll from "./getHtmlPathAll";
import svgToReactSvg from "./svgToReactSvg";
import getSubstitutesHTMLBySvgByPuppeteer from "./getSubstitutesHTMLBySvgByPuppeteer";
import bindSvgObjectArr from "../config/bindSvgObjectArr";
import * as colors from "colors-console";
import replaceSvg from "../config/replaceSvg";
import config from "../config";
import * as mkdirp from "mkdirp-sync";
import { rmdirSync } from "../utils/tools";
import * as puppeteer from "puppeteer";
const swig = require('swig-templates');
swig.setDefaults({autoescape:false})
const templateReactSvgComponent = swig.compileFile('src/config/templateReactSvgComponent.ejs');
const templateReactSvgPage = swig.compileFile('src/config/templateReactSvgPage.ejs');
const FS = require('fs');
const TIME = Date.now();
const htmlPathAll = getHtmlPathAll(config.svgPath, '*');
const distComponentName="svgComponent" ;//组件保存到dist目录下的文件夹名称
const distSvgComponentName="svgComponentPage" ;//组件页面保存到dist目录下的文件夹名称
const distSvgPngName="svgPng" ;//svg图片保存到dist目录下的文件夹名称
const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const svgComponentFilePathArr = [] ;//生产的svg组件的路径
    const targetSvgComponentFilePathArr = [] ;//生产的svg组件要放的路径。 因为如果在开发时候，最后才复制组件，提高效率
    await page.setViewport({ width: 1920, height: 1080 });
    page.setDefaultNavigationTimeout(1000 * 60 * 5);
    mkdirp(process.cwd() + `/dist`) ;
    rmdirSync(process.cwd() + `/dist/${distComponentName}`);
    rmdirSync(process.cwd() + `/dist/${distSvgComponentName}`);
    rmdirSync(process.cwd() + `/dist/${distSvgPngName}`);
    mkdirp(process.cwd() + `/dist/${distComponentName}`);
    mkdirp(process.cwd() + `/dist/${distSvgComponentName}`);
    mkdirp(process.cwd() + `/dist/${distSvgPngName}`);
    console.log('开始加载svg文件...')
    for (const d of htmlPathAll) {
        let data: string = '';
        let spanHTML = ''; //读取绑定的span标签
        let str = "";
        let readSvgObj: { spanHTML: string, svgHTML: string } = { spanHTML: '', svgHTML: '' };
        let bindSvgArr = bindSvgObjectArr['page_' + d.index];
        //*********         begin  解析svg字符串 ******************* */    
        if (bindSvgArr) {//如果当前文件需要绑定
            console.log(colors('yellow', `检测到文件【 ${d.fileName} 】需要绑定数据,正在启动绑定...`));
            readSvgObj = await getSubstitutesHTMLBySvgByPuppeteer(page, bindSvgArr, d.outBrowserPath);
            spanHTML = readSvgObj.spanHTML;
            data = readSvgObj.svgHTML;
            console.log(colors('yellow', '读取绑定html成功...'));
            console.log(colors('yellow', '正在保存屏幕截图...'));
            await page.screenshot({ path: process.cwd() + `/dist/${distSvgPngName}/svg${d.index}.png` });
            console.log(colors('yellow', `屏幕截图保存成功[svg${d.index}.png]...`));
        } else {
            data = FS.readFileSync(d.filePath, 'utf8');
        }
        str = templateReactSvgComponent({
            spanHTML,
            reactSvg: svgToReactSvg(data).outSvg
        });
        str = replaceSvg(str, d);
        FS.writeFileSync(process.cwd() + `/dist/${distComponentName}/${d.outProjectPageName}.tsx`, str);
        svgComponentFilePathArr.push(process.cwd() + `/dist/${distComponentName}/${d.outProjectPageName}.tsx`) ;
        targetSvgComponentFilePathArr.push(`${config.projectSvgComponentPath}/${d.outProjectPageName}.tsx`) ;
        FS.writeFileSync(process.cwd() + `/dist/${distSvgComponentName}/page_${(d.index + 1)}.tsx`, templateReactSvgPage({ reactSvgComponentName: d.outProjectPageName }));
        // FS.writeFileSync(process.cwd() + '/dist/reactPage' +'/page_' + (d.index + 1) + '.tsx', repStr2.replace(/\*/gi, d.outProjectPageName).replace(/\#/gi, 'page_' + (d.index + 1)));
        console.log(colors('blue', `SVG文件【${d.fileName}】,转换并且保存成功...`));
        // });
    }
    // config.projectSvgComponentPath
    // projectSvgComponentPath
    await browser.close();
    svgComponentFilePathArr.forEach((d,i)=>{
        console.log(d,targetSvgComponentFilePathArr[i])
        FS.copyFile(d,targetSvgComponentFilePathArr[i],(err)=>{
            if (err) throw err;
            console.log(d+'源文件已拷贝到项目目标文件');
            i==svgComponentFilePathArr.length-1 && console.log(colors('cyan', `一共创建了SVG组件【${htmlPathAll.length}】个，一共用时【${(Date.now() - TIME) / 1000}】秒`)) ;
        }); 
    });
    
};
main();