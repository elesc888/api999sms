9export let PORT = 370; // 端口

export interface Proxy {
    domain: string;
    url: string;
    enable: boolean;
    replaces?: {
        old: string,
        new: string
    }[];
}

// 代理
export let PROXYS = [ 
    {
        domain: "s9-yile.vercel.appz",
        url: "https://api999sms.com/api/",
        enable: true
    }
];
