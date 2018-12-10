// ==UserScript==
// @name         Hide Sidebar
// @namespace    https://github.com/jacebenson/openuserjs-community-servicenow-com/
// @version      0.2.3
// @description  This script hides the sidebar on community.servicenow.com
// @author       Jace
// @match        https://community.servicenow.com/*
// @grant        none
// @updateURL https://openuserjs.org/meta/jacebenson/Hide_Sidebar.meta.js
// @copyright 2018, jacebenson (https://openuserjs.org//users/jacebenson)
// @license MIT
// ==/UserScript==
/* global $ */
(function() {
    'use strict';
    var checkExist = setInterval(function() {
        if ($('sp-page-row').length) {
            console.log("Hiding Sidebar!");
            $($('sp-page-row > .row >.col-md-9')[0]).attr('class','col-md-12');
            $($('sp-page-row > .row >.col-md-3')[0]).attr('class','hide');
            clearInterval(checkExist);
        }
    }, 1000); // check every 1s
})($);
