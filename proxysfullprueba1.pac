function FindProxyForURL(url, host) {
    // Configuración de proxies para cada dominio
    var proxies = {
        "adobe.com": "PROXY 23.94.65.176:8800",
         "perplexity.ai": "PROXY 23.94.188.154:8800",
        "artlist.io": "PROXY 66.63.178.169:8800",
        "chatgpt.com": "PROXY 45.170.253.190:50100",
        "freepik.es": "PROXY 66.63.178.163:8800",
        "freepik.com": "PROXY 23.94.65.182:8800",
        "placeit.net": "PROXY 23.94.65.189:8800",
        "canva.com": "PROXY 45.170.253.190:50100",
        "platzi.com": "PROXY 66.63.178.42:8800",
        "domestika.org": "PROXY 66.63.178.250:8800",
        "crehana.com": "PROXY 23.94.188.153:8800",
        "cloud.microsoft": "PROXY 45.170.253.190:50100",
        "creativefabrica.com": "PROXY 23.94.65.184:8800",
        "motionarray.com": "PROXY 46.3.124.181:50100",
        "adobe.com": "PROXY 45.170.253.190:50100",
        "adobe.com": "PROXY 45.170.253.190:50100",
        "adobe.com": "PROXY 45.170.253.190:50100",
        "adobe.com": "PROXY 45.170.253.190:50100",

        "envato.com": "PROXY 66.63.178.42:8800"
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
