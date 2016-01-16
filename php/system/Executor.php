<?php

final class Executor
{
    private $common;
    public function __construct($common) {
        $this->common = $common;
    }
    public function execute($action) {
        require_once($action->getFile());

        $class = $action->getClass();

        $controller = new $class($this->common);

        if (is_callable([$controller, $action->getMethod()])) {
            call_user_func_array(array($controller, $action->getMethod()), []);
        } else return false;
        return true;
    }
}