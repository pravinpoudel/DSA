function priorityQueue() {
  let collection = [];
  this.add = (data) => {
    if (collection.length == 0) {
      collection.push(data);
    } else {
      let length = 0;
      for (let i = 0, length = collection.length; i < length; i++) {
        if (collection[index][1] < data[1]) {
          collection.splice(index, 0, data);
          break;
        }
      }
      if (i == length) {
        collection.push(data);
      }
    }
  };

  this.values = () => collection;
}

let Queue = new priorityQueue();
Queue.add(["Ram", 12]);
Queue.add(["Sita", 11]);
console.log(Queue.values());
