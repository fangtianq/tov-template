interface AnyObject {
	[propName: string]: any;
}
function getFirstWord(msg:string) {
  console.log(msg.split(' ')[0])
}
function append (path:string, pathToAppend:string) {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
/**
 * 绝对路径Url解析
 * @param {String} url 要解析的url，Url必须带协议http或者https
 * @returns
 */
 const parseURL = (url:string) => {
  let a = document.createElement('a')
  a.href = url
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.host,
    hostname: a.hostname,
    port: a.port,
    protocolHostAndPort: `${a.protocol.replace(':', '')}://${a.host}${(!a.port||a.port=='80')?'':a.port}`,
    query: a.search,
    params: (()=> {
      let ret:AnyObject = {
			}
      let seg = a.search.replace(/^\?/, '').split('&')
      let len = seg.length
      let i = 0
      let s:any[]
      for (i < len; i++;) {
        if (!seg[i]) {
          continue
        }
        s = seg[i].split('=')
        ret[s[0]] = s[1]
      }
      return ret
    })(),
    file: (a.pathname.match(/\/([^/?#]+)$/i) || '')[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^/]+(.+)/) || '')[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  }
}

export default {number:100,getFirstWord,append,parseURL}
