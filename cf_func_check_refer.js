function handler(event) {
    // NOTE: This example function is for a viewer request event trigger. 
    // Choose viewer request for event trigger when you associate this function with a distribution. 
    
    var request = event.request;
    
     var response403 = {
        statusCode: 403,
        statusDescription: 'Not Authorised',
        headers: {
            'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' }
        }
    };
    
    
    // refer validation
    var referer = request.headers.referer;
    
    if (referer == undefined || referer == null) {
        response403['test'] = 'no refer';
        return response403;
    }


    response403['test'] = referer;
    if (referer.value != "期望的域名") {
        return response403;
    }
    
   
    // Set the cache-control header
    headers['cache-control'] = {value: 'public, max-age=63072000;'};

    
    return request；
    

}




