//create animation | / - \ | / - \ | using loop and array

const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']
for (let i = 0; i < array.length; i++) {
  let delay = 200;
  setTimeout(() => {
    process.stdout.write(array[i]);
  }, delay * i);
}
