import { projectsArray } from "./objects";

const projectsList = document.querySelector('.projects__list');

export const renderProjectsList = () => {
    const projectsNodes = [];

    projectsArray.forEach((project, index, arr) => {
        const displayToDoList = function (e){
            renderToDoList(this);
        }.bind(arr[index]);
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projects__item');
        projectDiv.textContent = project.title;
        projectDiv.addEventListener('click', displayToDoList);
        projectsNodes.push(projectDiv);
    });


    projectsList.replaceChildren(...projectsNodes);
}

const contentDiv = document.querySelector('.content');

export const renderToDoList = (project) => {

    const projectPage = document.createElement('div');
    projectPage.classList.add('project-page');
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectTitle.classList.add('project-page__title')
    const projectDesc = document.createElement('p');
    projectDesc.textContent = project.desc;
    projectDesc.classList.add('project-page__desc');
    const projectList = document.createElement('div');
    projectList.classList.add('project-page__list');

    project.listItemArr.forEach((item, index, arr) => {
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
        }.bind(arr[index]);

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
        }

        projectList.appendChild(listItem);
    })

    projectPage.replaceChildren(projectTitle, projectDesc, projectList);
    contentDiv.replaceChildren(projectPage);
}