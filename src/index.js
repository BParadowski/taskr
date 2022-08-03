import "./style.scss";
import emptyPage from "./emptywindow";
import { renderProjectsList, renderToDoList } from "./DOMrenders";
import { createProject } from "./objects";

const contentDiv = document.querySelector('.content');
const newProjectBtn = document.querySelector('.projects__add-button');


contentDiv.replaceChildren(emptyPage);

// newProjectBtn.addEventListener('click', () => {

// })

createProject("Rengar", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

createProject("Beluga", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

createProject("Lalulila", "A charming humanoid-cat-person with a relatively hunty-ish personality. He looks like he could use some human kindness and I don't know what to write lorem20 doesn't seem to be working within a string body :(.");

renderProjectsList();

