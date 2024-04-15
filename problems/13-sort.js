/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
    // Check the base case: If `nums` is empty, then return `sorted`
    if(nums.length === 0) {
        return sorted;
    }

    let smallest = Infinity;
    let smallIndex = Infinity;

    console.log(nums);
    // Otherwise, find the smallest element in `nums`
    for(let i = 0; i < nums.length; i++) {
        // if(nums[i] < nums[i + 1]) {
        console.log(i);
        console.log(nums[i]);
        if(nums[i] <= smallest) {
        smallest = nums[i];
        console.log(smallest);
        smallIndex = i;    // smallIndex = i works because we know the index already
        console.log(smallIndex);    // was using smallIndex = nums.indexOf(smallest)
        }
    }

    // Add the smallest element to the end of `sorted`
    console.log(smallest);
    console.log(sorted);
    sorted.push(smallest);
    console.log(sorted);
                                                    // filter doesnt mutate nums
    // Remove the smallest element from `nums`      // nums.filter((num) => num !== smallest);
    console.log(nums);
    nums.splice(smallIndex, 1);
    console.log(nums);

    // Recursively call `sort()` with updated `sorted` and `nums`
    // return sort(nums.splice(smallIndex, 1), sorted);
    return sort(nums, sorted);
}

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []


// shorter version \/

function sortED(nums, sorted = []) {
    if(nums.length === 0) return sorted;

    let smallest = Infinity;
    let smallIndex = Infinity;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= smallest) {
        smallest = nums[i];
        smallIndex = nums.indexOf(smallest);
        }
    }

    sorted.push(smallest);
    nums.splice(smallIndex, 1);

    return sortED(nums, sorted);
}

console.log(sortED([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sortED([0, 1, -3])); // [-3, 0, 1]
console.log(sortED([])); // []


// Ruben's solution \/

function sortER(nums, sorted = []) {
    if(nums.length === 0) return sorted
    let lowest = Math.min(...nums)
    console.log(lowest);
    sorted.push(lowest);
    console.log(sorted);
    let index = nums.indexOf(lowest)
    console.log(index);
    console.log(nums);          // slice(0, index) returns the first unsorted values up to the current smallest index, excluding i
    let newArr = nums.slice(0, index).concat(nums.slice(index +1))
    console.log(newArr);        // then concat adds the remaining unsorted values after the smallest index
    return sortER(newArr, sorted)
}

console.log(sortER([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sortER([0, 1, -3])); // [-3, 0, 1]
console.log(sortER([])); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
