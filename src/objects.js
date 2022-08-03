const listItem = function(title, dueDate, priority, desc="", isDone=false, isExpanded=false){
    return {title, dueDate, priority, desc, isDone, isExpanded};
}
// priority - 1 for low, 2 for medium, 3 for high

const project = function(title, desc="",listItemArr=[]){
    const addListItem = (itemTitle, desc="", dueDate="No due date", isDone=false, priority=1) => {
        this.listItemArr.push(listItem(itemTitle, dueDate, priority, isDone, desc));
    }
    return {title, desc, listItemArr, addListItem};
}

export const projectsArray = [];

export const createProject = (title, desc="") => {
    let testItem1 = listItem("Buy carrots", "22.09.22", 1, "" );
    let testItem2 = listItem("Banaas", "22.09.22", 1, "" );
    let testItem3 = listItem("Yaribu Kalaome'ri", "12.09.22", 2, "" );
    projectsArray.push(project(title,desc, [testItem1, testItem2, testItem3]));
}

// export const createListItem = (project) => {
//     project.addListItem
// }

let testItem = listItem("Buy carrots", "22.09.22", 1, "" );