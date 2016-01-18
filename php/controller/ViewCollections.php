<?php

class ControllerViewCollections extends Controller {
    public function getCollection() {
        $data = $this->request->getData();
        $this->responseData($this->config->getCollectionListJSON(($_COOKIE['dbName'])));
    }

    public function deleteCollection() {
        if ($this->db->dropCollection()['ok']) {
            $this->responseData(json_encode(['status' => 'success']));
        }
    }

    public function setItem() {
        $data = json_decode($this->request->getData());
        if($this->db->createColl($data->Name)->w) {
            $this->responseData(json_encode(['status' => 'success']));
        };
    }
}