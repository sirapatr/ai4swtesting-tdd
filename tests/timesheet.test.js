const Timesheet = require('../src/timesheet');

test('timesheets that are added can be retrieved as a list', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 2', 8);
  timesheet.submitTimesheet('Project 3', 8);
  expect(timesheet.getTimesheets()).toHaveLength(3);
});