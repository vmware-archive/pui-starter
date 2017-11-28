const helpers = {
  compact(array) {
    return array.filter(Boolean);
  },
  pepper: `${String.fromCharCode(55356)}${String.fromCharCode(57142)}`
};

module.exports = helpers;
