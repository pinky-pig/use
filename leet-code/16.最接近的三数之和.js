/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode.cn/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (44.79%)
 * Likes:    1602
 * Dislikes: 0
 * Total Accepted:    551.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 
 * 返回这三个数的和。
 * 
 * 假定每组输入只存在恰好一个解。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 * 
 * 答：
 * 三数之和、盛最多水的容器
 * 将三数相加，然后与 target 相减，找到最近的值。
 * 1. 先排序
 * 2. 和小于 target ，j 左移
 * 3. 和大于 target ，k 右移
 * 4. 取 sum 和上一次的 sum 比较，哪一个减 target 的绝对值最小
 * 5. 总之，跟三数之和一样
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  nums = nums.sort((a, b) => a - b)

  let result = undefined

  for (let i = 0; i < nums.length; i++) {

    let j = i + 1, k = nums.length - 1

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      if (sum < target) {
        j++
      }else if (sum > target) {
        k--
      }else if(sum === target){
        return target
      }

      if (result) {
        result = Math.abs(sum - target) < Math.abs(result - target) ? sum : result
      }else{
        result = sum
      }

    }
    
  }

  return result
};
// @lc code=end
// -4,-1,1,2,1
// threeSumClosest([0,0,0], 1)
