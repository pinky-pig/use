/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode.cn/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (46.06%)
 * Likes:    2286
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 为 无重复元素 的 升序 排列数组
 * -10^4 <= target <= 10^4
 * 
 * 答：
 * O(log n) 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // 如果找到目标元素，直接返回其索引
    if (nums[mid] === target) {
      return mid;
    }
    else if (nums[mid] < target && nums[mid + 1] > target) {
      return mid + 1
    }
    else if (nums[mid - 1] < target && nums[mid] > target) {
      return mid
    }
    else if(nums[mid - 1] < target && !nums[mid + 1]){
      return nums.length
    }
    else if(nums[0] > target && !nums[mid - 1]){
      return 0
    }
    // 如果目标元素位于左半部分，则更新右边界
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    // 如果目标元素位于右半部分，则更新左边界
    else {
      left = mid + 1;
    }
  }

  return left
};
// @lc code=end

// console.log(
//   searchInsert([1,3], 2)
// );
