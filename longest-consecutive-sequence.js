// Longest Consecutive Sequence
// https://neetcode.io/problems/longest-consecutive-sequence/question

class Solution {
  longestConsecutive(nums) {
          const set = new Set(nums);
          let highest = 0;
          for(const num of nums) {
              const prev = num - 1;

              if(!set.has(prev)) {
                  let next = num + 1;
                  let temp = 1;

                  while(set.has(next)) {
                      next++;
                      temp++;
                  };


                  if(temp > highest) highest = temp;
              };
          };
          return highest;
      }
}
