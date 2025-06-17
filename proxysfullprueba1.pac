function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    const largeFiles = ["zip", "rar", "7z", "tar", "gz", "iso", "exe", "msi", "mp4", "mkv", "avi", "mov", "mp3", "flac", "wav"];
    
    // Conexión directa para archivos grandes
    for (const ext of largeFiles) {
        if (shExpMatch(url, `*.${ext}`) || shExpMatch(url, `*.${ext.toUpperCase()}`)) {
            return "DIRECT";
        }
    }

    // Reglas de proxy específicas por dominio (ordenadas alfabéticamente)
    const proxyRules = {
        "adobe.com": "102.129.178.6:4414",
        "artlist.io": "96.62.127.25:50100",
        "canva.com": "93.177.95.214:8080",
        "chatgpt.com": "91.132.124.97:8080",
        "creativefabrica.com": "148.135.147.24:6534",
        "crehana.com": "193.233.210.11:8080",
        "domestika.org": "193.233.211.46:8080",
        "envato.com": "45.170.253.190:50100",
        "freepik.com": "46.3.124.181:50100",
        "freepik.es": "46.3.124.181:50100",  // Agrupado mismo proxy
        "microsoft.com": "45.147.234.41:8080",  // Dominio corregido
        "motionarray.com": "14.102.232.254:50100",
        "perplexity.ai": "96.62.127.25:50100",  // Agrupado con artlist.io
        "placeit.net": "161.123.54.112:5496",
        "platzi.com": "45.136.27.41:8080"
    };

    for (const domain in proxyRules) {
        if (dnsDomainIs(host, domain)) {
            return `PROXY ${proxyRules[domain]}`;
        }
    }

    return "DIRECT";
}
