class SocialMedia {
  constructor() {
    this.users = new Map();
    this.timestamp = 0;
  }

  postTweet(userId, tweetId) {
    if (!this.users.has(userId)) {
      this.users.set(userId, { tweets: [], following: new Set() });
    }

    this.users.get(userId).tweets.push({ timestamp: this.timestamp, tweetId });
    this.timestamp += 1;
  }

  getNewsFeed(userId) {
    if (!this.users.has(userId)) return [];

    const maxHeap = new MaxHeap((tweet) => tweet.timestamp);
    const seenTweets = new Set();

    const user = this.users.get(userId);

    user.tweets.forEach((tweet) => {
      if (!seenTweets.has(tweet.tweetId)) {
        maxHeap.insert(tweet);
        seenTweets.add(tweet.tweetId);
      }
    });

    user.following.forEach((followeeId) => {
      if (this.users.has(followeeId)) {
        this.users.get(followeeId).tweets.forEach((tweet) => {
          if (!seenTweets.has(tweet.tweetId)) {
            maxHeap.insert(tweet);
            seenTweets.add(tweet.tweetId);
          }
        });
      }
    });

    const newsFeed = [];
    for (let index = 0; index < 10 && !maxHeap.isEmpty(); index++) {
      newsFeed.push(maxHeap.removeMax().tweetId);
    }

    return newsFeed;
  }

  follow(followerId, followeeId) {
    if (!this.users.has(followerId)) {
      this.users.set(followerId, { tweets: [], following: new Set() });
    }

    this.users.get(followerId).following.add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (this.users.has(followerId)) {
      this.users.get(followerId).following.delete(followeeId);
    }
  }
}

class MaxHeap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (
        this.compareFn(this.heap[index]) >
        this.compareFn(this.heap[parentIndex])
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  removeMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return maxValue;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let swapIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        leftChildIndex < length &&
        this.compareFn(this.heap[leftChildIndex]) >
          this.compareFn(this.heap[swapIndex])
      ) {
        swapIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.compareFn(this.heap[rightChildIndex]) >
          this.compareFn(this.heap[swapIndex])
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex !== index) {
        this.swap(swapIndex, index);
        index = swapIndex;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
