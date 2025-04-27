export interface Proxy {
    domain: string;
    url: string;
}

export let PROXIES: Proxy[] = [
  {
    domain: "easy-reverse-proxy-ecru.vercel.app",
    url: "https://www.google.com"
  }
];
