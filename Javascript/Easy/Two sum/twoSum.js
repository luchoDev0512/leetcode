/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let output = [];
    let countNums = nums.length;
    let firstNum = 0;
    for (let x = 0; x < countNums; x++) {
        firstNum = nums[x];
        if (firstNum > target) {
            continue;
        }
        for (let y = x + 1; y < countNums; y++) {
            if (firstNum + nums[y] === target) {
                output = [x, y]
                break;
            }
        }
    }
    return output;
};
