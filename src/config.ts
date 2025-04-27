import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
  {
    domain: "easy-reverse-proxy-ecru.vercel.app"; // 域名
    url: "https://www.bing.com"; // 网址
    enable: boolean; // 开启
    template?: Template; // 模板
  }
];
