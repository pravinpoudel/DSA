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
            searchTree(node.left);
          }
        }
        if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            searchTree(node.right);
          }
        }
      };
    }
  }
}
