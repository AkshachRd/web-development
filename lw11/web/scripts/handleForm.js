import {popupClose} from "./popupClose.js";

const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleForm();
});


async function handleForm()
{
    const name = getName(form);
    const email = getEmail(form);
    const activity = getActivity(form);
    const user = {
        name: name,
        email: email,
        activity: activity
    };

    const url = '../src/pages/save_feedback_page.php';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user)
    });
    console.log(response.text())

    const result = await response.json();
    console.log(result)
    if (result.status === 200)
    {
        popupClose();
    }
    else
    {
        showFormError();
    }
}

function showFormError()
{
    const form = document.getElementsByClassName('form')[0];
    form.style.display = "";
    document.getElementById('form-error').style.display = "block";
}

function hideFormError()
{
    const form = document.getElementsByClassName('form')[0];
    form.style.display = "flex";
    document.getElementById('form-error').style.display = "";
}

function getName(form)
{
    return form.elements['name'].value;
}

function getEmail(form)
{
    return form.elements['email'].value;
}

function getActivity(form)
{
    return form.elements['activity'].value;
}

export {hideFormError}