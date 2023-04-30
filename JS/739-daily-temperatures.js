// monotonic stack
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let st = [],
    answer = Array(temperatures.length).fill(0);

  for (let [i, temp] of temperatures.entries()) {
    while (st.length && temp > temperatures[st.at(-1)]) {
      let cur = st.pop();
      answer[cur] = i - cur;
    }
    st.push(i);
  }

  return answer;
};
