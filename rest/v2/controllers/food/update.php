<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$food = new Food($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("foodid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $food->food_aid = $_GET['foodid'];
  $food->food_image = checkIndex($data, "food_image");
  $food->food_title = checkIndex($data, "food_title");
  $food->food_price = checkIndex($data, "food_price");
  $food->food_category_id = checkIndex($data, "food_category_id");
  $food->food_created = date("Y-m-d H:i:s");
  $food->food_datetime = date("Y-m-d H:i:s");
  checkId($food->food_aid);

//checks current data to avoid same entries from being updated
// $food_name_old = checkIndex($data, 'food_name_old');
// compareName($role, $role_name_old, $role->role_name);
// checkId($role->role_aid);

  // update
  $query = checkUpdate($food);
  returnSuccess($food, "food", $query);
}

// return 404 error if endpoint not available
checkEndpoint();