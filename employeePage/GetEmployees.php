<?php
$pdo = new PDO("mysql:host=localhost;dbname=modified", "root", "");
$desc = $_POST['desc'];
$sortOption = $_POST['str'];
$search = $_POST['search'];

switch ($sortOption) {
	case '1':
		$sortOption = "e.first_name";
		break;

	case '2':
		$sortOption = "e.last_name";
		break;
	
	case '3':
		$sortOption = "t.title";
		break;

	case '4':
		$sortOption = "d.dept_name";
		break;

	case '5':
		$sortOption = "s.salary";
		break;

	default:
		$sortOption = "";
		break;
}

if ($search != "" && $sortOption != "") {
	$searchString = "AND $sortOption LIKE '%$search%'";

	if ($desc == "true") {
		$sortOption .= " DESC";
	}
	$sortOption = "ORDER BY $sortOption";
}
else {
	$searchString = "";
}

if ($searchString != "") {
	$sortOption = "";
}

$stmt = $pdo->prepare("SELECT e.first_name, e.last_name, t.title, d.dept_name, s.salary
FROM employees AS e
INNER JOIN titles AS t ON t.emp_no = e.emp_no
INNER JOIN current_dept_emp AS cde ON cde.emp_no = e.emp_no
INNER JOIN departments AS d ON d.dept_no = cde.dept_no
INNER JOIN salaries AS s ON s.emp_no = e.emp_no
WHERE CAST(CAST(CURRENT_TIMESTAMP AS date) AS int) < CAST(s.to_date AS int)
$searchString
$sortOption LIMIT 100");

$values = array();

if ($stmt->execute()) {
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
		array_push($values, $row);
	}
	echo json_encode($values);
}

?>