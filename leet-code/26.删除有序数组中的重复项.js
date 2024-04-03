/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (56.11%)
 * Likes:    3520
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,1,2]'
 *
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序
 * 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 
 * 
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums
 * 的大小不重要。
 * 返回 k 。
 * 
 * 
 * 判题标准:
 * 
 * 系统会用下面的代码来测试你的题解:
 * 
 * 
 * int[] nums = [...]; // 输入数组
 * int[] expectedNums = [...]; // 长度正确的期望答案
 * 
 * int k = removeDuplicates(nums); // 调用
 * 
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 * ⁠   assert nums[i] == expectedNums[i];
 * }
 * 
 * 如果所有断言都通过，那么您的题解将被 通过。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2,_]
 * 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4
 * 。不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 已按 非严格递增 排列
 * 
 * 答：
 * 要修改传入的 nums 的值
 * 所以不能 Set 之后再重新赋值给 nums。
 * 快慢指针，然后用后面的替换前面的。
 * 如果后面的没有重复的，那快慢指针应该是一样的，替换值也是不变。
 * 如果后面的有重复的，那么这个位置就可以随便替换了，后面的先往前替换。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0; // 空数组不需要处理

  let uniqueIndex = 0; // 初始时指向第一个元素，因为第一个元素肯定是非重复的

  // 从数组的第二个元素开始遍历
  for (let i = 1; i < nums.length; i++) {
      // 如果当前元素与上一个非重复元素不同
      if (nums[i] !== nums[uniqueIndex]) {
          // 将当前非重复元素移动到下一个位置
          uniqueIndex++;
          nums[uniqueIndex] = nums[i];
      }
      // 如果相同，则继续遍历下一个元素
  }

  // uniqueIndex 是最后一个非重复元素的索引，长度需要加1
  return uniqueIndex + 1;
};

// @lc code=end

// removeDuplicates([0,1,1,1,2,2,3,3,4])


