/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let longestSequence = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const positiveSubSequence = [nums[i]];
        const negativeSubSequence = [nums[i]];
        let isHarmonious = false;
        
        for (let j = i+1; j < nums.length; j++) {
            const difference = nums[j] - nums[i];
            
            if (difference == 1) {
                positiveSubSequence.push(nums[j]);
                isHarmonious = true;
            } else if (difference == 0) {
                positiveSubSequence.push(nums[j]);
                negativeSubSequence.push(nums[j]);
            } else if (difference == -1) {
                negativeSubSequence.push(nums[j]);
                isHarmonious = true;
            }
        }
        
        if (isHarmonious) {
            longestSequence = Math.max(longestSequence, Math.max(positiveSubSequence.length, negativeSubSequence.length));
        }
    }
    return longestSequence;
};
