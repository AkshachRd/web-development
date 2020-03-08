<?php
header("Content-Type: text/plain");
$inputIdentifier = getQueryStringParameter('identifier');
checkIdentifier($inputIdentifier);

function checkIdentifier(string $identifier): void
{
    $incorrectSymbol = false;
    $inputNothing = false;
    $digitFirst = false;
    $digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    $letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if ((in_array($identifier[0], $digits) && (strlen($identifier) !== 0)))
    {
        $digitFirst = true;
    }
    elseif (strlen($identifier) === 0)
    {
        $inputNothing = true;
    }
    else
    {
        for ($i = 0; $i !== strlen($identifier); $i++)
        {
            if ((! in_array($identifier[$i], $digits)) && (! in_array($identifier[$i], $letters)))
            {
                $incorrectSymbol = true;
            }
        }
    }
    
    if ($digitFirst === true)
    {
        echo 'Digit can not be the first symbol';
    }
    if ($inputNothing === true)
    {
        echo 'The identifier have not been entered';
    }
    if ($incorrectSymbol === true)
    {
        echo 'Incorrect symbol in the identifier';
    }
}

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}