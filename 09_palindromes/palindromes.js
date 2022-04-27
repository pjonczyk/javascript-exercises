const palindromes = function (text) {
  text = text.replaceAll(",", "");
  text = text.replaceAll(".", "");
  text = text.replaceAll("!", "");
  text = text.replaceAll(" ", "");
  text = text.toLowerCase();
  const reversed = [...text].reverse().join("");
  return reversed == text;
};

// Do not edit below this line
module.exports = palindromes;
