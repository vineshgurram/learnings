// Promise X setTimeout

function myPromiseFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isTrue = true;
      if (isTrue) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

myPromiseFunc()
  .then(() => console.log("resolved"))
  .catch(() => console.log("rejected"));
