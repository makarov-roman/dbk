<?php

class ControllerViewDatabases extends Controller {
    public function getCollection() {
        $this->responseData($this->config->getDbList());
    }
    public function deleteCollection() {
        if($this->db->dropDb()['ok']) {
            $this->responseData(json_encode(['status' => 'success']));
        };
    }
    public function setItem() {
        $data = json_decode($this->request->getData());
        $this->db->createDb($data->Name);
        $this->responseData(json_encode(['status' => 'success']));
    }
}