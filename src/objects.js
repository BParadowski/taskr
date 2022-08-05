import { compareAsc} from 'date-fns'

const listItem = function(title, dueDate, priority, desc="", isDone=false, isExpanded=false){
    return {title, dueDate, priority, desc, isDone, isExpanded};
}
// priority - 1 for low, 2 for medium, 3 for high

const project = function(title, desc="",listItemArr=[]){
    return {title, desc, listItemArr};
}

export const projectsArray = [];

export const createProject = (title, desc="") => {
    let testDate = new Date()
    let testItem1 = listItem("Buy carrots", testDate, 3, "Eat your vegetables, they're good for you." );
    let testItem2 = listItem("Banaas", testDate, 1, "" );
    let testItem3 = listItem("Yaribu Kalaome'ri", testDate, 2, "" );
    projectsArray.push(project(title,desc, [testItem1, testItem2, testItem3]));
}

export const addListItem = (project, itemTitle, desc, dueDate, priority) => {
    if (dueDate === '') dueDate ='No due date';
    else {
        dueDate = new Date(...dueDate.split('-'));
    }
    project.listItemArr.push(listItem(itemTitle, dueDate, priority, desc));
    console.table(project.listItemArr);
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
}

export const sortByPriorityDescending = function (project) {
    project.listItemArr.sort((a,b) => (b.priority - a.priority));
}