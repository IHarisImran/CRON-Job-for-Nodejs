const { CronJob } = require('cron');

let cronJobs = [];

module.exports = cronJob = (days, hours, timezone, callback) => {
    try {
        cronJobs.forEach(job => job.stop());
        cronJobs = [];

        days.forEach(day => {
            hours.forEach(hour => {
                hour = hour === 24 ? 0 : hour;
                const job = new CronJob(`0 ${hour} * * ${day}`, callback, null, true, timezone);
                job.start();
                cronJobs.push(job);
            });
        });

        return true;
    } catch (err) {
        console.log(err);
        return false;
    };
};