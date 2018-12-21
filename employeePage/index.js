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
				searchArea.toggle();
				$('#btn-container').after('<img class="loading" src="https://i.gifer.com/1klM.gif" width="150" height="250">');
			},
			success: function (response) {
				if (response.length > 0) {
					$('#data-body').children().remove();
					$('.loading').remove();
					searchArea.toggle();
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