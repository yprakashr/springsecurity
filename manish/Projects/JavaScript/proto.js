let items = ["a", "b", "c", "d"];
let myPromise = new Promise((resolve, reject) => {
  if (items.includes("b") && items.includes("c")) {
    resolve("fulfilled");
  } else {
    reject("failed");
  }
});

myPromise.then(
  (resolve) => {
    console.log(resolve);
  },
  (reject) => {
    console.log(reject);
  }
);
