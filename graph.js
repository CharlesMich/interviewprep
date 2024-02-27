// find neighbors
const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

function findNeighbors(node, matrix) {
    let neighbors = [];
    let row = node[0];
    let col = node[1];
    if(row > 0){
        neighbors.push([row-1, col])
    }
    if(row < matrix.length-1){
        neighbors.push([row+1, col])
    }
    if(col > 0){
        neighbors.push([row, col-1]);
    }
    if(col < matrix[0].length-1){
        neighbors.push([row, col+1])
    }
    return neighbors;
}    

console.log(findNeighbors([1,1], matrix1)) 