function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function getMonthName(mo) {
    mo--;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
        return months[mo];
    } else {
        throw new UserException('InvalidMonthNo');
    }
}

let monthName;
try {
    const myMonth = 15;
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name);
}