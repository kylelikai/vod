function handler(event) {
    // NOTE: This example function is for a viewer request event trigger. 
    // Choose viewer request for event trigger when you associate this function with a distribution. 
    
    var request = event.request;
    
     var response403 = {
        statusCode: 403,
        headers: {
            'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' }
        }
    };
    
    
    // refer validation
    var referer = request.headers.referer;
    
    if (referer == undefined || referer == null) {
        return response403;
    }
    if (referer.value != "期望的域名") {
        return response403;
    }
    
    // header validation
    var headers = response.headers;
    // 期望验证的内容
    c_value = headers['自定义key']
    if (c_value == undefined || c_value == null) {
        return response403;
    }
    if (c_value != "期望的值") {
        return response403;
    }
    

    // Set the cache-control header
    headers['cache-control'] = {value: 'public, max-age=63072000;'};

    
    
    
    return request；
    

}




