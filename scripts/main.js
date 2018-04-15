'use strict';
require(['config'], function (config) {
    require.config(config);
    if (window.jQuery) {
        define('jquery', [], function () {
            return window.jQuery;
        });
    }
    require(['jquery', 'Base',  'modules/inputBox'], function($, base, inputBox){
        $(document).ready(function(){
            var input = new inputBox(document.getElementById('test'),{

            });
        });
    });
});