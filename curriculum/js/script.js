"use strict";

// 函数表达式
// const $ = function(id) {
//     return document.getElementById(id);
// }

/**
 * 获取ID的DOM元素
 * @param {string} id 
 */
function $(id) {
    return document.getElementById(id)
}

/**
 * 创建元素
 * @param {string} node 
 */
function createEle(node) {
    return document.createElement(node)
}

/**
 * 设置节点属性
 * @param {string} node 
 * @param {string} style 
 * @param {string} value 
 */
function setAttr(node, styles) {
    for (const key in styles) {
        if (styles.hasOwnProperty(key)) {
            node.setAttribute(key, styles[key])
        }
    }
}

// 获取div
const divDom = $("table-data-wrap");

const tableDom = createEle("table");
const styles = {
    "width": "100%",
    "border": "0",
    "cellpadding": "0",
    "cellspacing": "0",
    "id": "table-data-wrap"
}


setAttr(tableDom, styles);

tableDom.innerHTML = `<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width="200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                    </thead>`;

divDom.appendChild(tableDom);


