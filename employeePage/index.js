$(function () {
	var searchArea = $('#btn-container, #searchBox');

	$.ajax({
		type: "POST",
		url: "employees.php",
		success: function (response) {
			var data = JSON.parse(response);
			for (let i = 0; i < data.length; i += 1) {
				$('#data-body').append(
					`<tr>
						<td class="data">${data[i].first_name}</td>
						<td class="data">${data[i].last_name}</td>
						<td class="data">${data[i].dept_name}</td>
						<td class="data">${data[i].title}</td>
						<td class="data">${data[i].salary}</td>
					</tr>`
				);
			}
		}
	});

	function getData(obj) {
		$.ajax({
			type: "POST",
			url: "GetEmployees.php",
			data: obj,
			beforeSend: function () {
				//Toggle visibility for search field and sorting buttons
				searchArea.toggle();
				//Add loading gif
				$('#btn-container').after('<img class="loading" src="https://i.gifer.com/1klM.gif" width="150" height="250">');
			},
			success: function (response) {
				//Remove all table data
				$('#data-body').children().remove();
				//Remove loading gif
				$('.loading').remove();
				searchArea.toggle();
				if (response.length > 0) {
					//Parse JSON
					var data = JSON.parse(response);
					//Iterate data array and add table data
					for (let i = 0; i < data.length; i += 1) {
						$('#data-body').append(
							`<tr>
								<td class="data">${data[i].first_name}</td>
								<td class="data">${data[i].last_name}</td>
								<td class="data">${data[i].dept_name}</td>
								<td class="data">${data[i].title}</td>
								<td class="data">${data[i].salary}</td>
							</tr>`
						);
					}
					//Focus search field
					$('#searchField').focus();
				}
				else {
					console.log('There is no data to show.');
				}
			}
		});
	}

	$('input[name="search"]').click(function () {
		getData({
			"str": $(this).val(),
			"desc": $('#desc').prop('checked').toString(),
			"search": $('#searchField').val()
		});
	});

	$('#searchField').keypress(function (e) {
		if (e.keyCode === 13) {
			var btnVal;
			var foo = $('input[name="search"]:checked');
			//If no radio button is checked
			if (foo.val() == undefined) {
				btnVal = "foo";
			}
			else {
				btnVal = foo.val();
			}
			getData({
				"str": btnVal,
				"desc": $('#desc').prop('checked').toString(),
				"search": $(this).val()
			});
		}
	});
});