/**
 *读取磁盘HTML成功后的对象
 *
 * @interface FilesHtml
 */
interface FilesHtml {
    /**
     *电脑磁盘上的文件路径
     *
     * @type {string}
     * @memberof FilesHtml
     */
    filePath: string;
    /**
     *浏览器打开磁盘文件的路径
     *
     * @type {string}
     * @memberof FilesHtml
     */
    outBrowserPath: string;
    /**
     *保存到项目里页面名称
     *
     * @type {string}
     * @memberof FilesHtml
     */
    outProjectPageName: string;
    /**
     *当前遍历的文件index。 索引从1 开始
     *
     * @type {number}
     * @memberof FilesHtml
     */
    index: number;
    /**
     *文件名称
     *
     * @type {string}
     * @memberof FilesHtml
     */
    fileName:string ;
}

export default FilesHtml ;