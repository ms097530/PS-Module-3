function isLeap(year)
{
    return new Date(year, 1, 29).getDate() === 29
}

module.exports.getYearFromNow = () =>
{
    // TODO: alter year calculation based on leap year between now and future date

    return new Date(+new Date() + 365 * 24 * 60 * 60 * 1000)
}

