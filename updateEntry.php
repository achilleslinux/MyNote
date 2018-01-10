<?php

//update the entry

require 'db.php';

$db = new Db();
$response = $db->update_by_id($_POST['id'], $_POST['description']);