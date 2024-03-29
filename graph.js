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

// console.log(findNeighbors([1,1], matrix1)) 

// find shortest route
function bfsPath(matrix, startNode, endValue) {
    let output = [];
    let visited = new Set([startNode.toString()]);
    let queue = [startNode];
    while (queue.length){
        let node = queue.shift();
        output.push(node);
        if(matrix[node[0]][node[1]]=== endValue){
            return output;
        }
        let neighbors = findNeighbors(node, matrix);
        for (let neighbor of neighbors){
            if(!visited.has(neighbor.toString())){
                visited.add(neighbor.toString());
                queue.push(neighbor)
            }
        }
    }
    return false;
}
// console.log(bfsPath(matrix1, [0,0], 16)); 

// find island size
function getNeighbors(row, col, matrix){
    let neighbors = [];
    if(row > 0 && matrix[row-1][col] === 1){
        neighbors.push([row-1, col])
    }
    if(row < matrix.length-1 && matrix[row+1][col] === 1){
        neighbors.push([row+1, col])
    }
    if ( col > 0 && matrix[row][col-1]=== 1){
        neighbors.push([row, col-1])
    }
    if(col < matrix[0].length-1 && matrix[row][col+1]===1){
        neighbors.push([row, col+1])
    }
    return neighbors
}

const matrix = [[1,1,1], [1,1,1], [1,1,1]]
// console.log(getNeighbors(1,1,matrix))

function islandSize(row, col, graph){
    let visited = new Set([[row, col].toString()]);
    let stacked = [[row, col]]

    while(stacked.length){
        let node = stacked.pop();
        let neighbors = getNeighbors(node[0], node[1], graph)
        for (let neighbor of neighbors){
            if(!visited.has(neighbor.toString())){
                visited.add(neighbor.toString());
                stacked.push(neighbor)
            }
        }
    }
    return visited.size;
}

