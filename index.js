console.log("a");
const user = getUser(1);
console.log(user);
console.log("b");

function getUser(id) {
  setTimeout(() => {
    console.log("reading a user from database");
    return { id: id, gitHubUsername: "KC" };
  }, 2000);
}
