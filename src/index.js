import "./style.scss";
import { renderProjectsList} from "./DOMrenders";
import { createProject } from "./objects";
import addIcon from './add-icon.svg'


const contentDiv = document.querySelector('.content');
const newProjectBtn = document.querySelector('.projects__add-button');
newProjectBtn.style.backgroundImage = `url(${addIcon})`;

const projectModal = (function(){
    const modal = document.querySelector('.project-dialog');
    const projectName = document.getElementById('project__title');
    const projectDesc = document.getElementById('project__desc');
    const button = document.querySelector('.project__add-new-button');

    const openModal = () => {
        modal.showModal();
    }

    const submitProject = () => {
        if (projectName.value){
            createProject(projectName.value, projectDesc.value);
            renderProjectsList();
            projectName.value = "";
            projectDesc.value = "";

            modal.close();
        }
    }

    button.addEventListener('click', submitProject);

    return {openModal};
})();

newProjectBtn.addEventListener('click', projectModal.openModal)

if (!localStorage.getItem('localData')){
createProject("Example project", "A medium-length description which can be used to outline some key facts about the project. You can put some reminders or motivating quotes here if you wish. Or don't do that at all and use only the list items - it is an optional field afterall.");
renderProjectsList();
}
else{
    renderProjectsList();
}

