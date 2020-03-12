<?php
header("Content-Type: text/plain");
$inputText = getQueryStringParameter('text');
if ($inputText === '')
{
    echo 'Введена пустая строка';
}
elseif ($inputText !== null)
{
    echo removeExtraBlanks($inputText);
}
else
{
    echo 'Некорректный ввод данных';
}

function getQueryStringParameter(string $name): ?string
{
   return isset($_GET[$name]) ? $_GET[$name] : null;
}

function removeExtraBlanks(string $text): ?string
{
    $resultString = '';
    $blank = true;
    for ($i = 0; $i !== strlen($text); $i++) 
    {
        if ($text[$i] !== ' ')
        {
            $resultString .= $text[$i];
            $blank = false;
        }
        else
        {
            if ($blank === false)
            {
                $blank = true;
                $resultString .= ' ';
            }
        }
    }
    return $resultString;
}