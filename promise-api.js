// Running multiple promises in parallel, the result is demonstrated with an array

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn Task 1");
    resolve("first value");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn Task 2");
    resolve("second value");
  }, 1500);
});
// Returns as soon as a promise has been fulfilled
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
