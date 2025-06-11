function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Conexión directa para hosts locales o IPs privadas
    if (isPlainHostName(host) ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "127.*")) {
        return "DIRECT";
    }

    // Conexión directa para archivos grandes o descargas
    const extensionesDirectas = [
        "*.zip", "*.rar", "*.7z", "*.tar", "*.gz", "*.iso",
        "*.exe", "*.msi", "*.mp4", "*.mkv", "*.avi", "*.mov",
        "*.mp3", "*.flac", "*.wav", "*.pdf"
    ];

    for (let ext of extensionesDirectas) {
        if (shExpMatch(url, ext)) return "DIRECT";
    }

    // Mapa de dominios a proxies
    const proxyMap = {
        "adobe.com": "PROXY 102.129.178.6:4414",
        "perplexity.ai": "PROXY 96.62.127.25:50100",
        "artlist.io": "PROXY 96.62.127.25:50100",
        "chatgpt.com": "PROXY 91.132.124.97:8080",
        "domestika.org": "PROXY 193.233.211.46:8080",
        "freepik.com": "PROXY 46.3.124.181:50100",
        "freepik.es": "PROXY 46.3.124.181:50100",
        "placeit.net": "PROXY 161.123.54.112:5496",
        "canva.com": "PROXY 93.177.95.214:8080",
        "platzi.com": "PROXY 45.136.27.41:8080",
        "crehana.com": "PROXY 193.233.210.11:8080",
        "cloud.microsoft": "PROXY 45.147.234.41:8080",
        "creativefabrica.com": "PROXY 148.135.147.24:6534",
        "motionarray.com": "PROXY 14.102.232.254:50100",
        "envato.com": "PROXY 45.170.253.190:50100"
    };

    for (let domain in proxyMap) {
        if (dnsDomainIs(host, domain)) {
            return proxyMap[domain];
        }
    }

    // Todo lo demás va directo
    return "DIRECT";
}

