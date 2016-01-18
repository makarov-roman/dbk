<?php

final class ModelViewData extends Model {

    public function getCollection() {
        return json_encode($this->db->searchData());
    }

    public function deleteCollection($id) {
        return $this->db->removeData(['_id' => new MongoId($id)]);
    }
    public function updateCollection($data) {
        $id = $this->request->getId();
        $data = (array)$data;
        if (isset($data['id'])) unset($data['id']);

        return $this->db->updateData(['_id' => new MongoId($id)], $data);
    }
    public function createNewItem($data) {
        return $this->db->insertData($data);
    }
}