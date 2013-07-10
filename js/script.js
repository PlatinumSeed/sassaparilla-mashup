require.config({
    // your configuration key/values here
    baseUrl: "js", // generally the same directory as the script used in a data-main attribute for the top level script
    paths: {
        "jquery": "vendor/jquery.min"
    }, // set up custom paths to libraries, or paths to RequireJS plugins
    shim: {
    } // used for setting up all Shims
});

define(['jquery'], function($){
    $(document).ready(function(){

    });
});