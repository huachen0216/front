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

// 获取div
const divDom = $("table-data-wrap");

const tableDom = document.createElement("table");

// tableDom.setAttribute('width', '100%');
tableDom.width = "100%";
tableDom.setAttribute("border", "0");
tableDom.setAttribute("cellpadding", "0");
tableDom.setAttribute("cellspacing", "0");
tableDom.setAttribute("id", "table-data-wrap"); 

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


