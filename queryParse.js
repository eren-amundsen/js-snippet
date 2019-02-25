// 将 json 转换为 queryString
let queryParse = {
  cleanArray: function (actual) {
    const newArray = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  },

  /**
   * json对象转换为查询字符串
   * @param {json} json json对象
   */
  json2query: function (json) {
    if (!json) {
      return '';
    }
    return this.cleanArray(Object.keys(json).map(key => {
      if (json[key] === undefined) {
        return '';
      }
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key]);
    })).join('&');
  }
};

let a = {
  name: 'chengwenjie',
  age: 24,
  address: 'shanghai'
}

let b = queryParse.json2query(a);

console.log(b);