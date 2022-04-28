<?php

function validateForm(): void
{
    $name = preg_match("/^[а-я А-Я a-z A-Z]+$/u", getPostParameter('name')) ? getPostParameter('name') : '';
    $email = filter_var(strtolower(getPostParameter('email')), FILTER_VALIDATE_EMAIL) ? strtolower(getPostParameter('email')) : '';
    $activity = getPostParameter('activity');
    $agreement = getPostParameter('agreement');
    $error = 'Некорректное данное';
    $dataForm = [
        'name' => $name,
        'email' => $email,
        'activity' => $activity,
        'success' => true,
        'name_error_msg' => $name !== '' ? '' : $error,
        'email_error_msg' => $email !== '' ? '' : $error,
        'message_error_msg' => $message !== '' ? '' : $error,
    ];
    if ($name === '' || $email === '' || $agreement !== 'on')
    {
        $dataForm['success'] = false;

    }
    else
    {
        saveData($dataForm);
    }
    mainPage();
}

function saveData(array $args): void
{
    $fileData = array_diff_key($args, ['success' => true, 'name_error_msg' => '', 'email_error_msg' => '', 'message_error_msg' => '']);
    $fileData = json_encode($fileData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    $fileData = str_replace(['{', '"', '}'], '', $fileData);
    file_put_contents(__DIR__ . '/../../web/messages/' . $args['email'] . '.txt', $fileData);
}