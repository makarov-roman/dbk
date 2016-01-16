<?php
final class Action {
    protected $file;
    protected $class;
    protected $method;
    protected $args;
    protected $requestType;
    protected $actionType;

    public function __construct($route, $requestType ,$args = []) {
        $this->requestType = $requestType;
        if($route != '') {
            $path = '';

            $parts = explode('/', str_replace('../', '', (string)$route));

            foreach ($parts as $part) {
                $path .= $part;
                if (is_dir('php/controller/' . $path)) {
                    $path .= '/';

                    array_shift($parts);
                    continue;
                }

                if (is_file('php/controller/' . str_replace(array('../', '..\\', '..'), '', $path) . '.php')) {
                    $this->file = 'php/controller/' . str_replace(array('../', '..\\', '..'), '', $path) . '.php';

                    $this->class = 'Controller' . preg_replace('/[^a-zA-Z0-9]/', '', $path);
                    array_shift($parts);

                    continue;
                }

                if (!empty($parts)) $method = array_shift($parts);
                while(!empty($parts)) {
                    array_push($args, array_shift($parts));
                }
           }
            isset($method) ? $this->method = $method : $this->method = 'index';
            isset($args) ? $this->args = $args : $this->args = NULL ;

        }
        isset($this->class) ? : $this->class  = 'ControllerApp';
        isset($this->file) ? : $this->file = 'php/controller/App.php';
        isset($this->method) ? : $this->method = 'index';

        switch($requestType) {
            case 'GET': {
                $this->actionType = 'get';
                break;
            }
            case 'PUT': {
                $this->actionType = 'update';
                break;
            }
            case 'DELETE': {
                $this->actionType = 'delete';
                break;
            }
            case 'POST': {
                $this->actionType = 'set';
            }
        }


    }
    public function getFile() {
        return $this->file;
    }

    public function getClass() {
        return $this->class;
    }
    public function getMethod() {
        return ($this->method != 'index') ? strtolower($this->actionType).ucfirst($this->method) : $this->method;
    }
    public function getArgs() {
        return $this->args;
    }

}