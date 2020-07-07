class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    let check = (current) => {
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          return false;
        }
        check(current);
      } else if (data > current.data) {
        current = current.right;
        if (current === null) {
          return false;
        }
        check(current);
      } else if (data === current.data) {
        return true;
      }
    };
    check(current);
  }

  remove(data) {
    function removeNode(node, data) {
      if (node.data === null) {
        return null;
      }

      if (node.data === data) {
        if (node.right === null && node.left === null) {
          return null;
        } else if (node.right === null) {
          return node.left;
        } else if (node.left === null) {
          return node.right;
        }
        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNodeData;
        node.right = removeNode(node, tempNodeData);
        return node;
      } else if (node.data > data) {
        node = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}

function findHeight(node) {
  if (node === null) {
    return -1;
  }
  left = findHeight(node.left);
  right = findHeight(node.right);
  return left > right ? ++left : ++right;
}

const tree = new BST();
tree.add(12);
tree.add(14);
tree.add(22);
tree.add(9);
tree.add(12);
tree.add(27);

console.log(tree.root);
console.log(tree.findMax());
console.log(tree.findMin());
tree.remove(22);
console.log(tree.root);
