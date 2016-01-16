<?php

class ControllerConfig extends Controller {
    public function index() {
        if (isset($_COOKIE['dbName'], $_COOKIE['collName'])) {
            $this->data = [];
            $this->data['dbName'] = $_COOKIE['dbName'];
            $this->data['collName'] = $_COOKIE['collName'];
            $this->data['length'] = $this->db->documentCount();
            $this->responseData(json_encode($this->data));
        }
    }
}