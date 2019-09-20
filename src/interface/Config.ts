interface Config {
    /**
     *UI给的svg文件路径，注意该路径下的所有文件都视为svg文件
     * @demo 'C:/Users/SDLP06/svg'
     * @type {string}
     * @memberof Config
     */
    svgPath: string;
    /**
     *生成好的svg组件导出到项目中的路径
     * @demo  'D:/yxl/project/svnpro/web_expo2/src/components/expo/'
     * @type {string}
     * @memberof Config
     */
    projectSvgComponentPath: string;
}
export default Config;