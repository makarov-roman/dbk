<?php

final class Request
{
    private $route;
    private $requestType;
    private $args;
    public function __construct($route, $requestType) {
        $this->route = $this->clean($route);
        $this->requestType = $this->clean($requestType);

    }
    public function getRoute() {
        return $this->route;
    }
    public function getType() {
        return $this->requestType;
    }
    public function getData() {
        switch ($this->requestType){
            case 'GET': {
                $get = $this->clean($_GET);
                unset($get['route']);
                return $get;
            }
            case 'POST': {
                if (!empty($_POST)) return $this->clean($_POST);
                return $this->clean(file_get_contents("php://input"));
            }
            case 'PUT': {
                return $this->clean(file_get_contents("php://input"));
            }
            case 'DELETE': {
                return $this->clean(file_get_contents("php://input"));
            }
            default: {
                return 'request type doesn\'t identified\n';
            }
        }
    }
    public function setArgs($value) {
        $this->args = $value;
    }
    public function getArgs() {
        return $this->args;
    }
    public function getId() {
        return $this->args[0];
    }
    private function clean($data) {
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                unset($data[$key]);

                $data[$this->clean($key)] = $this->clean($value);
            }
        } else {
            $data = htmlspecialchars($data, ENT_NOQUOTES, 'UTF-8');
        }

        return $data;
    }
}