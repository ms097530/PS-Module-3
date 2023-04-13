module.exports.getYearFromNow = () =>
{
    // TODO: alter year calculation based on leap year between now and future date

    return new Date(+new Date() + 365 * 24 * 60 * 60 * 1000)
}