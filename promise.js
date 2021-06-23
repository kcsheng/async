const p = new Promise((resolve, reject) => {
  // kick off some async work......(access database or call a web server)
  // When the asyn work completes, resolve or reject function will return the result or error, respectively.
  setTimeout(() => {
    // resolve(1);
    reject("Something went wrong.");
  }, 2000);
});

// Promise employs two functions resolve and reject to pass a value to a consumer after its completion of async work.

p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// Use .then to consume the result; use .catch to consume the error

// Promise makes the code looks neater.
