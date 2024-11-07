function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  for (let index = 1; index < intervals.length; index++) {
    if (intervals[index].start < intervals[index - 1].end) {
      return false;
    }
  }

  return true;
}
