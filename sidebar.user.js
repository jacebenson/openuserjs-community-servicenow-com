// ==UserScript==
// @name         Wide Servicenow Community
// @namespace    https://github.com/jacebenson/openuserjs-community-servicenow-com/
// @version      0.2.5
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
    var removeSideBar = setInterval(function() {
        try{
            if ($('sp-page-row').length) {
                console.log("Hiding Sidebar!");
                //$($('sp-page-row > .row >.col-md-9')[0]).attr('class','col-md-12');
                //$($('sp-page-row > .row >.col-md-3')[0]).attr('class','hide');
                $($('#x1c8e106f535032007a97e192d5dc3432')[0]).attr('class','hide');
                $($('.cm-homepage-main-container > .container')[0]).attr('class', 'container-fluid');
                clearInterval(removeSideBar);
            }
        } catch(e){
            console.log(e);
        }
    }, 3000); // check every 1s
    var loadMore = setInterval(function() {
        try{
            console.log("Loading More Records");
            $('.cm-list-pagination > button').click();
        } catch(e){
            console.log(e);
        }
    }, 1000); // check every 1s
    setTimeout(function () {
        $('#unreplied').click();
    }, 2000);
    setTimeout(function (){
        clearInterval(loadMore);
    },10000);
})($);
