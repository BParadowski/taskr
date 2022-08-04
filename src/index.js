import "./style.scss";
import { renderProjectsList} from "./DOMrenders";
import { createProject } from "./objects";

const contentDiv = document.querySelector('.content');
const newProjectBtn = document.querySelector('.projects__add-button');

// newProjectBtn.addEventListener('click', () => {

// })

createProject("Example project", "A medium-length description which can be used to outline some key facts about the project. You can put some reminders or motivating quotes here if you wish. Or don't do that at all and use only the list items - it is an optional field afterall.");

createProject("Beluga", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

createProject("Lalulila", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

renderProjectsList();

