<?php

include __DIR__ . '/../src/common.inc.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

if (getRequestMethod() === 'POST')
{
  validateForm();
}