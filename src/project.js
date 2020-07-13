import { renderHome } from "./home";
import { ProjectController } from "./projectController";


function renderProject() {
  const project = ProjectController.getCurrent();

  const main = document.querySelector('#mainContainer');
  if(main.children.length > 0){ main.textContent = ""; }

  const content = document.createElement('div');
  content.classList.add('mainContent');

  const contentHTML = `
    <!-- Breadcrumb -->
    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#!" class="breadcrumb btn-goHome">home</a>
          <a href="#!" class="secondary-content secondary-content-breadcrumb tooltipped" data-position="left" data-tooltip="Delete this project"><i class="material-icons">delete</i></a>
          <a href="#!" class="secondary-content secondary-content-breadcrumb tooltipped" data-position="left" data-tooltip="Edit this project"><i class="material-icons">edit</i></a>
          <a href="#!" class="breadcrumb">#${ project.name }</a>
        </div>
      </div>
    </nav>

    <!-- Checkboxes -->
    <blockquote>
      ${ project.description }
    </blockquote>

    <ul class="collapsible">
    </ul>

    <div class="center-align">
      <a class="waves-effect waves-light btn-large red accent-2 modal-trigger" href="#modal2"><i class="material-icons left">add</i>Add Task</a>
    </div>    
  `;

  // Inserts the content template in the document
  content.insertAdjacentHTML("beforeend", contentHTML);
  main.appendChild(content);


  // Adds evenListeners to the newly added anchor tags
  const homeBtn = document.querySelector('.breadcrumb.btn-goHome');
  homeBtn.addEventListener('click', renderHome);


  // Renders all existent tasks in the current project
  project.getAllTasks().forEach( task => {
    renderTask(task);
  });


  // - Materialize-CSS Components Loaders
  const collapsibles = document.querySelectorAll('.collapsible');
  const tooltipped = document.querySelectorAll('.tooltipped');
  M.Collapsible.init(collapsibles);
  M.Tooltip.init(tooltipped);  
}

function renderTask(task){
    const taskList = document.querySelector('.mainContent ul.collapsible');

    let isTaskDone = task.done ? 'checked="checked"' : '';
    let taskElemId = `proj${ ProjectController.getCurrent().id }-task${ task.id }`;

    // If task priority is not set, don't add a badge. If it is, decide what color and what text.
    let badge;
    switch (task.prio) {
      case 'Urgent':
        badge = `<span class="new badge red" data-badge-caption="urgent"></span>`;
        break;
      case 'High Priority':
        badge = `<span class="new badge orange darken-2" data-badge-caption="high prio"></span>`;
        break;
      case 'Medium Priority':
        badge = `<span class="new badge amber" data-badge-caption="medium prio"></span>`;
        break;
      case 'Low Priority':
        badge = `<span class="new badge lime darken-2" data-badge-caption="low prio"></span>`;
        break;
        
      default:
        badge = ``;  
    }

    let taskHTML = `
      <li>
        <div class="collapsible-header">
          <label>
            <input id="main-${ taskElemId }" type="checkbox" ${ isTaskDone }/>
            <span>${ task.name }</span>
          </label>
          ${ badge }
        </div>
        <div class="collapsible-body">
          <div class="my-body-container">
            <div class="body-content">
              <span><i class="material-icons">info</i>${ task.description }</span>
              <span name="due-date"><i class="material-icons">date_range</i> ${ task.dueDate }</span>
            </div>

            <div class="icons">
              <a href="#!" class="secondary-content">
                <i class="material-icons">delete</i>
              </a>
              <a id="edit-${ taskElemId }" class="secondary-content modal-trigger" href="#modal-editTask">
                <i class="material-icons">edit</i>
              </a>
            </div>
          </div>
        </div>
      </li>
    `;


    taskList.insertAdjacentHTML("beforeend", taskHTML);


    // Event listener on edit button to fill out the modal with current information
    let editBtn = taskList.querySelector(`#edit-${ taskElemId }`);
    editBtn.addEventListener('click', () => {
      document.querySelector('input#edit_task_name').value = task.name;
      document.querySelector('input#edit_task_description').value = task.description;
      document.querySelector('input#edit_task_dueDate').value = task.dueDate;
      document.querySelector('select#edit_task_priority').M_FormSelect.input.value = task.prio;

      document.querySelector('p#edit_task_id').textContent = task.id;

      M.updateTextFields();
    });

    
    // Synchronize this task checkbox on sidebar and on mainContainer
    let checkbox = taskList.querySelector(`#main-${ taskElemId }`);
    checkbox.addEventListener('change', ()=>{
      task.done = checkbox.checked;
      ProjectController.getCurrent().editTask(task); // This step is necessary as the task reference in this function is passed as an argument, not the actual element in the ProjectController

      let taskOnSidebar = document.querySelector(`#sidebar-${ taskElemId }`);
      if(taskOnSidebar){ taskOnSidebar.checked = checkbox.checked };
    });
}


export { renderProject, renderTask }