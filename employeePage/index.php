<!DOCTYPE html>
<html>
<head>
	<?php $pdo = new PDO("mysql:host=localhost;dbname=modified", "root", ""); ?>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	crossorigin="anonymous">

	<!-- Raleway font -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">

	<!-- Local stylesheet -->
	<link rel="stylesheet" type="text/css" href="style.css">

	<!-- jQuery CDN -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<!-- Local Javascript file -->
	<script src="index.js"></script>

	<title>Hello, world!</title>
</head>

<body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6 offset-md-1">
				<table class="table-dark">
					<thead>
						<tr>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Department</th>
							<th scope="col">Title</th>
							<th scope="col">Salary</th>
						</tr>
					</thead>

					<tbody id="data-body"></tbody>
				</table>
			</div>
			<div class="col-md-5">
				<div id="searchBox">
					<label for="searchField">Search</label>
					<input type="text" name="searchField" id="searchField">
				</div>
				<div id="btn-container">
					<p>Sorting buttons</p>
					<ul>
						<li><input type="checkbox" name="desc" id="desc"><span>Descending order</span></li>
						<li><input type="radio" name="search" value="1"><span>First Name</span></li>
						<li><input type="radio" name="search" value="2"><span>Last Name</span></li>
						<li><input type="radio" name="search" value="3"><span>Title</span></li>
						<li><input type="radio" name="search" value="4"><span>Department</span></li>
						<li><input type="radio" name="search" value="5"><span>Salary</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>

</html>