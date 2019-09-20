
var fs = require('fs');
var path = require('path');
/**
 *睡眠
 *
 * @param {number} ms 毫秒数
 * @returns {Promise<Object>}
 */
const sleep=(ms:number):Promise<Object>=>{
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

/**
 *同步删除文件夹
 *
 * @param {string} dirPath 文件夹的路径
 */
const  rmdirSync=(dirPath:string)=>{
	if(fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
		var files = fs.readdirSync(dirPath);
		files.forEach(function(file, index) {
			var curPath = path.join(dirPath, file);
			if(fs.statSync(curPath).isDirectory()) {
				rmdirSync(curPath);
			} else {
				// console.log(curPath);
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(dirPath);
	}
}


export  {
    sleep,
    rmdirSync
}