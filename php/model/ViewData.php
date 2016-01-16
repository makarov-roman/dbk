<?php

final class ModelViewData extends Model {

    public function getCollection() {
        return json_encode($this->db->searchData());
    }

    public function deleteCollection($id) {
        $this->db->removeData(['_id' => new MongoId($id)]);
    }
    public function updateCollection($id, $data = []) {
        $id = $this->request->getId();
        if (isset($data['id'])) unset($data['id']);
        $this->db->updateData(['_id' => new MongoId($id)], $data);
    }
    public function createNewItem($data) {
        return $this->db->insertData($data);
    }
}