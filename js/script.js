function mySet() {
  var collection = [];

  this.has = (element) => {
    if (collection.indexOf(element) != -1) {
      return true;
    }
    return false;
  };

  this.values = () => collection;

  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = (element) => {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.union = (otherSet) => {
    let unionSet = new mySet();
    let firstSetValues = this.values();
    let secondSetValues = otherSet.values();
    firstSetValues.forEach((e) => {
      unionSet.add(e);
    });

    secondSetValues.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  };

  this.intersection = (otherSet) => {
    let intersectionSet = new mySet();
    let firstSetValues = this.values();
    firstSetValues.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  };

  this.difference = (otherSet) => {
    let differenceSet = new mySet();
    let firstSetValues = this.values();
    firstSetValues.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subSet = (otherSet) => {
    let newSet = new mySet();
    let firstSetValues = this.values();
    return firstSetValues.every((element) => otherSet.has(element));
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subSet(setB));
