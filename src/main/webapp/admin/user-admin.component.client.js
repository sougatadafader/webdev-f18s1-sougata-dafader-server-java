(function () {
	var $usernameFld, $passwordFld, $emailFld, roleFld; 
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
    	loadUsers();
    	$createBtn.click(createUser);
    	$removeBtn.click(deleteUser);
    	$selectBtn.click(selectUser);
    }
    function loadUsers()
    {
    	$.getJSON('../content/users.json',function(json){
  	var tr;
  	for (var i = 0; i < json.length; i++) {
  		tr = $('<tr class="wbdv-template wbdv-user"/>');
  		tr.append('<td class="wbdv-username">' + json[i].username + '</td>');
  		tr.append("<td class='wbdv-password'>" + json[i].password + "</td>");
  		tr.append("<td class='wbdv-email'>" + json[i].email + "</td>");
  		tr.append("<td class='wbdv-first-name'>" + json[i].firstName + "</td>");
  		tr.append("<td class='wbdv-last-name'>" + json[i].lastName + "</td>");
  		tr.append("<td class='wbdv-role'>" + json[i].role + "</td>");
  		tr.append("<td class='wbdv-actions'><span class='float-right'><i class='fa-2x fa fa-times wbdv-remove'></i><i class='fa-2x fa fa-pencil wbdv-edit'></i></span></td>");
  		$('table').append(tr);
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
  });
    }
    function createUser() { 
    	var username = $usernameFld.val();
    	$usernameFld.val("");
    	var password = $passwordFld.val();
    	$passwordFld.val("");
    	var email = $emailFld.val();
    	$emailFld.val("");
    	var firstName = $firstNameFld.val();
    	$firstNameFld.val("");
    	var lastName = $lastNameFld.val();
    	$lastNameFld.val("");
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


    	
    	$tbody.append(newUser);


    	
    }
    function findAllUsers() {  }
    function findUserById() {  }
    function deleteUser(event) {
    	/*
    	Finds the ID
    	var id= $(event.currentTarget).attr("id");
    	console.log(id); */

    	var button = $(event.currentTarget);
    	var tr =  button.parents(".wbdv-template");
    	console.log(tr);
    	tr.remove();
    }
    function selectUser() { 
    	var button = $(event.currentTarget);
    	var current_tr =  button.parents(".wbdv-template.wbdv-user");
    	currentrow = current_tr.find(".wbdv-remove").attr("id");
    	//alert(currentrow);
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






    	//var 

    }
    function updateUser() {  }
    function renderUser(user) {  }
    function renderUsers(users) {  }
})();