# https://leetcode.com/problems/non-overlapping-intervals/description/

class Solution(object):
    def eraseOverlapIntervals(self, intervals):
        intervals.sort(key = lambda x:x[0])
        count = 0
        end = intervals[0][1]

        for interval in intervals[1:]:
            if interval[0] < end:
                end = min(end, interval[1])
                count += 1
            else:
                end = interval[1]
        
        return count