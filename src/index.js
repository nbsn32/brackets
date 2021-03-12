module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0)
      return false;

  for (let i = 1; i < str.length; i++) {
      let chCurrent = str[i],
          chPrevious = str[i - 1];

      for (let config of bracketsConfig) {
          if (chPrevious === config[0] && chCurrent === config[1])
              return check(str.slice(0, i - 1) + str.slice(i + 1), bracketsConfig);
      }
  }

  return !str.length;
};