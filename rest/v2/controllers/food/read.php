<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$food = new Food($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("food", $_GET)) {
  $food->food_aid = $_GET['food'];
  checkId($food->food_aid);
  $query = checkReadById($food);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($food);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();