<?php

final class DataBase {
    private $mongo;
    private $db;
    public $collection;
    //TODO сделать возможность создания класса без необходимости ввода $dbName/$collName
    public function __construct($dbName, $collectionName) {
        $this->mongo = new MongoClient();
        $this->db = $this->mongo->selectDB($dbName);
        $this->collection = $this->db->selectCollection($collectionName);
    }

    public function selectCollection($collectionName) {
        $this->collection = $this->db->selectCollection($collectionName);
    }

    public function dropCollection() {
        return $this->collection->drop();
    }


    //TODO возвращаемое значение зависит только от аргументов, а не отражает результат выполнения функции
    public function insertData($document) {
        if(is_array($document) || is_object($document)) {
            $this->collection->insert($document);
            return true;
        } else {
            return false;
        }
    }

    public function searchData($query = []) {
      //  ['price' => '1788'] != ['price' => 1788]
        $cursor = $this->collection->find($query);
        $data = [];
        for($i=0 ; $cursor->hasNext(); $i++){
            $data[$i] = $cursor->getNext();
            $data[$i]['id'] = $data[$i]['_id']->{'$id'};
            unset($data[$i]['_id']);
        }
        return $data;
    }

    public function updateData($criteria, $newValues) {
        // argument example ['_id' = => '' ,'name' => 'someName', 'price' => 43786]
        $this->collection->update($criteria, $newValues);
    }

    public function removeData($query) {
        $this->collection->remove($query);
    }

    public function copyCollection($from, $to) {
        $source = $this->db->selectCollection($from)->find();
        $this->db->selectCollection($to)->insert($source);
    }
    public function documentCount($criteria = []) {
        return $this->collection->count($criteria);
    }
    public function createColl($name) {
        $this->db->createCollection($name);
    }
    public function dropDb() {
        $this->db->drop();
    }
    public function createDb($name) {
        return $this->mongo->selectDB($name)->createCollection('init');
    }
}