import { compareAsc,  parseJSON} from 'date-fns'

let localStorageData = localStorage.getItem('localData');
const dateTimeReviver = function (key, value) {
    let a;
    if (typeof value === 'string') {
        a = /^\d{4}-\d\d-\d\d\w\d\d:\d\d:\d\d.*/.exec(value);
        if (a) {
            return parseJSON(a[0]);
        }
    }
    return value;
}

function createArray (){
    if (localStorageData){
         return JSON.parse(localStorageData, dateTimeReviver);
    }
    else{
        return []
    }
}

export let projectsArray = createArray();

// above: local storage parsing and creating array of projects.

export const updateLocalStorage = () => {
    let projectsData = JSON.stringify(projectsArray);
    localStorage.setItem('localData', projectsData);
}

const listItem = function(title, dueDate, priority, desc="", isDone=false, isExpanded=false){
    return {title, dueDate, priority, desc, isDone, isExpanded};
}
// priority - 1 for low, 2 for medium, 3 for high

const project = function(title, desc="",listItemArr=[]){
    return {title, desc, listItemArr};
}



export const createProject = (title, desc="") => {
    projectsArray.push(project(title,desc, []));

    // creating example project
    if (projectsArray.length === 1 && projectsArray[0].title === 'Example project'  && projectsArray[0].listItemArr.length === 0){
        let exDate = new Date();
        addListItem(projectsArray[0], 'Click me to expand', 'Use the checkbox to mark this item as done. You can also delete an item by selecting the trash can icon.', exDate, 3);
        addListItem(projectsArray[0], 'To add new list item, use the plus sign below', 'You will be prompted for title, detailed description, due date and priority. Priority range is 1 to 3 with 1 being lowest and 3 highest.', exDate, 1);
        addListItem(projectsArray[0], 'You can sort by priority or date using the menu on the right', 'You can also use it to remove currently selected project.', exDate, 2);
        addListItem(projectsArray[0], 'Taskr saves your data in the browser', 'You can rest asssured - your projects are not going anywhere when you close the tab.', exDate, 3);
    }
    updateLocalStorage();
}

export const addListItem = (project, itemTitle, desc, dueDate, priority) => {
    if (dueDate === '') dueDate ='No due date';
    else if (typeof dueDate === 'string'){
        dueDate = new Date(...dueDate.split('-'));
    }
    project.listItemArr.push(listItem(itemTitle, dueDate, priority, desc));
    console.table(project.listItemArr)
    updateLocalStorage();
}

export const sortByDate = function (project) {
    project.listItemArr.sort((a,b) => {
        if (typeof a.dueDate === 'object' && typeof b.dueDate === 'object'){
            return compareAsc(a.dueDate, b.dueDate);
        }
        else if(typeof a.dueDate === 'object' && typeof b.dueDate === 'string'){
            return -1;
        }
        else if(typeof a.dueDate === 'string' && typeof b.dueDate === 'object'){
            return 1;
        }
        else{
            return 0;
        }
    });
    updateLocalStorage();
}

export const sortByPriorityDescending = function (project) {
    project.listItemArr.sort((a,b) => {
        if(a.isDone === false && b.isDone ===false){
            return (b.priority - a.priority)
        }
        else if(a.isDone === true && b.isDone === false){
            return 1;
        }
        else if(a.isDone === false && b.isDone === true){
            return -1;
        }
        else{
            return 0;
        }
    });
    updateLocalStorage();
}

export const deleteToDo = function (project, item) {
    let index = project.listItemArr.indexOf(item);
    project.listItemArr.splice(index, 1);
    updateLocalStorage();
}

export const deleteProject = function(project){
    let index = projectsArray.indexOf(project);
    projectsArray.splice(index, 1);
    updateLocalStorage();
}