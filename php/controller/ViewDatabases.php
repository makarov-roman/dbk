<?php

class ControllerViewDatabases extends Controller {
    public function getCollection() {
        $this->responseData($this->config->getDbList());
    }
    public function deleteDb() {
        $this->db->dropDb();
    }
    public function setItem() {
        $data = json_decode($this->request->getData());
        var_dump($this->db->createDb($data->Name));
    }
}