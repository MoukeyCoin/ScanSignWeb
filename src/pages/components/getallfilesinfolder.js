// get all files in the folder include files in subfolder
//被webpack所处理，如果您将文件放入该public文件夹，webpack 将不会处理它，在你打包的时候，会将public文件夹直接复制一份到你构建出来的文件夹中。
//而src/assets目录的文件（前提你在js中有引入），它会被webpack编译，比如图片，如果你的图片小于你在webpack中的loader下设置的limit大小（可配置），它会被编译成base64，从而在实际项目中减少http请求
export default function getAllFilesinFolder(filtercondition) {
  let Module1 = require.context("../../assets/images", true);
  //console.log(';Module1:',Module1)
  //arr 表示原数组；
  //prev 表示上一次调用回调时的返回值，或者初始值 init;
  //cur 表示当前正在处理的数组元素；
  //index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
  //init 表示初始值。
  let results = Module1.keys().reduce(function (prev, cur) {
    if (cur.toLowerCase().indexOf(filtercondition.toLowerCase()) !== -1) {
      //一定要加require，才能找到打包后的路径
      prev.push(require("../../assets/images/" + cur.substr(2, cur.length)));
    }
    return prev;
  }, []);
  return results;
}
