<?php

//deleting the existing value 

require 'db.php';

$db = new Db();
$response = $db->delete_by_id($_GET['id']);
header("Location: index.php");

