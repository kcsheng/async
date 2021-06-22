// Asynchronous (callbacks)
console.log("Before");
getUser(1, (userObj) => {
  getRepositories(userObj.gitHubUsername, (repoList) => {
    getCommits(repo, (commits) => {});
  });
});
console.log("After");

// Synchronous (no callbacks)
console.log("Before");
const userObj = getUser(1);
const repositories = getRepositories(userObj.gitHubUsername);
const commits = getCommits(repositories);
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
