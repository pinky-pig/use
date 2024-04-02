/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (36.61%)
 * Likes:    1896
 * Dislikes: 0
 * Total Accepted:    571.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 
 * 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * 你可以按 任意顺序 返回答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 答：
 * 估计跟三数之和一样。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);

  const result = []

  for (let i = 0; i < nums.length; i++) {

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let threeSumTarget = target - nums[i]

    for (let j = i + 1; j < nums.length; j++) {

      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let twoSumTarget = threeSumTarget - nums[j]

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        let twoSum = nums[left] + nums[right]
        if (twoSum < twoSumTarget) {
          left++
        }
        else if (twoSum > twoSumTarget) {
          right--
        }
        else {
          result.push([nums[i], nums[j], nums[left], nums[right]])

          // 跳过重复的元素
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        }
      }

    }

  }

  return result

};
// @lc code=end

// fourSum([2,2,2,2,2], 8)
