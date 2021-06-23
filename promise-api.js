// Return any promise that is already rejected with errors
const p = Promise.reject(new Error("Something went wrong"));
p.catch((err) => console.log(err));
