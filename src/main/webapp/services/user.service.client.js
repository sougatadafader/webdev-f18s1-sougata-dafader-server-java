
function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    //this.url = 'http://localhost:9000/api/user';
    var self = this;
    function createUser(user, callback) { }
    function findAllUsers(callback) {
        return [
        {username: 'Thor'},
        {username: 'Captain'},
        {username: 'IronMan'}
        ]
    }
    function findUserById(userId, callback) {}
    function updateUser(userId, user, callback) { }
    function deleteUser(userId, callback) {}
}
