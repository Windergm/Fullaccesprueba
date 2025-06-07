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
    if (shExpMatch(url, "*.zip") || shExpMatch(url, "*.rar") || shExpMatch(url, "*.7z") ||
        shExpMatch(url, "*.tar") || shExpMatch(url, "*.gz") || shExpMatch(url, "*.iso") ||
        shExpMatch(url, "*.exe") || shExpMatch(url, "*.msi") || shExpMatch(url, "*.mp4") ||
        shExpMatch(url, "*.mkv") || shExpMatch(url, "*.avi") || shExpMatch(url, "*.mov") ||
        shExpMatch(url, "*.mp3") || shExpMatch(url, "*.flac") || shExpMatch(url, "*.wav") ||
        shExpMatch(url, "*.pdf")) {
        return "DIRECT";
    }

    // Reglas de proxy específicas por dominio
    if (shExpMatch(host, "*adobe.com")) return "PROXY 102.129.178.6:4414";
    if (shExpMatch(host, "*perplexity.ai") || shExpMatch(host, "*artlist.io")) return "PROXY 176.126.111.194:8080";
    if (shExpMatch(host, "*chatgpt.com")) return "PROXY 91.132.124.97:8080";
    if (shExpMatch(host, "*domestika.org")) return "PROXY 193.233.211.46:8080";
    if (shExpMatch(host, "*freepik.com") || shExpMatch(host, "*freepik.es")) return "PROXY 46.3.124.181:50100";
    if (shExpMatch(host, "*placeit.net")) return "PROXY 161.123.54.112:5496";
    if (shExpMatch(host, "*canva.com")) return "PROXY 93.177.95.214:8080";
    if (shExpMatch(host, "*platzi.com")) return "PROXY 45.136.27.41:8080";
    if (shExpMatch(host, "*crehana.com")) return "PROXY 193.233.210.11:8080";
    if (shExpMatch(host, "*cloud.microsoft")) return "PROXY 45.147.234.41:8080";
    if (shExpMatch(host, "*creativefabrica.com")) return "PROXY 148.135.147.24:6534";
    if (shExpMatch(host, "*motionarray.com")) return "PROXY 45.159.23.249:8080";
    if (shExpMatch(host, "*envato.com")) return "PROXY 45.170.253.190:50100";

    // Todo lo demás va directo
    return "DIRECT";
}
