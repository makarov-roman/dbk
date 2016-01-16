<?php
require_once 'Utility.php';
class SoftwarePackage {
    use App;
    public function __construct($name, $price = null){
        if(is_array($name)) {
            if(isset($name['name'])  && isset($name['price']))
            {
                $this->name = $name['name'];

                $this->price = $name['price'];
            } else {
                $this::logErr ('/log/newObjectLog.txt', 'input array for new db-object is invalid');
            }

        } else {
            $this->name = $name;
            $this->price = $price;
        }
    }
    public $name;
    public $price;

    
}