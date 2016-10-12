<?php

class Person
{
    private $id;
    private $name;
    private $in;
    private $lastIn;
    private $lastOut;
    private $lastChange;
    function __construct($name, $id) {
        $this->name = $name;
        $this->id = $id;

        $this->lastIn = time();
        $this->lastOut = time();
        $this->lastChange = time();
    }

    public function getArray()
    {
        return [
            'ID' => $this->id,
            'Name' => $this->name,
            'In' => false,
            'LastIn' => $this->lastIn,
            'LastOut' => $this->lastOut,
            'LastChange' => $this->lastChange
            ];
    }

    public function getJSON()
    {
        return json_encode($this->getArray());
    }
}

$people = [
    'Tim Toom',
    'Mark Park',
    'Johan Slohan',
    'Karel de Parel',
    'Gerrit van Erret',
    'Willem Stillem',
    'Karin Waarin'
];

$personel = [];

for ($i = 0; $i < count($people); $i++) {
    $personT = new Person($people[$i], $i);
    $personel[] = $personT->getArray();
}

$firstPerson = new Person('Tim', 1);

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

echo json_encode($personelArray);