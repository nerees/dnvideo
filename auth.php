<?php

$loginai=array();
for ($i=0; $i<200;$i++){
    $loginai[$i] = "SDD2021".strval($i);
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $data = file_get_contents('php://input');
    $obj = json_decode($data);
    //$temp = var_dump($obj);
    //echo json_encode($obj->kodas);
    //echo $temp;
    //if ($obj->kodas == '4'){
    if (in_array(strtoupper($obj->kodas), $loginai)){    
        echo json_encode(1);
    }
    else{
        echo json_encode(0);
    }
}
