class HqHttpClient {
    constructor() {
        this.xmlhttp = (function() {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return xmlhttp;
        })();

        this.headers = {};
        this.params = {};
        this.contentType = 'application/x-www-form-urlencoded';
    };
    //实例方法
    formatQueryParmas(params) {
        var query = '';
        if (params) {
            for (const key in params) {
                if (params.hasOwnProperty.call(params, key)) {
                    const value = params[key];
                    const encode_key = encodeURIComponent(key);
                    const encode_value = encodeURIComponent(value);
                    const k_v = `${encode_key}=${encode_value}&`;
                    query += k_v;
                }
            }
        }
        if (query.length > 1) {
            query = query.substring(0, query.length - 1);
        }
        return query;
    };
    //实例方法
    GET(url, callback) {
        var headers = this.headers;
        var params = this.params;
        var query = this.formatQueryParmas(params);
        var xmlhttp = this.xmlhttp;

        if (query.length > 1) {
            query = '?' + query;
            url += query;
        }
        console.log('url:', url);
        //true 表示异步请求
        xmlhttp.open('GET', url, true);

        if (headers) {
            for (const key in headers) {
                if (headers.hasOwnProperty.call(headers, key)) {
                    const value = headers[key];
                    xmlhttp.setRequestHeader(key, value);
                }
            }
        }
        xmlhttp.send();
        //监听请求回调
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
                var resp = xmlhttp.response;
                callback(xmlhttp.status, resp);
            } else {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    callback(xmlhttp.status, null);
                }
            }
        };
    };
    //实例方法
    POST(url, callback) {
        var headers = this.headers;
        var params = this.params;
        var xmlhttp = this.xmlhttp;

        console.log('url:', url);
        //true 表示异步请求
        xmlhttp.open('POST', url, true);

        if (headers) {
            for (const key in headers) {
                if (headers.hasOwnProperty.call(headers, key)) {
                    const value = headers[key];
                    xmlhttp.setRequestHeader(key, value);
                }
            }
        }
        xmlhttp.setRequestHeader("Content-type", this.contentType);
        var body = this.formatQueryParmas(params);
        if (this.contentType === 'application/json') {
            body = JSON.stringify(params);
        }
        xmlhttp.send(body);
        //监听请求回调
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var resp = xmlhttp.response;
                callback(xmlhttp.status, resp);
            } else {
                if (xmlhttp.readyState == 4) {
                    callback(xmlhttp.status, null);
                }
            }
        };
    };
}