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

echo "<pre>";
print_r(json_encode(['personel' => $personel]));
echo "</pre>";