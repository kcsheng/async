// Return any promise that is already resolved:
const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));
