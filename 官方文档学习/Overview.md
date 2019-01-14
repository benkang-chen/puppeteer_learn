# Overview

Puppeteer是一个node库，它提供一个高水平的API，通过 DevTools 协议去控制Chromium 或 Chrome 。

Puppeteer API是分层的，而且与浏览器的结构对应。

在下面的图中，灰色的部分还没有实现。

![](https://github.com/benkang-chen/puppeteer_learn/blob/master/pictures/p1.png)

- Puppeteer 通过 DevTools 协议与browser通信。
- Browser实例可以有多个browser contexts。
- BrowserContexts实例定义了一个浏览器会话，能够有多个pages.
- Page至少有一个frame：main frame,其他的frames也可能通过iframe或者frame标签创建。
- Frame有至少一个执行上下文（ execution context），默认执行上下文，这个frame里的JavaScript代码在这个上下文中被执行。
- Work有一个执行上下文，能够与WebWorkers互动。

