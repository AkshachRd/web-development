<?php
header("Content-Type: text/plain");
$inputPassword = getQueryStringParameter('password');
echo passwordStrength($inputPassword);
function passwordStrength(string $password): ?int
{
    $digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    $lettersUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    $lettersLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    $strength = 0;
    $n = strlen($password);

    $strength += $n * 4;
    $passwordArrayBySymbols = array_count_values(str_split($password));

    $digitsInPassword = 0;
    for ($i = 0; $i !== count($digits); $i++)
    {
        $digitsInPassword += $passwordArrayBySymbols[$digits[$i]];
    }
    $strength += $digitsInPassword * 4;

    $lowRegisterLettersInPassword = 0;
    for ($i = 0; $i !== count($lettersLow); $i++)
    {
        $lowRegisterLettersInPassword += $passwordArrayBySymbols[$lettersLow[$i]];
    }
    $strength += ($n - $lowRegisterLettersInPassword) * 2;

    $upRegisterLettersInPassword = 0;
    for ($i = 0; $i !== count($lettersUp); $i++)
    {
        $upRegisterLettersInPassword += $passwordArrayBySymbols[$lettersUp[$i]];
    }
    $strength += ($n - $upRegisterLettersInPassword) * 2;

    if ($digitsInPassword === 0)
    {
        $strength -= $n;
    }

    if (($lowRegisterLettersInPassword === 0) && ($upRegisterLettersInPassword === 0))
    {
        $strength -= $n;
    }

    for ($i = 0; $i !== count($digits); $i++)
    {
        if ($passwordArrayBySymbols[$digits[$i]] > 1)
        {
            $strength -= $passwordArrayBySymbols[$digits[$i]];
        }
    }

    for ($i = 0; $i !== count($lettersLow); $i++)
    {
        if ($passwordArrayBySymbols[$lettersLow[$i]] > 1)
        {
            $strength -= $passwordArrayBySymbols[$lettersLow[$i]];
        }
    }

    for ($i = 0; $i !== count($lettersUp); $i++)
    {
        if ($passwordArrayBySymbols[$lettersUp[$i]] > 1)
        {
            $strength -= $passwordArrayBySymbols[$lettersUp[$i]];
        }
    }

    return $strength;
}
function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}