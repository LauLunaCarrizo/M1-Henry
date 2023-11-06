'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(val) {
   this.value= val;
   this.left=null;
   this.right=null;
}

BinarySearchTree.prototype.size = function(){
   if(!this.left && !this.right) return 1;
    if(!this.left){return 1 + this.right.size()}
    if(!this.right){return 1 + this.left.size()}
    if(this.left && this.right){return 1 + this.right.size() + this.left.size()}
}
BinarySearchTree.prototype.insert = function(val){
   if(val<this.value){
      if(!this.left){
          this.left = new BinarySearchTree(val);
      }else{
          return this.left.insert(val);
      }
  }else{
      if(!this.right){
          return this.right = new BinarySearchTree(val);
      }else{
          return this.right.insert(val);
      }
  }
}
BinarySearchTree.prototype.contains = function(val){
   if(this.value===val) return true
    if(val<this.value){
        if(this.left){
            return this.left.contains(val)
        }
    }else{
        if(this.right){
            return this.right.contains(val)
        }
    }
    return false;
}
BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
    if(order === "in-order" || !order){
        this.left && this.left.depthFirstForEach(cb, order)
        cb(this.value)
        this.right && this.right.depthFirstForEach(cb, order)
    }else if(order === "post-order"){
        this.left && this.left.depthFirstForEach(cb, order)
        this.right && this.right.depthFirstForEach(cb, order)
        cb(this.value)
    }else{
        cb(this.value)
        this.left && this.left.depthFirstForEach(cb, order)
        this.right && this.right.depthFirstForEach(cb, order)
    }
    
}
    
BinarySearchTree.prototype.breadthFirstForEach = function(cb,array=[]){
    if (this.left) {
        array.push(this.left)
      }
      if (this.right) {
        array.push(this.right)
      }
      cb(this.value)
      if (array.length > 0) {
        array.shift().breadthFirstForEach(cb, array)
      }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
