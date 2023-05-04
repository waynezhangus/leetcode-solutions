// split and join
var interpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
};

// regexp
var interpret = (command) =>
  command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");

// stack
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let st = [],
    res = "";
  for (let c of command) {
    if (c == ")") {
      if (st.pop() == "l") res += "al";
      else res += "o";
      st = [];
    } else if (c == "G") {
      res += "G";
    } else {
      st.push(c);
    }
  }
  return res;
};
