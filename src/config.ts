import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
  {
        domain: "www.yikoc.com",
        url: "https://www.github.com/",
        enable: true
  }
];
