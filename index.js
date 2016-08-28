'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    console.log("your number is", number, "and your locale is", locale)
    return number.toLocaleString(locale);
};