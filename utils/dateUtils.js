/**
 * Get current date in IST (Indian Standard Time)
 * Returns Date object normalized to Midnight IST
 */
const getISTDate = () => {
    const now = new Date();
    // UTC offset for IST is +5:30
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);

    // Normalize to midnight
    istTime.setUTCHours(0, 0, 0, 0);
    return istTime;
};

/**
 * Get today's date string in YYYY-MM-DD format (IST)
 */
const getISTDateString = () => {
    const istDate = getISTDate();
    return istDate.toISOString().split('T')[0];
};

module.exports = { getISTDate, getISTDateString };
