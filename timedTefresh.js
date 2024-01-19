// ==UserScript==
// @name         定时刷新tapd
// @namespace    www.tapd.cn
// @version      0.1
// @description  定时刷新tapd
// @author       ZhangJianPeng
// @match        *://www.tapd.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tapd.cn
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const elements = {
        top_nav_worktable_msg: document.getElementById("msg_count")
    }
    setTimeout(function () {
        location.reload();
    }, 1000 * 60 * 5);
    const msg = elements.top_nav_worktable_msg.innerHTML;
    if (msg > 0) {
        window.alert("有新消息！");
    }
})();
