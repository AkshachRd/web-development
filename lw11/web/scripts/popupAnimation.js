import {popupClose} from "./popupClose.js";

let scale = 0.5;
let opacity = 0;

export function popupOpenAnimation()
{
    const popup = document.getElementById('popup');
    scale += 0.05;
    opacity += 0.1;
    popup.style.transform = `translateX(-50%) scale(${scale})`;
    popup.style.opacity = opacity;
    if (scale < 1 && opacity < 1)
    {
        requestAnimationFrame(popupOpenAnimation);
    }
}
export function popupCloseAnimation()
{
    const popup = document.getElementById('popup');
    popup.style.transform = `translateX(-50%) scale(${scale})`;
    popup.style.opacity = opacity;
    scale -= 0.05;
    opacity -= 0.1;
    if (scale > 0.5 && opacity > 0)
    {
        requestAnimationFrame(popupCloseAnimation);
    }
    else
    {
        popupClose();
    }
}