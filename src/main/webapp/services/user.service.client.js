
function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    //this.url = 'http://localhost:9000/api/user';
    var self = this;
    function createUser(user, callback) {



     }
     /*function loadAllUsers()
     {
        $.getJSON('../content/users.json');
     }*/
    function findAllUsers(callback) {
        /*$.getJSON('../content/users.json', function(json) {
            console.log(json); // this will show the info it in firebug console
        });*/
        $.ajaxSetup({
        async: false
        });
        var data = $.getJSON('../content/users.json');
        //alert(data.responseText);
        return data.responseJSON;
    }
    function findUserById(userId, callback) {

    }
    function updateUser(userId, user, callback) { 

    }
    function deleteUser(userId, callback) {

        var tr = $('#'+userId).closest('tr');
        tr.remove();
    }
}
