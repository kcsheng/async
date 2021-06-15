console.log("a");
getUser(1, function (user) {
  console.log("user", user);
});
console.log("b");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading a user from database");
    callback({ id: id, gitHubUsername: "KC" });
  }, 2000);
}
