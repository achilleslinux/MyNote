<?php


class Db { 
      
    public $mysql; 
      
    function __construct() { 
        $this->mysql = new mysqli('localhost', 'root', '', 'db') or die('problem'); 
    } 
} // end of class