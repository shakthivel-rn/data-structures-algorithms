var MyHashMap = function () {
  this.size = 1000;
  this.buckets = Array.from({ length: this.size }, () => []);
};

MyHashMap.prototype.put = function (key, value) {
  const index = this.hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value;
      return;
    }
  }

  bucket.push([key, value]);
};

MyHashMap.prototype.get = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }

  return -1;
};

MyHashMap.prototype.remove = function (key) {
  const index = this.hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return;
    }
  }
};

MyHashMap.prototype.hash = function (key) {
  return key % this.size;
};
