/**
 * @function minutesToMilliseconds
 * @param {number} minutes default : 1
 * @returns {number} milliseconds
 */
module.exports.minutesToMilliseconds = (minutes = 1) => minutes * 60 * 1000;

/**
 * Retrieves a list of fields that have errors from the provided errors object.
 *
 * @param {string[]} requiredFields - An array of field names that are required.
 * @param {Object} errors - An object containing error information for various fields.
 * @returns {string[]} - An array of field names that have errors.
 */
module.exports.getInvalidFields = (requiredFields, errors) => {
  const errorFields = [];
  requiredFields.forEach((field) => {
    if (errors[field]) {
      errorFields.push(field);
    }
  });

  return errorFields;
};

module.exports.getFormattedTime = (time) => {
  const formatedTime = new Date(0);
  const timeDate = new Date(time);
  formatedTime.setHours(timeDate.getHours());
  formatedTime.setMinutes(timeDate.getMinutes());

  return formatedTime;
};
