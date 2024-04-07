# https://leetcode.com/problems/meeting-rooms/description/

class Solution(object):
    def canAttendMeetings(self, intervals):
        if not intervals:
            return True

        intervals.sort(key = lambda x:x[0])
        end = intervals[0][1]

        for interval in intervals[1:]:
            if interval[0] < end:
                return False
            end = interval[1]
        
        return True