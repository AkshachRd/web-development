import {popupCloseAnimation, popupOpenAnimation} from "./popupAnimation.js";

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape")
    {
        popupOff();
    }
});
document.getElementById('popup__close-button').addEventListener('click', popupOff);
document.getElementById('overlay').addEventListener('click', popupOff);
const buttons = document.getElementsByClassName('sign-up-button');
for (const button of buttons)
{
    button.addEventListener('click', popupOn);
}


function popupOn()
{
    const popup = document.getElementById('popup');
    popup.style.display = "block";
    popup.scrollIntoView({block: "center", behavior: "smooth"});

    const overlay = document.getElementById('overlay');
    overlay.style.display = "block";

    requestAnimationFrame(popupOpenAnimation);
    let id = requestAnimationFrame(popupOpenAnimation);
    cancelAnimationFrame(id);
}

function popupOff()
{
    requestAnimationFrame(popupCloseAnimation);
    let id = requestAnimationFrame(popupCloseAnimation);
    cancelAnimationFrame(id);
}