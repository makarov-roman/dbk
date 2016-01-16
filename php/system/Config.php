<?php
final class Config {
    //TODO убрать класс, а методы вынести в Database или модели
    private $mongo;
    public function __construct() {
        $this->mongo = new MongoClient();
    }

    public function getDbList() {
        $dbList = [];
        $query = $this->mongo->listDBs();
        foreach($query['databases'] as $item) {
            array_push($dbList, $item['name']);
        }
        $response = [];
        $id = 0;
        foreach($dbList as $value) {
            array_push($response, ['name' => $value, 'id' => $id]);
            $id++;
        }
        return json_encode($response);
    }
    public function getCollectionListJSON($db) {
        $names = $this->mongo->selectDB($db)->getCollectionNames();
        $response = [];
        $id = 0;
        foreach($names as $value) {
            array_push($response, ['name' => $value, 'id' => $id]);
            $id++;
        }
        return json_encode($response);
    }
}