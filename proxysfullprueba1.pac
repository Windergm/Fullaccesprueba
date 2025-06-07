function FindProxyForURL(url, host) {
        // Proxies agrupados por dirección
        var proxy1 = "PROXY 176.126.111.194:8080";
        var proxy2 = "PROXY 46.3.124.181:50100";
        var proxy3 = "PROXY 102.129.178.6:4414";
        var proxy4 = "PROXY 91.132.124.97:8080";
        var proxy5 = "PROXY 193.233.211.46:8080"; // no cambiar
        var proxy6 = "PROXY 161.123.54.112:5496"; // proxy propio
        var proxy7 = "PROXY 93.177.95.214:8080";
        var proxy8 = "PROXY 45.136.27.41:8080";
        var proxy9 = "PROXY 193.233.210.11:8080"; // cambiado
        var proxy10 = "PROXY 45.147.234.41:8080";
        var proxy11 = "PROXY 148.135.147.24:6534"; // proxy propio
        var proxy12 = "PROXY 102.129.208.49:22326"; // no cambiar
        var proxy13 = "PROXY 45.170.253.190:50100";

        // Reglas agrupadas por proxy
        if (dnsDomainIs(host, "adobe.com")) return proxy3;
        if (dnsDomainIs(host, "perplexity.ai") || dnsDomainIs(host, "artlist.io")) return proxy1;
        if (dnsDomainIs(host, "chatgpt.com")) return proxy4;
        if (dnsDomainIs(host, "domestika.org")) return proxy5;
        if (dnsDomainIs(host, "freepik.com") || dnsDomainIs(host, "freepik.es")) return proxy2;
        if (dnsDomainIs(host, "placeit.net")) return proxy6;
        if (dnsDomainIs(host, "canva.com")) return proxy7;
        if (dnsDomainIs(host, "platzi.com")) return proxy8;
        if (dnsDomainIs(host, "crehana.com")) return proxy9;
        if (dnsDomainIs(host, "cloud.microsoft")) return proxy10;
        if (dnsDomainIs(host, "creativefabrica.com")) return proxy11;
        if (dnsDomainIs(host, "motionarray.com")) return proxy12;
        if (dnsDomainIs(host, "envato.com")) return proxy13;

        // Todo lo demás va directo
        return "DIRECT";
    }
    
