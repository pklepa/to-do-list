!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const a=(e,n)=>{let t=[],a=0;return{name:e,description:n,id:void 0,addTask:function(e){e.id=++a,t.push(e)},getAllTasks:function(){return t}}},i=(()=>{let e,n=[],t=0;return{add:function(a){a.id=++t,n.push(a),e=a},setCurrent:function(n){e=n},getCurrent:function(){return e},getAll:function(){return n}}})();function o(){const e=document.querySelector("#mainContainer");e.children.length>0&&(e.textContent="");e.insertAdjacentHTML("beforeend",'\n    <div class="mainContent">\n      \x3c!-- Breadcrumb --\x3e\n      <nav>\n        <div class="nav-wrapper">\n          <div class="col s12">\n            <a href="#!" class="breadcrumb">home</a>\n          </div>\n        </div>\n      </nav>\n\n      \x3c!-- Content --\x3e\n      <blockquote>\n        "You\'ve got shit to do and shit has got to be done." - <em>Someone, Somewhere.</em>\n      </blockquote>\n\n      <h4>welcome!</h4>\n      <p>This app in intended to help you get your shit together and do it.</p>\n      <p>Try adding some projects and split your large shit (known as projects) into smaller, managable, little shitties (or tasks).</p>\n\n      <ul style="max-width: 800px;" class="collection with-header">\n        <li class="collection-header"><h4>your projects</h4></li>\n      </ul>\n\n      <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">\n        <i class="material-icons left">add</i>New project\n      </a>\n    </div>\n  '),function(){const e=document.querySelector(".mainContent ul.collection");i.getAll().forEach(n=>{let t=document.createElement("a");t.classList.add("collection-item"),t.href="#",t.textContent="#"+n.name,t.addEventListener("click",()=>{i.setCurrent(n),r()}),e.appendChild(t)})}()}function r(){const e=i.getCurrent(),n=document.querySelector("#mainContainer");n.children.length>0&&(n.textContent="");const t=document.createElement("div");t.classList.add("mainContent");const a=`\n    \x3c!-- Breadcrumb --\x3e\n    <nav>\n      <div class="nav-wrapper">\n        <div class="col s12">\n          <a href="#!" class="breadcrumb btn-goHome">home</a>\n          <a href="#!" class="secondary-content secondary-content-breadcrumb tooltipped" data-position="left" data-tooltip="Delete this project"><i class="material-icons">delete</i></a>\n          <a href="#!" class="secondary-content secondary-content-breadcrumb tooltipped" data-position="left" data-tooltip="Edit this project"><i class="material-icons">edit</i></a>\n          <a href="#!" class="breadcrumb">#${e.name}</a>\n        </div>\n      </div>\n    </nav>\n\n    \x3c!-- Checkboxes --\x3e\n    <blockquote>\n      ${e.description}\n    </blockquote>\n\n    <ul class="collapsible">\n    </ul>\n\n    <div class="center-align">\n      <a class="waves-effect waves-light btn-large red accent-2 modal-trigger" href="#modal2"><i class="material-icons left">add</i>Add Task</a>\n    </div>    \n  `;t.insertAdjacentHTML("beforeend",a),n.appendChild(t);document.querySelector(".breadcrumb.btn-goHome").addEventListener("click",o),e.getAllTasks().forEach(e=>{c(e)});const r=document.querySelectorAll(".collapsible"),l=document.querySelectorAll(".tooltipped");M.Collapsible.init(r),M.Tooltip.init(l)}function c(e){const n=document.querySelector(".mainContent ul.collapsible");let t,a=e.done?'checked="checked"':"",o=`proj${i.getCurrent().id}-task${e.id}`;switch(e.prio){case"Urgent":t='<span class="new badge red" data-badge-caption="urgent"></span>';break;case"High Priority":t='<span class="new badge orange darken-2" data-badge-caption="high prio"></span>';break;case"Medium Priority":t='<span class="new badge amber" data-badge-caption="medium prio"></span>';break;case"Low Priority":t='<span class="new badge lime darken-2" data-badge-caption="low prio"></span>';break;default:t=""}let r=`\n      <li>\n        <div class="collapsible-header">\n          <label>\n            <input id="main-${o}" type="checkbox" ${a}/>\n            <span>${e.name}</span>\n          </label>\n          ${t}\n        </div>\n        <div class="collapsible-body">\n          <div class="my-body-container">\n            <div class="body-content">\n              <span><i class="material-icons">info</i>${e.description}</span>\n              <span name="due-date"><i class="material-icons">date_range</i> ${e.dueDate}</span>\n            </div>\n\n            <div class="icons">\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">delete</i>\n              </a>\n              <a href="#!" class="secondary-content">\n                <i class="material-icons">edit</i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n    `;n.insertAdjacentHTML("beforeend",r);let c=n.querySelector("#main-"+o);c.addEventListener("change",()=>{e.done=c.checked;let n=document.querySelector("#sidebar-"+o);n&&(n.checked=c.checked)})}function l(){document.querySelector("#sideContainer").innerHTML="",d()}function d(){document.querySelector("#sideContainer").insertAdjacentHTML("beforeend",'\n    <h5 class="title">overview</h5>\n  \n    <div class="sidebar-projects">\n    </div>\n\n    <a id="btn-newProject" class="waves-effect waves-light btn-small red accent-2 modal-trigger" href="#modal1">\n      <i class="material-icons left">add</i>New project\n    </a>\n  '),function(){const e=document.querySelector(".sidebar-projects");i.getAll().forEach(n=>{let t=document.createElement("div");t.classList.add("sidebar-project");let a=document.createElement("ul");a.classList.add("collection","with-header");let o=document.createElement("li");o.classList.add("collection-header");let c=document.createElement("a");c.href="#",c.textContent="#"+n.name,c.addEventListener("click",()=>{i.setCurrent(n),r()}),o.appendChild(c),a.appendChild(o);let l=0;const d=n.getAllTasks();for(let e=0;e<d.length;e++){let t=document.createElement("li");if(t.classList.add("collection-item"),3==l){let e=document.createElement("div");e.classList.add("center-align");let o=document.createElement("a");o.classList.add("view-more"),o.href="#",o.textContent="view more",o.addEventListener("click",()=>{i.setCurrent(n),r()}),e.appendChild(o),t.appendChild(e),a.appendChild(t);break}if(!d[e].done){let i=`proj${n.id}-task${d[e].id}`,o=`\n          <div>\n            <label>\n              <input id="sidebar-${i}" type="checkbox"/>\n              <span>${d[e].name}</span>\n            </label>\n            <a href="#!" class="secondary-content">\n              <i class="material-icons">edit</i>\n            </a>\n          </div>\n        `;t.insertAdjacentHTML("beforeend",o),a.appendChild(t);let r=a.querySelector("#sidebar-"+i);r.addEventListener("change",()=>{d[e].done=r.checked;let n=document.querySelector("#main-"+i);n&&(n.checked=r.checked)}),l++}}t.appendChild(a),e.appendChild(t)})}()}function s(){!function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n      \x3c!-- Modal Structure --\x3e\n      <div id="modal1" class="modal modal-fixed-footer" style="max-height: 300px;">\n        <div class="modal-content">\n          <h4>Create new project</h4>\n          <p>Give your project a name and a brief description.</p>\n          <div class="row">\n            <div class="input-field col s4">\n              <input id="project_name" type="text" class="validate">\n              <label for="project_name">Project name</label>\n            </div>\n\n            <div class="input-field col s8">\n              <input id="project_description" type="text" class="validate">\n              <label for="project_description">Description</label>\n            </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n          <a id="btn-newProjectConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n        </div>\n      </div>  \n  '),document.querySelector("#btn-newProjectConfirm").addEventListener("click",()=>{const e=document.querySelector("input#project_name").value,n=document.querySelector("input#project_description").value;let t=a(e,n);i.add(t),r(),l()})}(),function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n    \x3c!-- Modal Structure --\x3e\n    <div id="modal2" class="modal modal-fixed-footer" style="max-height: 400px;" >\n      <div class="modal-content">\n        <h4>New task</h4>\n        <div class="row">\n          <div class="input-field col s8">\n            <i class="material-icons prefix">check_circle</i>\n            <input id="task_name" type="text" class="validate">\n            <label for="task_name">Task name</label>\n          </div>\n          \n          <div class="input-field col s4">\n            <select id="task_priority">\n              <option value="" disabled selected>Not set</option>\n              <option value="1">Urgent</option>\n              <option value="2">High Priority</option>\n              <option value="3">Medium Priority</option>\n              <option value="4">Low Priority</option>\n            </select>\n            <label>Priority Level</label>\n          </div> \n        </div>\n\n        <div class="row">\n          <div class="input-field col s8">\n            <i class="material-icons prefix">info</i>\n            <input id="task_description" type="text" class="validate">\n            <label for="task_description">Description</label>\n          </div>   \n          \n          <div class="input-field col s4">\n            <i class="material-icons prefix">date_range</i>\n            <input id="task_dueDate" type="text" class="datepicker">\n            <label for="task_dueDate">Due Date</label>\n          </div>\n        </div>\n      </div>\n\n      <div class="modal-footer">\n        <a class="modal-close waves-effect waves-red btn-flat">Cancel</a>\n        <a id="btn-newTaskConfirm" class="modal-close waves-effect waves-green btn-flat">Confirm</a>\n      </div>\n    </div>\n  '),document.querySelector("#btn-newTaskConfirm").addEventListener("click",()=>{const e=document.querySelector("input#task_name").value,n=document.querySelector("input#task_description").value,t=document.querySelector("input#task_dueDate").value,a=document.querySelector("select#task_priority").M_FormSelect.input.value;let o={name:(r={name:e,description:n,dueDate:t,prio:a}).name,description:r.description||"No description provided",dueDate:r.dueDate||"Not set",prio:r.prio||0,done:r.done||!1,id:void 0};var r;i.getCurrent().addTask(o),c(o),l()})}();const e=document.querySelectorAll(".modal"),n=document.querySelectorAll(".datepicker"),t=document.querySelectorAll("select");M.Datepicker.init(n),M.FormSelect.init(t),M.Modal.init(e,{onCloseEnd:()=>{document.querySelectorAll(".modal-content .input-field").forEach(e=>{for(let n=0;n<e.children.length;n++){let t=e.children[n];"INPUT"==t.tagName?(t.value="",t.classList.remove("valid")):"LABEL"==t.tagName&&t.classList.remove("active")}})}})}const u={render:function(){!function(){const e=document.querySelector("#todoApp");e.insertAdjacentHTML("beforeend",'\n    <div id="navbar"></div>\n\n    <div id="pageLayout" class="row">\n      <div id="sideContainer" class="col s4"></div>\n\n      <div id="mainContainer" class="col s8"></div>\n    </div>\n\n  ')}(),document.querySelector("#navbar").insertAdjacentHTML("beforeend",'\n      <nav>\n        <div class="nav-wrapper">\n          <a href="#" class="brand-logo center">sh*t-to-do</a>\n          <ul id="nav-mobile" class="right hide-on-med-and-down">\n            <li>\n              <a href="#">Home</a>\n            </li>\n            <li>\n              <a href="#">About</a>\n            </li>\n            <li>\n              <a href="#">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n  '),d(),o(),s()},update:function(){}};let p=a("example","here's a brief description of what the project is about");p.addTask({name:"urgent task",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",dueDate:"06 / Jul / 20",prio:"Urgent",done:!1}),p.addTask({name:"high priority task",description:"Duis sodales est nec hendrerit ultricies.",dueDate:"25 / Jul / 20",prio:"High Priority"}),p.addTask({name:"medium priority task",description:"Morbi rhoncus erat tellus, ut vehicula erat pretium vel.",dueDate:"04 / Aug / 20",prio:"Medium Priority"}),p.addTask({name:"low priority task",description:"Vivamus eu ante nec massa dictum blandit id ut mauris.",dueDate:"12 / Dec / 20",prio:"Low Priority"}),i.add(p),u.render()}]);