module.exports = function (num1, num2)
{
    const lower = num1 < num2 ? num1 : num2
    const diff = Math.abs(num1 - num2)
    return Math.round(Math.random() * diff + lower)
}