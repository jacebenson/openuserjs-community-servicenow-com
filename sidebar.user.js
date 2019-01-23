// ==UserScript==
// @name         Wide Servicenow Community
// @namespace    https://github.com/jacebenson/openuserjs-community-servicenow-com/
// @version      0.2.4
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
            $($('#x1c8e106f535032007a97e192d5dc3432')[0]).attr('class','hide');
            $($('.cm-homepage-main-container > .container')[0]).attr('class', 'container-fluid');
            clearInterval(checkExist);
        }
    }, 1000); // check every 1s
    $('#unreplied').click();
})($);
