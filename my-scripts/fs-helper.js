/**
 * 浏览器文件系统常用方法
 * https://github.com/GoogleChromeLabs/text-editor/blob/main/src/inline-scripts/fs-helpers.js
 */

/**
 * 1. 获取原有文件 handle
 * @returns {!Promise<FileSystemFileHandle>} Handle to the existing file
 */
function getFileHandle() {
  // For Chrome 86 and later...
  if ('showOpenFilePicker' in window) {
    return window.showOpenFilePicker().then((handles) => handles[0]);
  }
}

/**
 * 2. 获取新文件的 handle
 * @return {!Promise<FileSystemFileHandle>} Handle to the new file.
 */
function getNewFileHandle() {
  // For Chrome 86 and later...
  if ('showSaveFilePicker' in window) {
    const opts = {
      types: [{
        description: 'Text file',
        accept: {'text/plain': ['.txt']},
      }],
    };
    return window.showSaveFilePicker(opts);
  }
}

/**
 * 3. 读取文件内容
 * @param {File} file
 * @return {!Promise<string>} A promise that resolves to the parsed string.
 */
function readFile(file) {
  // If the new .text() reader is available, use it.
  if (file.text) {
    return file.text();
  }
  // Otherwise use the traditional file reading technique.
  return _readFileLegacy(file);
}

/**
 * Reads the raw text from a file.
 *
 * @private
 * @param {File} file
 * @return {Promise<string>} A promise that resolves to the parsed string.
 */
function _readFileLegacy(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      const text = e.srcElement.result;
      resolve(text);
    });
    reader.readAsText(file);
  });
}

/**
 * 4. 写入内容到文件，全覆盖
 * @param {FileSystemFileHandle} fileHandle File handle to write to.
 * @param {string} contents Contents to write.
 */
async function writeFile(fileHandle, contents) {
  const writable = await fileHandle.createWritable();
  await writable.write(contents);
  await writable.close();
}

/**
 * 5. 写入内容到文件，添加到末尾
 * @param {FileSystemFileHandle} fileHandle File handle to write to.
 * @param {string} contents Contents to write.
 */
async function writeFile(fileHandle, contents, size = 0) {
  const writable = await fileHandle.createWritable({ keepExistingData: true });
  const file = await fileHandle.getFile()
  await writable.seek(file.size)
  await writable.write(contents);
  await writable.close();
}

/**
 * 6. 验证是否有权限读取写入文件
 *
 * @param {FileSystemFileHandle} fileHandle File handle to check.
 * @param {boolean} withWrite True if write permission should be checked.
 * @return {boolean} True if the user has granted read/write permission.
 */
async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.writable = true;
    // For Chrome 86 and later...
    opts.mode = 'readwrite';
  }
  // Check if we already have permission, if so, return true.
  if (await fileHandle.queryPermission(opts) === 'granted') {
    return true;
  }
  // Request permission to the file, if the user grants permission, return true.
  if (await fileHandle.requestPermission(opts) === 'granted') {
    return true;
  }
  // The user did nt grant permission, return false.
  return false;
}
