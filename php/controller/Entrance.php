<?php
// index - вывести форму
// set - установить куки и сделать редирект
class ControllerEntrance extends Controller {
    public function index() {
        $this->setTemplate(['entrance.tpl']);
        $this->render();
        }
    public function setCookie() {
        SetCookie('dbName', 'db_2');
        //SetCookie('collName', '2');
        $this->response->redirect('http://' . $_SERVER['HTTP_HOST'] . '/app');


    }
    public function getDb() {
        $this->responseData(json_encode($this->config->getDbList()));
    }
    public function getCollections(){
        $data = $this->request->getData();
        $this->responseData(json_encode($this->config->getCollectionList(($data['dbName']))));
    }
}