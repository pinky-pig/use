// ==UserScript==
// @name         保存复制的内容
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  保存复制的内容
// @author       Arvin
// @match        *://*/*
// @grant        none
// ==/UserScript==

/**
 * 使用说明：
 * 1. 同时按下 `Alt` + `S` 键，先选择一个文件
 * 2. 后续再鼠标选中文字后，按下 `Alt` + `S` 键，会将拷贝的文字保存到选择的文件中
 * 3. 时间 -- 网站 -- 内容
 */
(function () {
  'use strict'

  let fileHandle = null
  let selectedText = ''

  document.addEventListener('keydown', async (event) => {
    if (event.altKey && (event.key === 's' || event.keyCode === 83)) {

      const selection = window.getSelection()
      if (selection && selection.toString().length > 0){
        selectedText = selection.toString()
      }
      
      if (fileHandle) {
        writeFile(fileHandle, selectedText)
      }
      else {
        fileHandle = await getFileHandle()
        writeFile(fileHandle, selectedText)
      }
    }
  })

  async function getFileHandle() {
    if ('showOpenFilePicker' in window) {
      const [fileHandle] = await window.showOpenFilePicker()
      return fileHandle
    }
  }

  async function writeFile(fileHandle, contents) {
    const writable = await fileHandle.createWritable({ keepExistingData: true })

    const file = await fileHandle.getFile()
    await writable.seek(file.size)
    await writable.write(`\n ${formatTime(Date.now())} -- ${location.href}  --  ${contents}`)
    await writable.close()
  }

  function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
})()
