const listItem = function(title, dueDate, priority, desc="", isDone=false, isExpanded=false){
    return {title, dueDate, priority, desc, isDone, isExpanded};
}
// priority - 1 for low, 2 for medium, 3 for high

const project = function(title, desc="",listItemArr=[]){
    return {title, desc, listItemArr};
}

export const projectsArray = [];

export const createProject = (title, desc="") => {
    let testItem1 = listItem("Buy carrots", "22.09.22", 1, "Eat your vegetables, they're good for you." );
    let testItem2 = listItem("Banaas", "22.09.22", 1, "" );
    let testItem3 = listItem("Yaribu Kalaome'ri", "12.09.22", 2, "" );
    projectsArray.push(project(title,desc, [testItem1, testItem2, testItem3]));
}

export const addListItem = (project, itemTitle, desc, dueDate, priority) => {
    if (dueDate === '') dueDate ='No due date';
    project.listItemArr.push(listItem(itemTitle, dueDate, priority, desc));
    console.table(project.listItemArr);
}
