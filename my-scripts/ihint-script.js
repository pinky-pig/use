// ==UserScript==
// @name         双拼练习网站按住空格切换显示键位图
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  双拼练习网站 <https://api.ihint.me/shuang/> 按住空格切换显示键位图
// @author       Arvin
// @match        https://api.ihint.me/shuang/
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  const checkbox = document.querySelector('#pic-switcher')
  if (checkbox) {

    // 隐藏键位图
    checkbox.checked = false

    let isSpacePressed = false

    document.addEventListener('keydown', (event) => {
      if (event.key === ' ' && !isSpacePressed) {
        // 防止事件重复触发
        isSpacePressed = true
        // 显示键位图
        checkbox?.click()
      }
    })

    document.addEventListener('keyup', (event) => {
      if (event.key === ' ') {
        // 重置标志以便下次触发
        isSpacePressed = false
        // 隐藏键位图
        checkbox?.click()
      }
    })
  }
})()

