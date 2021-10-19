module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
};

/* 
! CORS => Cross-Origin Resource Sharing
! ---Uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin

? access-control-allow-origin => tells the browser to allow code from any origin

? access-control-allow-methods => specifies the methods allowed when accessing the resource in response to a "pre-flight" request

? access-control-allow-headers => used in response to a "pre-flight" request that indicated which HTTP headers can be used during an actual request

* "Pre-flight" Request => checks to see if the CORS protocol is understood.
* --- Example: a client might be asking a server if it would allow a DELETE request before actually sending that DELETE request
*/