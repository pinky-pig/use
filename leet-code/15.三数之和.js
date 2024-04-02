/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.82%)
 * Likes:    6795
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 4.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 答：
 * 两数之和的所有可能性，然后再跟第三个比较。media 难度，暴力解法必然超时。
 * 既然和为 0 ，那么就有负有正
 *  1. 先排序
 *  2. 三数变两数
 *  3. i 不动，里面 j k 相加
 *  4. 如果和为负数，说明左边的值小了，左边 j 往右移动
 *  5. 如果和为正数，说明右边的值大了，右边 k 往左移动
 *  6. 如果和为0，那么就找到了，那么左右两边都要移动。
 *     因为如果三数之和为0且有两个值一样，那第三个值肯定也一样了。这里要去重的。
 *     还有跳过重复的元素，原因跟上面一句话一样。
 *  7. 直到两数相遇，不行就算了，下次循环
 *  8. 去重
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  nums = nums.sort((a, b) => a - b)

  const result = []


  for (let i = 0; i < nums.length; i++) {

    // 跳过重复的元素
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1, k = nums.length - 1
    while (j < k) {

      let sum = nums[i] + nums[j] + nums[k]

      if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
      } else {
        result.push([nums[i], nums[j], nums[k]])

        // 跳过重复的元素
        while (j < k && nums[j] === nums[j + 1]) j++
        while (j < k && nums[k] === nums[k - 1]) k--
        j++
        k--
      }
    }

  }


  return result

};
// @lc code=end
// [-4, -1, -1, 0, 1, 2]
// threeSum([-1,0,1,2,-1,-4])
