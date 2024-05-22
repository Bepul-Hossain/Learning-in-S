let callback = (item) => item + 20;

function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

// forEach([1, 2], callback);
module.exports = forEach;
