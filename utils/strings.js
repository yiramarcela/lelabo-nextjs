const regEx = {
  removeSpaces: /[, ]+/g,
};

const removeSpaces = (str) => str.replace(regEx.removeSpaces, "");

export default { removeSpaces };
