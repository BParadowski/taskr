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
    let testDate = new Date()
    let testItem1 = listItem("Click me to expand", testDate, 3, "Use the checkbox to mark this item as done. You can also delete an item by selecting the trash can icon." );
    let testItem2 = listItem("To add new list item, use plus sign below", testDate, 1, "You will be prompted for title, detailed description, due date and priority. Priority range is 1 to 3 with 1 being lowest and 3 highest." );
    let testItem3 = listItem("Yaribu Kalaome'ri", testDate, 2, "" );
    projectsArray.push(project(title,desc, [testItem1, testItem2, testItem3]));
    updateLocalStorage();
}

export const addListItem = (project, itemTitle, desc, dueDate, priority) => {
    if (dueDate === '') dueDate ='No due date';
    else {
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
    project.listItemArr.sort((a,b) => (b.priority - a.priority));
    updateLocalStorage();
}

export const deleteToDo = function (project, item) {
    let index = project.listItemArr.indexOf(item);
    project.listItemArr.splice(index, 1);
    updateLocalStorage();
}