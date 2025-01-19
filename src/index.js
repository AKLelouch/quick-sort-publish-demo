const quickSort = nums => {
  return quickSortInner(nums, 0, nums.length - 1);
};

const quickSortInner = (nums, low, high) => {
  if (low >= high) return;
  let pivot = partition(nums, low, high);
  quickSortInner(nums, low, pivot - 1);
  quickSortInner(nums, pivot + 1, high);
  return nums;
};

const partition = (nums, low, high) => {
  let pivot = low;
  let i = low,
    j = high + 1;
  while (true) {
    while (nums[++i] < nums[pivot]) if (i === high) break;
    while (nums[--j] > nums[pivot]) if (j === low) break;
    if (i >= j) break;
    exchange(nums, i, j);
  }

  exchange(nums, pivot, j);
  return j;
};

const exchange = (nums, a, b) => {
  let tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
};

export default quickSort;
