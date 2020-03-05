<?php
header("Content-Type: text/plain");
$inputIdentifier = getQueryStringParameter('identifier');
checkIdentifier($inputIdentifier);

function checkIdentifier(string $identifier): void
{
    $incorrectSymbol = False;
    $inputNothing = False;
    $digitFirst = False;
    $digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    $letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if ((in_array($identifier[0], $digits) && (strlen($identifier) !== 0)))
    {
        $digitFirst = True;
    }
    elseif (strlen($identifier) === 0)
    {
        $inputNothing = True;
    }
    else
    {
        for ($i = 0; $i !== strlen($identifier); $i++)
        {
            if ((! in_array($identifier[$i], $digits)) && (! in_array($identifier[$i], $letters)))
            {
                $incorrectSymbol = True;
            }
        }
    }
    if ($digitFirst === True)
    {
        echo 'Digit can not be the first symbol';
    }
    if ($inputNothing === True)
    {
        echo 'The identifier have not been entered';
    }
    if ($incorrectSymbol === True)
    {
        echo 'Incorrect symbol in the identifier';
    }
}

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}