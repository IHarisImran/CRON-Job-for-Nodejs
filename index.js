const haveScheduled = cronJob(
    [0, 1, 6],
    [6, 17, 23],
    "Asia/Karachi",
    () => {
        console.log("I just got a call for a job.")
    }
);

if (!haveScheduled) console.log("Failed to schedule the jobs.");