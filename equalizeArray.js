/** Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.

For example, if his array is arr=[1,2,2,3] , we see that he can delete the 2 elements 1 and 3 leaving arr=[2,2]. He could also delete both twos and either the 1  or the 3, but that would take 3 deletions. The minimum number of deletions is 2.

*/

function equalizeArray(arr) {
    arr = arr.sort()
    let count = 0
    let j = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[j] !== arr[i]) {
            count++
            j++
        }
    }
    return count
}