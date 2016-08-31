<?php

$conn = mysqli_connect('localhost', 'root', '', 'presentable');

$sql = "SELECT * from personel";

$result = $conn->query($sql);


$personelArray = ["personel" => []];

while ($row = $result->fetch_assoc()) {
    // var_dump($row);
    $personelArray["personel"][] = array_map(function($a) {
        if (preg_match('/[^0-9]/', $a) !== 1) {return (int) $a; }
        return $a;
    }, $row);
}

file_put_contents('personel.json',json_encode($personelArray));