(function () {
  "use strict";

  if (!window.jidi) {
    window.jidi = {};
  }

  /**
   * 获取ID的DOM元素
   * @param {string} id
   */
  function $(id) {
    if (typeof id != "string") {
      throw new Error("参数ID必须是一个字符串");
    }
    const dom = document.getElementById(id);
    if (!dom) {
      throw new Error("dom对象未找到");
    }
    return dom;
  }

  window.jidi.$ = $;

  /**
   * 创建元素
   * @param {string} node
   */
  function createEle(node) {
    return document.createElement(node);
  }

  window.jidi.createEle = createEle;

  /**
   * 设置节点属性
   * @param {string} node
   * @param {string} style
   * @param {string} value
   */
  function setAttr(node, styles) {
    for (let key in styles) {
      if (styles.hasOwnProperty(key)) {
        node.setAttribute(key, styles[key]);
      }
    }
  }

  window.jidi.setAttr = setAttr;

  /**
   * 获取节点属性
   */
  function getAttr(node, attr) {
    return node.getAttribute(attr);
  }

  window.jidi.getAttr = getAttr;

  // 函数表达式
  // const $ = function(id) {
  //     return document.getElementById(id);
  // }
})();
