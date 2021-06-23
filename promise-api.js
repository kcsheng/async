// Running multiple promises in parallel, the result is demonstrated with an array

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn Task 1");
    reject(new Error("something went wrong"));
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn Task 2");
    resolve("second value");
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
