import cat from './cat.jpg';

let emptyPage;
export default emptyPage = (function(){
    const emptyPageDiv = document.createElement('div');
    emptyPageDiv.classList.add('emptyPage');

    const welcomeText = document.createElement('p');
    welcomeText.classList.add('emptyPage__welcome');
    welcomeText.textContent = "Looks like you have no existing projects. To create one - use the Projects menu on the left.";

    const catPicture = document.createElement('img');
    catPicture.src = cat; 

    emptyPageDiv.replaceChildren(welcomeText, catPicture)

    return emptyPageDiv;
})();