import FilesHtml from "../interface/FielsHtml";

const Finder = require('fs-finder');

/**
 *
 *
 * @param {string} dir Demo:C:/Users/SDLP06/Desktop/work/新建文件夹 (3)/20190915工博会页面
 */
const getHtmlPathAll = (dir: string, fileName: string = "*.html"): FilesHtml[] => {
    // console.log(fileName)
    const files = Finder.from(dir).findFiles(fileName);
    // console.log(files);
    // console.log(files.length)
    const filesHtmlArr: FilesHtml[] = [];
    files.forEach((path: string, index: number) => {
        let filePath = 'file:///' + path.replace(/\\\\/gi, '\\');
        let arr = filePath.split('\\');
        let outProjectPageName = 'ComponentSvg_' + (index + 1) ;
        // let outProjectPageName = '';
        // try {//添加名称自定义,作用不大暂时先不用
        //     outProjectPageName = arr[arr.length - 2].split('_')[1];
        //     !outProjectPageName && (outProjectPageName = 'ComponentSvg_' + (index + 1));
        // } catch (error) {
        //     outProjectPageName = 'module_' + (index + 1);
        // }
        filesHtmlArr.push({
            index: index + 1,
            filePath: path,
            outBrowserPath: filePath,
            outProjectPageName: outProjectPageName,
            fileName:arr[arr.length - 1]

        });
    });
    return filesHtmlArr;
}

export default getHtmlPathAll;
