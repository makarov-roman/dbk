<?php

class ControllerViewData extends Controller {
    public function getCollection() {
        $this->setModel('ViewData');
        $this->responseData($this->model->getCollection());
    }
    public function deleteCollection() {
        $this->setModel('ViewData');
        $id = $this->request->getId();
        $this->model->deleteCollection($id);
    }
    public function updateCollection() {
        $this->setModel('ViewData');
        $id = $this->request->getId();
        $this->model->updateCollection($id, json_decode($this->request->getData()));
        echo true;
    }
    public function setItem() {
        $this->setModel('ViewData');
        echo $this->model->createNewItem(json_decode($this->request->getData()));
    }
}