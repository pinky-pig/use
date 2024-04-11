/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (44.21%)
 * Likes:    2910
 * Dislikes: 0
 * Total Accepted:    867.7K
 * Total Submissions: 2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始
 * 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 <= target <= 10^4
 * 
 * 
 * 答：
 * O(log n)的找旋转点，没必要。
 * 将其一分为二，一半有序，一半无序，那么在有序里面找，
 * 找不到就去无序里面，将其一分为二，有序里面找，找不到继续重复
 * 直到最后找不到，那么 -1
 */

// @lc code=start
/**
 * 在旋转排序数组中搜索目标值的索引（递归实现）
 * @param {number[]} nums 旋转排序数组
 * @param {number} target 目标值
 * @return {number} 目标值的索引，如果不存在则返回 -1
 */
var search = function (nums, target) {

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    }

    // 左边有序
    if (nums[left] <= nums[mid]) {
      // 如果目标值在左边有序部分，那么就移动右指针
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } 
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
