function FindProxyForURL(url, host) {
    // Configuración de proxies para cada dominio
    var proxies = {
        "adobe.com": "PROXY 45.170.253.190:50100",
        "perplexity.ai": "PROXY 176.126.111.194:8080",
        "artlist.io": "PROXY 66.63.178.169:8800",
        "chatgpt.com": "PROXY 45.170.253.190:50100",
        "domestika.org": "PROXY 193.233.211.46:8080",
        "freepik.es": "PROXY 91.132.124.122:8080",
        "freepik.com": "PROXY 45.159.23.249:8080",
        "placeit.net": "PROXY 66.78.32.82:5132", // Cambiado a otro proxy
        "canva.com": "PROXY 45.170.253.190:50100",
        "platzi.com": "PROXY 66.63.178.42:8800",
        "crehana.com": "PROXY 46.3.124.181:50100", // Cambiado a otro proxy
        "cloud.microsoft": "PROXY 45.170.253.190:50100",
        "creativefabrica.com": "PROXY 148.135.147.24:6534",
        "motionarray.com": "PROXY 46.3.124.181:50100",
        "envato.com": "PROXY 193.233.210.11:8080"
    };

    // Verifica si el host coincide con un dominio en la lista
    for (var dominio in proxies) {
        if (
            dnsDomainIs(host, dominio) || 
            dnsDomainIs(host, "." + dominio) // Incluye subdominios
        ) {
            return proxies[dominio];
        }
    }

    // Conexión directa para otros sitios
    return "DIRECT";
}
