function getFirstWord(msg:string) {
  console.log(msg.split(' ')[0])
}
function append (path:string, pathToAppend:string) {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
export default {number:100,getFirstWord,append}
