<?php

class ControllerViewCollections extends Controller {
    public function getCollection() {
        $data = $this->request->getData();
        $this->responseData($this->config->getCollectionListJSON(($_COOKIE['dbName'])));
    }

    public function deleteCollection() {
        $this->db->dropCollection();

    }

    public function setItem() {
        $data = json_decode($this->request->getData());
        $this->db->createColl($data->Name);
    }
}