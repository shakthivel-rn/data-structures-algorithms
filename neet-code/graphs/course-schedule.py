# https://leetcode.com/problems/course-schedule/description/

class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        courseSchedule = []

        inDegree = collections.defaultdict(int)
        graph = collections.defaultdict(list)
        queue = collections.deque()

        for prerequisite in prerequisites:
            prereq, course = prerequisite[0], prerequisite[1]
            graph[prereq].append(course)
            inDegree[course] += 1
        
        for course in range(numCourses):
            if inDegree[course] == 0:
                queue.append(course)
        
        while queue:
            course = queue.popleft()
            courseSchedule.append(course)

            for neighbor in graph[course]:
                inDegree[neighbor] -= 1

                if inDegree[neighbor] == 0:
                    queue.append(neighbor)
        
        return len(courseSchedule) == numCourses
        