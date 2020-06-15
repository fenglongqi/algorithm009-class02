学习笔记

课程内容
## 深度优先搜索：常用递归 模板代码 递归版本

```
visited = set()
def dfs(node, visited):
    if node in visited: # terminator
    	# already visited
    	return
	visited.add(node)
	# process current node here.
	...
	for next_node in node.children():
		if next_node not in visited:
			dfs(next_node, visited)
```

## 广度优先搜索：常用队列的数据结构辅助 模板代码

```
def BFS(graph, start, end):
    visited = set()
	queue = []
	queue.append([start])
	while queue:
		node = queue.pop()
		visited.add(node)
		process(node)
		nodes = generate_related_nodes(node)
		queue.push(nodes)
	# other processing work
	...
```
贪心算法：是一种计算局部最优的，但不一定是全局最优，能用贪心算法解决的问题，是有特殊条件限制的。

二分查找：对数据的要求是单调递增或者单调递减，时间复杂度（log(N)） 模板代码
```
function binarySearch(nums) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        const val = nums[mid];
        if (val === target) {
            return mid;
        } else if (val > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
```