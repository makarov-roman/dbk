<?php

class ControllerViewData extends Controller {
    public function getCollection() {
        $this->setModel('ViewData');
        $this->responseData($this->model->getCollection());
    }
    public function deleteCollection() {
        $this->setModel('ViewData');
        $id = $this->request->getId();

        if ($this->model->deleteCollection($id)['ok']) {
            $this->responseData(json_encode(['status' => 'success']));
        }
    }
    public function updateCollection() {
        $this->setModel('ViewData');
        $id = $this->request->getId();
        if ($this->model->deleteCollection($id)['ok']) {
            $this->responseData(json_encode(['status' => 'success']));
        }
    }
    public function setItem() {
        $this->setModel('ViewData');
        echo $this->model->createNewItem(json_decode($this->request->getData()));
    }
}