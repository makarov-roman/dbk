<?php
ini_set("display_errors", "On"); error_reporting(E_ALL);

require_once 'php/system/Common.php';
require_once 'php/system/DataBase.php';
require_once 'php/system/Request.php';
require_once 'php/system/Action.php';
require_once 'php/system/Controller.php';
require_once 'php/system/Model.php';
require_once 'php/system/Executor.php';
require_once 'php/system/Config.php';
require_once 'php/system/Response.php';

define ('DIR_HOME' , __DIR__);
$common = new Common;

$config = new Config($common);
$common->set('config', $config);
if (isset($_COOKIE['dbName'])) {
    $db = new DataBase($_COOKIE['dbName'], isset($_COOKIE['collName']) ? $_COOKIE['collName'] : 0);
    $common->set('db', $db);
}

$request = new Request($_GET['route'], $_SERVER['REQUEST_METHOD']);
$common->set('request', $request);

$response = new Response;
$common->set('response', $response);

$action = new Action($request->getRoute(), $request->getType());
$request->setArgs($action->getArgs());
$executor = new Executor($common);
$executor->execute($action);
//var_dump($action->getClass(), $action->getMethod());
$response->output();



