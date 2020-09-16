// PROMPT:

// Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

// The input list is not necessarily ordered in any way.

// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].





let arrOfIntervals = [[1,3],[5,8],[4,10],[20,25]]

const mergeIntervals = (arr) => {
    let someArr = arr.flat()
    const temp = []
    arr.forEach((item,index)=> {
        arr.forEach((i,idx)=>{
            if(i[0]<item[0] && i[1]>item[1]){
                temp.push(index)
            }
        })
    })

    temp.forEach((item)=>{
        arr.splice(item,1)
    })
    console.log(arr)
}


mergeIntervals(arrOfIntervals)