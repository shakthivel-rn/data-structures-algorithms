# https://leetcode.com/problems/insert-interval/description/

class Solution(object):
    def insert(self, intervals, newInterval):
        res = []
        start, end = 0, 1

        for index in range(len(intervals)):
            if newInterval[end] < intervals[index][start]:
                res.append(newInterval)
                return res + intervals[index:]
            elif newInterval[start] > intervals[index][end]:
                res.append(intervals[index])
            else:
                newInterval = [min(newInterval[0], intervals[index][0]), max(newInterval[1], intervals[index][1])]
        
        res.append(newInterval)
        return res
