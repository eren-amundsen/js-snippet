/**
 * ArrayConcat 多个数组拼接
 * ArrayConcat([1],[2,3,4],[6])  => [1, 2, 3, 4, 6]
 */
const ArrayConcat = (arr, ...args) => [].concat(arg, ...args);

/**
 * difference
 * a,b两个数组比较出不同的值：
 * 根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，过滤出数组 b 中不包含的值。
 * difference1([1,2,3],[2,3,4]) => [1]
 */
const difference = (a,b) => { const s = new Set(b); return a.filter(x => !s.has(x)) }


/**
 * includes
 * 数组包含
 * 使用 slice() 来抵消数组/字符串，并且使用 indexOf() 来检查是否包含该值。如果省略最后一个参数 fromIndex ，则会检查整个数组/字符串。
 * includes("30-seconds-of-code", "code") -> true
 * includes([1, 2, 3, 4], [1, 2], 1) -> false
 */
const includes = (collection, val, fromIndex=0) => collection.slice(fromIndex).indexOf(val) != -1;
const includes = (collection, val ) => collection.slice().indexOf(val) != -1;


/**
 * intersection
 * 数组交集 跟 difference 取反即可
 */
const intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); };

/**
 * remove (等我研究好在弄 没看懂别人的方法)
 * 根据条件移除数组中的值
 * 使用 Array.filter() 和 Array.reduce() 来查找返回真值的数组元素，
 * 使用 Array.splice() 来移除元素。 func 有三个参数(value, index, array)。
 */
 //const remove = (arr, func) => {}


 /**
  * union
  * 数组合集， 两个数组合为一个数组
  * 用数组 a 和 b 的所有值创建一个 Set 对象，并转换成一个数组。
  * union([1,2,3],[4,5]) => [1,2,3,4,5]
  */
 const union = (a, b) => Array.from(new Set([...a, ...b]));