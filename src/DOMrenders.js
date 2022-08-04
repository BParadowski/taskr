import { projectsArray, addListItem } from "./objects";
import cat from './cat.jpg';

let currentProject; // variable holding the project the page of which is open atm
const contentDiv = document.querySelector('.content');
const projectsList = document.querySelector('.projects__list');
const openModalBtn = document.createElement('button');
openModalBtn.classList.add('newToDoBtn');

const renderEmptyPage = () => {
    const emptyPageDiv = document.createElement('div');
    emptyPageDiv.classList.add('emptyPage');

    const welcomeText = document.createElement('p');
    welcomeText.classList.add('emptyPage__welcome');
    welcomeText.textContent = "It looks like you have no existing projects. To create one - use the Projects menu 🠔 ";

    const catPicture = document.createElement('img');
    catPicture.src = cat; 

    emptyPageDiv.replaceChildren(welcomeText, catPicture)

    contentDiv.replaceChildren(emptyPageDiv);

    //hide button to add new list items
    openModalBtn.classList.add('hidden');
}

const expandItem = function(item) {
    this.classList.toggle('expanded');
    item.isExpanded = item.isExpanded ? false : true;
}

const renderItem = (item, index=0) => {
    const projectList = document.querySelector('.project-page__list');

    const listItem = document.createElement('div');
    listItem.classList.add('project-page__list-item');
// upper row items, visible before expansion
    const itemTitle = document.createElement('h4');
    itemTitle.classList.add('item__title');
    itemTitle.textContent = item.title;
    const itemDate = document.createElement('p');
    itemDate.classList.add('item__date');
    itemDate.textContent = item.dueDate;
    const itemIsDone = document.createElement('input');
    itemIsDone.type = 'checkbox';
    itemIsDone.checked = item.isDone;

    const toggleDoneStatus = function(e) {
        this.isDone = this.isDone ? false : true;
        console.log(this);
    }.bind(item);

    itemIsDone.addEventListener('click', toggleDoneStatus);

    const toggleDoneClass = function(e){
        this.classList.toggle('done');
    }.bind(listItem)

    itemIsDone.addEventListener('click', toggleDoneClass);

    listItem.replaceChildren(itemTitle, itemDate, itemIsDone);
    listItem.style.setProperty('--order', index + 1); // for animation
    if (item.isDone){
        listItem.classList.add('done');
    }
    switch (item.priority){
        case 1: 
            listItem.classList.add('low-priority');
            break;
        case 2:
            listItem.classList.add('medium-priority');
            break;
        case 3:
            listItem.classList.add('high-priority');
            break;
        default:
            listItem.classList.add('medium-priority');
    }
// stuff visible after expanding
    const itemDetails = document.createElement('p');
    itemDetails.textContent = item.desc;
    itemDetails.classList.add('item__details');

//expansion eventListener
    listItem.addEventListener('click', expandItem.bind(listItem, item));
    projectList.appendChild(listItem);
    console.log(currentProject);
}

export const renderProjectsList = () => {
    console.log(projectsArray);
    if (projectsArray.length === 0){
        renderEmptyPage();
        return;
    }
    const projectsNodes = [];

    projectsArray.forEach((project, index, arr) => {
// if project is not deleted i.e undefined
        if (project){
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projects__item');
        projectDiv.textContent = project.title;
// bind event listener to each project button (display projectPage and change current project to "this")
        const displayToDoList = function (e){
            if (currentProject !== this){
            currentProject = this;
            renderToDoList();}
        }.bind(arr[index]);
        projectDiv.addEventListener('click', displayToDoList);

// if current project is undefined (first one created or deleted) open first not-undefined project on the list;
        if (!currentProject){
            displayToDoList.call(arr[index])
        }

        projectsNodes.push(projectDiv);
    }
    });
    if (projectsNodes.length === 0){
        renderEmptyPage();
    }
    projectsList.replaceChildren(...projectsNodes);

}

export const renderToDoList = () => {
    
    // create page "skeleton"
    const projectPage = document.createElement('div');
    projectPage.classList.add('project-page');
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = currentProject.title;
    projectTitle.classList.add('project-page__title')
    const projectDesc = document.createElement('p');
    projectDesc.textContent = currentProject.desc;
    projectDesc.classList.add('project-page__desc');
    const projectList = document.createElement('div');
    projectList.classList.add('project-page__list');

    projectPage.replaceChildren(projectTitle, projectDesc, projectList, openModalBtn);
    contentDiv.replaceChildren(projectPage);
    
    //append items to it
    currentProject.listItemArr.forEach((item, index) => renderItem(item, index));

    //reveal button to add new list items
    openModalBtn.classList.remove('hidden');
}

// modal module

const toDoModal = (function(){
    const modal = document.querySelector('.newToDoDialog');
    const addBtn = document.querySelector('.toDo__add-btn');
    const title = document.getElementById('toDo__title');
    const desc = document.getElementById('toDo__desc');
    const date = document.getElementById('toDo__date');
    const priority = document.getElementById('toDo__priority');

    const createListItem = () => {
        if (title.value){
        addListItem(currentProject, title.value, desc.value, date.value, parseInt(priority.value));
        title.value = "";
        desc.value = "";
        date.value = "";
        priority.value = 1;
        renderItem(currentProject.listItemArr[currentProject.listItemArr.length-1]);
        }
    }

    addBtn.addEventListener('click', createListItem);

    const openModal = () => {
        modal.showModal();
    }
    return {openModal};
})();

openModalBtn.addEventListener('click', toDoModal.openModal);