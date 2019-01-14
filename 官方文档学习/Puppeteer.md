# Puppeteer

## class: Puppeteer 

Puppeteer 模块提供一个方法去加载Chromium实例，下面是一个典型的例子用Puppeteer去自动运行：

```js
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
});
```

### Methods

#### puppeteer.connect(options)

* options <Object>

    * browserWSEndpoint <string> ,要连接的浏览器断点。

    * ignoreHTTPSErrors <boolean>, 是否忽略 https的错误，默认是false。

    * slowMo <number> ,降低Puppeteer的操作速度通过指定一个毫秒数。
* returns： <Promise<Browser>>

这个方法连接Puppeteer到一个已经存在的Chromium实例。

#### puppeteer.createBrowserFetcher([options])

* options <Object>
  * host <string>, 被用于下载的主机，默认的是https://storage.googleapis.com。
  * path <string>, 下载文件夹的路径，默认是<root>/.local-chromium，root指的是puppeteer包所在的路径。
  * platform <string>, 可选的值有，mac、win32、win64、linux。

* returns：<BrowserFetcher>


#### puppeteer.defaultArgs()

* returns <Array<string>> Chromium默认的参数会被使用。

####  puppeteer.executablePath()

* returns: <string> , 一个Chrome的安装路径（/path/to/Chrome）
* TODU(https://pptr.dev/)