

const someMatrix = [
    1, 0, 0, 0, 0, 
    0, 0, 1, 1, 0,
    0, 1, 1, 0, 0,
    0, 0, 0, 0, 0,
    1, 1, 0, 0, 1,
    1, 1, 0, 0, 1
]

const findIslands = (matrix) => {
    const len = matrix.length
    const low = Math.floor(Math.sqrt(len))
    const high = low + 1
    if (high * low == 30){
        for (let i = 0 ; i < len; i += low){
            let temp = matrix.slice(i, i+low)
            console.log(temp)
        }
    }else{
        return 'unable to calculate high and low correctly'
    }
    
}

findIslands(someMatrix)
