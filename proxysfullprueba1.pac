function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Archivos grandes o multimedia
    if (shExpMatch(url, "*.zip") || shExpMatch(url, "*.rar") || shExpMatch(url, "*.7z") ||
        shExpMatch(url, "*.tar") || shExpMatch(url, "*.gz") || shExpMatch(url, "*.iso") ||
        shExpMatch(url, "*.exe") || shExpMatch(url, "*.msi") || shExpMatch(url, "*.mp4") ||
        shExpMatch(url, "*.mkv") || shExpMatch(url, "*.avi") || shExpMatch(url, "*.mov") ||
        shExpMatch(url, "*.mp3") || shExpMatch(url, "*.flac") || shExpMatch(url, "*.wav") ||
        shExpMatch(url, "*.pdf")) {
        return "DIRECT";
    }

    // Reglas por dominio
    if (dnsDomainIs(host, "adobe.com") || shExpMatch(host, "*.adobe.com")) return "PROXY 102.129.178.6:4414";
    if (dnsDomainIs(host, "perplexity.ai") || shExpMatch(host, "*.perplexity.ai") ||
        dnsDomainIs(host, "artlist.io") || shExpMatch(host, "*.artlist.io")) return "PROXY 96.62.127.25:50100";
    if (dnsDomainIs(host, "chatgpt.com") || shExpMatch(host, "*.chatgpt.com")) return "PROXY 91.132.124.97:8080";
    // ... (continúa con el resto igual)

    return "DIRECT";
}
