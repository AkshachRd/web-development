<?php
header("Content-Type: text/plain");
$inputText = getQueryStringParameter('text');
if ($inputText !== null)
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
    $blank = True;
    for ($i = 0; $i !== strlen($text); $i++) {
        if ($text[$i] !== ' ')
        {
            $resultString .= $text[$i];
            $blank = False;
        }
        else
        {
            if ($blank === False)
            {
                $blank = True;
                $resultString .= ' ';
            }
        }
    }
    return $resultString;
}