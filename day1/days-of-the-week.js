module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
module.exports.getWeekday = function (dayNo)
{
    if (dayNo < 0 || dayNo > 6) dayNo = 0
    // here, "this" refers to module.exports
    // console.log(this)
    return this.weekdays[dayNo]
}
// does not work if module.exports is assigned
// module.exports.hullabaloo = 'BOOGA BOOGA'
// console.log(module)
