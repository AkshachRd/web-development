const buttonForm = document.querySelector('.feedback__button');

buttonForm.addEventListener('click', () =>
{
    if (document.querySelector('.users__data'))
    {
        return;
    }

    const result = getUsers();
    document.querySelector('.survey-request').appendChild(result)
    // result.forEach(userdata =>
    // {
    //     const newUser = document.createElement('div');
    //     const newUserText = document.createElement('p');
    //     newUserText.innerHTML = userdata.replaceAll('\n', '<br>');
    //     const newUserIcon = document.createElement('img');
    //     newUserIcon.src = 'img/user.png';
    //     newUser.appendChild(newUserIcon);
    //     newUser.appendChild(newUserText);

    //     newUser.classList.add('users__data');
    //     document.querySelector('.survey-request').appendChild(newUser);
    // });

    if (!document.querySelector('.users__data'))
    {
        const newUserText = document.createElement('p');
        newUserText.innerHTML = 'Сохраненных пользователей нет';
        document.querySelector('.survey-request').appendChild(newUserText);
    }
});

async function getUsers(){
    const response = await fetch('../src/findFiles.php');
    return await response.json();
}