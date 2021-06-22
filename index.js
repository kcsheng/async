// Asynchronous (callbacks)

getUser(1, getRepositories);

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repo) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

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
