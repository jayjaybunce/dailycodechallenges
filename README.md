# dailycodechallenges

## Daily Programming Challenges - ABC

### Day 1

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged. The input list is not necessarily ordered in any way.
For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
- Altering input format to use square brackers rather than parentheses - Input will be an array of arrays
  - [(1, 3), (5, 8), (4, 10), (20, 25)] => [[1,3], [5,8], [4,10], [20,25]]

Notes:
- Use flatten to remove sub arrays, we know that each interval will contain two numbers, thus index 0 and index 1 are interval #1 and so on
- I may need to make use of nested loops - I need to check to see if each array's indices match a certain condition, and I need to check each interval against each interval.

## Completed and Tested - 
Solution
```javascript
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
```
I used nested loops to have access to each sub arrays indices, which I check to see if its first number was less than the first number in another interval AND if the second number was greater than the second number in another inverval.
  
For Example

- [1,3] and [5,8]
  - Check to see if 1 is less than 3 which is true
  - Check to see if 3 is greater than 8 which is false
    - Check fails and iteration continues

- [5,8] and [4,10]
  - Check to see if 5 is less than 4 which is false
  - Check to see if 8 is greater than 10 which is false
    - Check fails and iteration continues

- [4,10] and [5,8]
  - Check to see if 4 is less than 5 which is true
  - Check to see if 10 is greater than 8 which is true
    - Mark array [5,8] for removal via temporary array for splicing later

### I'd like to simplify this, as this algorithm is quatratic time complexity, which is very inefficient


