// Return any promise that is already resolved:
const p = Promise.reject("something went wrong");
p.catch((result) => console.log(result));
