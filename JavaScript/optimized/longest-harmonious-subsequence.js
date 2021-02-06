/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map();
    let max = 0;

    for (const occurence of nums){
        map.set(occurence, map.get(occurence) + 1 || 1);
        
        if (map.has(occurence + 1)){
            max = Math.max(max, map.get(occurence) + map.get(occurence + 1));
        }
        
        if (map.has(occurence -1)){
            max = Math.max(max, map.get(occurence) + map.get(occurence - 1));
        }
    }
    return max;
};
