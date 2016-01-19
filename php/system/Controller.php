<?php
abstract class Controller {
    protected $data;
    protected $template = [];
    protected $common;

    public function __construct($common) {
        $this->common = $common;
    }
    public function __get($name) {
        return $this->common->get($name);
    }
    public function __set($name, $value) {
        $this->common->set($name, $value);
    }

    public function setTemplate($templateName = []) {
        foreach ($templateName as $name) {
            array_push($this->template, "/php/view/" . $name);
        }

    }

    protected function setModel ($model) {
        $file  = DIR_HOME . '/php/model/' . $model . '.php';
        $class = 'Model' . preg_replace('/[^a-zA-Z0-9]/', '', $model);
        if (file_exists($file)) {
            require_once($file);
            $this->common->set('model', new $class($this->common));
        } else {
            trigger_error('Error: Could not load model ' . $file . '!');
            exit();
        }

    }

    protected function render() {
        ob_start();
        foreach ($this->template as $template) {
            if (file_exists(DIR_HOME . $template)) {
                require(DIR_HOME . $template);
            } else {
                trigger_error('Error: Could not load template ' . DIR_HOME . $template . '!');
                exit();
            }
        }
        $this->response->setOutput(ob_get_contents());
        ob_end_clean();
    }
    protected function responseData($data) {
        $this->response->setOutput($data);
    }
}