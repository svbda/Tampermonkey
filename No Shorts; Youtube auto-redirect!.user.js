// ==UserScript==
// @name         No Shorts; YouTube auto-redirect!
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Redirects from /shorts to /watch
// @author       svbda
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';
    var redirect = true;
    $(document).bind('DOMSubtreeModified', function () {
        if (window.location.pathname.indexOf("/shorts/") >= 0 && redirect) {
            redirect = false;
            window.location.replace('https://www.youtube.com/watch?v=' + window.location.pathname.slice(8));
            return false;
        }
    });
})();