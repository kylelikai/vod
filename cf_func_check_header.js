function handler(event) {
    // NOTE: This example function is for a viewer request event trigger. 
    // Choose viewer request for event trigger when you associate this function with a distribution. 
    
    var request = event.request;
    
     var response = {
        statusCode: 403,
        headers: {
            'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' }
        }
    };
    
    
    // header validation
    var headers = request.headers;
    console.log(headers);

    // 期望验证的内容
    var c_value = headers['hk_header']['value'];
    console.log(c_value);


    if (c_value != "hikvision") {
        return response;
    };
    console.log('aaa');


    // Set the cache-control header
    headers['cache-control'] = {value: 'public, max-age=63072000;'};
    return request;
}




