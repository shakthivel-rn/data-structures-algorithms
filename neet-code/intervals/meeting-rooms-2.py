# https://leetcode.com/problems/meeting-rooms-ii/

class Solution(object):
    def minMeetingRooms(self, intervals):
        if not intervals:
            return 0
        
        intervals.sort(key = lambda x:x[0])
        minHeap = []
        heappush(minHeap, intervals[0][1])

        for interval in intervals[1:]:
            if interval[0] >= minHeap[0]:
                heappop(minHeap)
            heappush(minHeap, interval[1])
        
        return len(minHeap)
        