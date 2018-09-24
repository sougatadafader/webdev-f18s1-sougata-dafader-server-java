(function () {
	var $usernameFld, $passwordFld, $emailFld, $roleFld, $dateOfBirth, $phone; 
	var $removeBtn, $selectBtn, $updateBtn, $createBtn, $searchBtn;
	var $firstNameFld, $lastNameFld;
	var $userRowTemplate, $tbody;
	var $currentrow;

	var userService = new AdminUserServiceClient();

	$(main);

	function main() { 
		
		$usernameFld = $("#usernameFld");
		$passwordFld = $("#passwordFld");
		$firstNameFld = $("#firstNameFld");
		$lastNameFld = $("#lastNameFld");
		$emailFld = $("#emailFld");
		$roleFld = $("#roleFld");

		$userRowTemplate = $(".wbdv-template.wbdv-user");
		$tbody = $(".wbdv-tbody");
    	//$tbody.append($userRowTemplate.clone());

    	$searchBtn = $("#searchBtn");
    	$createBtn = $("#createBtn");
    	$updateBtn = $("#updateBtn");
    	renderUsers();
    	$createBtn.click(createUser);
    	$updateBtn.click(updateUser);
    	//$removeBtn.click(deleteUser);
    	//$selectBtn.click(selectUser);
    	$('#searchBtn').click(searchUsers);
    }
    function clearForm()
    {
    	$usernameFld.val("");
    	$passwordFld.val("");
    	$emailFld.val("");
    	$firstNameFld.val("");
    	$lastNameFld.val("");
    	$roleFld.val("");
    }
    function renderUsers()
    {
    	
    	currentrow = "0";
    	//$.getJSON('../content/users.json',function(json){
    		var json = userService.findAllUsers();
    		var tr;
    		for (var i = 0; i < json.length; i++) {
    			tr = $('<tr class="wbdv-template wbdv-user"/>');
    			tr.append('<td class="wbdv-username">' + json[i].username + '</td>');
    			tr.append("<td class='wbdv-password'>" + json[i].password + "</td>");
    			tr.append("<td class='wbdv-email'>" + json[i].email + "</td>");
    			tr.append("<td class='wbdv-first-name'>" + json[i].firstName + "</td>");
    			tr.append("<td class='wbdv-last-name'>" + json[i].lastName + "</td>");
    			tr.append("<td class='wbdv-role'>" + json[i].role + "</td>");
    			tr.append("<td class='wbdv-actions'><span class='float-right'><i class='fa-2x fa fa-times wbdv-remove danger'></i><i class='pl-3 fa-2x fa fa-pencil wbdv-edit primary'></i></span></td>");
    			$('table').append(tr);
    			tr
    			.attr('data-username',json[i].username)
    			.attr('data-password',json[i].password)
    			.attr('data-email',json[i].email)
    			.attr('data-firstName',json[i].firstName)
    			.attr('data-lastName',json[i].lastName)
    			.attr('data-role',json[i].role); 
    			var timestamp = (new Date().getTime());
    			tr.find(".wbdv-remove")
    			.attr("id",timestamp-(i*1000));
    		}
    		$('.wbdv-remove').click(function(evt){
    			deleteUser(evt);
    		});
    		$('.wbdv-edit').click(function(evt){
    			selectUser(evt);
    		});

    	}
    	function createUser() { 
    		var username = $usernameFld.val();
    		var password = $passwordFld.val();
    		var email = $emailFld.val();
    		var firstName = $firstNameFld.val();
    		var lastName = $lastNameFld.val();
    		var role = $roleFld.val();
    		var timestamp = (new Date().getTime());
    		var newUser = $userRowTemplate.clone();

    	/*
    	newUser.removeClass("wbdv-hidden");
    	newUser.find(".wbdv-username").html(username);*/

    	//	We can also write it as: 
    	newUser
    	.removeClass("wbdv-hidden")
    	.find(".wbdv-username")
    	.html(username);
    	console.log(username);
    	newUser
    	.removeClass("wbdv-hidden")
    	.find(".wbdv-password")
    	.html(password);
    	console.log(password);
    	newUser
    	.removeClass("wbdv-hidden")
    	.find(".wbdv-email")
    	.html(email);
    	console.log(email);
    	newUser
    	.removeClass("wbdv-hidden")
    	.find(".wbdv-first-name")
    	.html(firstName);
    	console.log(firstName);
    	newUser
    	.removeClass("wbdv-hidden")
    	.find(".wbdv-last-name")
    	.html(lastName);
    	newUser
    	.removeClass("wbdv-hidden")
    	.find(".wbdv-role")
    	.html(role);
    	newUser
    	.find(".wbdv-remove")
    	.attr("id",timestamp)
    	.click(deleteUser);
    	newUser
    	.find(".wbdv-edit")
    	.click(selectUser)

    	newUser
    	.attr('data-username',username)
    	.attr('data-password',password)
    	.attr('data-email',email)
    	.attr('data-firstName',firstName)
    	.attr('data-lastName',lastName)
    	.attr('data-role',role);
    	
    	$tbody.append(newUser);
    	clearForm();


    	
    }
    function findAllUsers() {  }
    function findUserById() {  }
    function deleteUser(event) {
    	/*
    	Finds the ID
    	var id= $(event.currentTarget).attr("id");
    	console.log(id); */

    	var button = $(event.currentTarget);
    	var userID =  button.attr("id");

    	userService.deleteUser(userID);
    	console.log(userID);
    	//tr.remove();
    }
    function selectUser() { 
    	var button = $(event.currentTarget);
    	var current_tr =  button.parents(".wbdv-template.wbdv-user");
    	currentrow = current_tr.find(".wbdv-remove").attr("id");
    	var curr_username = current_tr.find('.wbdv-username').text();
    	$('#usernameFld').val(curr_username);
    	var curr_password = current_tr.find('.wbdv-password').text();
    	$('#passwordFld').val(curr_password);
    	var curr_email = current_tr.find('.wbdv-email').text();
    	$('#emailFld').val(curr_email);
    	var curr_first_name = current_tr.find('.wbdv-first-name').text();
    	$('#firstNameFld').val(curr_first_name);
    	var curr_last_name = current_tr.find('.wbdv-last-name').text();
    	$('#lastNameFld').val(curr_last_name);
    	var curr_role = current_tr.find('.wbdv-role').text();
    	$('#roleFld').val(curr_role);

    }
    function updateUser() { 
    	if(currentrow == "0")
    	{
    		alert("No row is selected");
    	}
    	else
    	{
    		
    		//var element = document.getElementById(currentrow).parentNode.parentNode.parentNode;
    		var element = $('#'+currentrow).closest('tr');
    		console.log(element);

    		element
    		.find(".wbdv-username")
    		.html($usernameFld.val());

    		element
    		.find(".wbdv-password")
    		.html($passwordFld.val());

    		element
    		.find(".wbdv-email")
    		.html($emailFld.val());
    		
    		element
    		.find(".wbdv-first-name")
    		.html($firstNameFld.val());
    		
    		element
    		.find(".wbdv-last-name")
    		.html($lastNameFld.val());
    		
    		element
    		.find(".wbdv-role")
    		.html($roleFld.val());
    		/*var current_tr = element.parents(".wbdv-template.wbdv-user");
    		console.log(current_tr);*/
    		element
    		.attr('data-username',$usernameFld.val())
    		.attr('data-password',$passwordFld.val())
    		.attr('data-email',$emailFld.val())
    		.attr('data-firstName',$firstNameFld.val())
    		.attr('data-lastName',$lastNameFld.val())
    		.attr('data-role',$roleFld.val());
    		clearForm();
            currentrow = "0";
    	}

    }

    function searchUsers()
    {
    	var selector = '.wbdv-template';
		var username = $usernameFld.val();
		//console.log(username);
		if(username != '')
		{
			selector += '[data-username*="'+username+'"]';
		}
		var password = $passwordFld.val();
		if(password != '')
		{
			selector += '[data-password*="'+password+'"]';
		}
		var email = $emailFld.val();
		if(email != '')
		{
			selector += '[data-email*="'+email+'"]';
		}
		var firstName = $firstNameFld.val();
		if(firstName != '')
		{
			selector += '[data-firstName*="'+firstName+'"]';
		}
		var lastName = $lastNameFld.val();
		if(lastName != '')
		{
			selector += '[data-lastName*="'+lastName+'"]';
		}
		var role = $roleFld.val();
		if(role != '')
		{
			selector += '[data-role="'+role+'"]';
		}
		$('.wbdv-template').addClass('d-none');
		//console.log(selector);
		$(selector).removeClass('d-none');
	}
	function renderUser(user) {  }
	//function renderUsers(users) {  }
})();