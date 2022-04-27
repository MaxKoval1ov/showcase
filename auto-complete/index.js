const createAutoComplete = (data) => (input) => {
  if (input) {
    let lowerInp = input.toLowerCase();
    return data.reduce((arr, curr) => {
      if (curr.substr(0, input.length).toLowerCase() == lowerInp) {
        arr.push(curr);
      }
      return arr;
    }, []);
  }
  return [];
};

module.exports.createAutoComplete = createAutoComplete;

