/* username, password, email, firstName, lastName, phone, role, and dateOfBirth*/
function User(username, password, email, firstName, lastName, phone, role,dateOfBirth ) {
  this.username = username;
  this.password = password;
  // ...same for rest of properties…

  this.setUsername = setUsername;
  this.getUsername = getUsername;
  // ...same for rest of properties…

  this.setRole = setRole;
  this.getRole = getRole;

  function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
   function setRole(role) {
    this.role = role;
  }
  function getRole() {
    return this.role;
  }
  // ...same for rest of properties…
}
