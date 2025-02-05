getDateFromWorkHours(new Date(), 40);

function getDateFromWorkHours(startDate, workHours) {
    const workHoursPerDay = 8;
    const workDays = Math.floor(workHours / workHoursPerDay);
    const remainingHours = workHours % workHoursPerDay;

    let currentDate = new Date(startDate);

    // Add work days
    for (let i = 0; i < workDays; i++) {
        do {
            currentDate.setDate(currentDate.getDate() + 1);
        } while (currentDate.getDay() === 0 || currentDate.getDay() === 6); // Skip weekends
    }

    // Add remaining hours to the last day
    if (remainingHours > 0) {
        currentDate.setHours(currentDate.getHours() + remainingHours);
    }

    return currentDate;
}