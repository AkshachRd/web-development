<?php
define("ERROR_NAME_MESSAGE", "Имя не введено");
define("ERROR_EMAIL_MESSAGE", "Email не введен");
define("ERROR_AGREEMENT_MESSAGE", "Вы не приняли соглашение");

function validateForm(): void
{
    $name = getPostParameter('name');
    $email = getPostParameter('email');
    $activity = getPostParameter('activity');
    $agreement = getPostParameter('agreement');
    $dataForm = [
        'name' => $name,
        'email' => $email,
        'activity' => $activity,
        'success' => true,
    ];
    if ($agreement !== 'on')
    {
        $dataForm['success'] = false;
        $dataForm['error'] = ERROR_AGREEMENT_MESSAGE;
        $error = ERROR_AGREEMENT_MESSAGE;
        echo "<script>alert('$error');</script>";
    }
    else if ($name === '')
    {
        $dataForm['success'] = false;
        $dataForm['error'] = ERROR_NAME_MESSAGE;
        $error = ERROR_NAME_MESSAGE;
        echo "<script>alert('$error');</script>";
    }
    else if ($email === '')
    {
        $dataForm['success'] = false;
        $dataForm['error'] = ERROR_EMAIL_MESSAGE;
        $error = ERROR_EMAIL_MESSAGE;
        echo "<script>alert('$error');</script>";
    }
    else
    {
        saveData($dataForm);
    }
    mainPage();
}

function saveData(array $args): void
{
    $fileData = array_diff_key($args, ['success' => true]);
    $fileData = json_encode($fileData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    $fileData = str_replace(['{', '"', '}'], '', $fileData);
    file_put_contents(__DIR__ . '/../../web/messages/' . strtolower($args['email']) . '.txt', $fileData);
}