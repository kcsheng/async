console.log("Before");
getUser(1, (userObj) => {
  console.log("User Object", userObj);
  getRepositories(userObj.gitHubUsername, (repoList) => {
    console.log("Repositories", repoList);
  });
});
console.log("After");
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "KC Sheng" });
  }, 2000);
}

function getRepositories(userName, callback) {
  setTimeout(() => {
    console.log("Getting user's repositories from database...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
