// Write a function, isDescendant, that takes two DOM nodes as arguments, a child and a parent. This method should verify that the child node is a descendant of the parent node, and return true or false. The child does not have to be a direct descendant of the parent.



const child = document.getElementById('child');
const parent = document.getElementById('parent');
const notParent = document.getElementById('not-a-parent');



function isDescendant(parent, child){
    while (child.parentNode){
        if(child.parentNode == parent){
            return true;
        } else 
            child = child.parentNode;
        

    }
return false;
}

console.log(isDescendant(parent, child)) // true
console.log(isDescendant(notParent, child)) // false
