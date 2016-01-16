<?php

/**
 * Created by PhpStorm.
 * User: Роман
 * Date: 12/7/2015
 * Time: 10:56 PM
 */
abstract class Model {
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
}