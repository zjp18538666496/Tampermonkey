// ==UserScript==
// @name         设置堡垒机账号和密码
// @namespace    http://tampermonkey.net/
// @version      2024-01-18
// @description  设置堡垒机账号和密码
// @author       You
// @match        *://10.7.47.20/login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=47.20
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let timer = setInterval(function () {
        const elements = {
            username: document.getElementById("username"),
            password: document.getElementById("password")
        }
        if(elements.username && elements.password){
            if(!elements.username.value){
                elements.username.value = 'zhangchi';
            }
            if(!elements.password.value){
                elements.password.value = '!zC15036122696';
            }
            clearInterval(timer);
        }
    }, 1000);
})();
