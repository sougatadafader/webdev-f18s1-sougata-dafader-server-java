(function () {
    var $usernameFld, $passwordFld, $emailFld, roleFld; 
	var $removeBtn, $selectBtn, $updateBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;

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


    	$createBtn = $("#createBtn");
    	$updateBtn = $("updateBtn");
    	$createBtn.click(createUser);
    	$removeBtn.click(deleteUser);
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
    		.click(deleteUser)


    	
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
    function selectUser() {  }
    function updateUser() {  }
    function renderUser(user) {  }
    function renderUsers(users) {  }
})();
