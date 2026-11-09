class Timesheet {
  timesheets = new Map();

  submitTimesheet(projectName, duration) {
    if (this.timesheets.has(projectName)) {
      duration += this.timesheets.get(projectName);
    }
    this.timesheets.set(projectName, duration);
    return true;
  }

  getTotalTimesheetHours(projectName) {
    return this.timesheets.get(projectName);
  }

  getTimesheets() {
    return [...this.timesheets.values()];
  }
}

module.exports = Timesheet;
