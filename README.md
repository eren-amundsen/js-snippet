## JS的代码片段

#### queryParse
- 将 json 转换为 queryString


#### arr.js
- 关于数组的方法：
    /**
    * ArrayConcat 多个数组拼接
    * ArrayConcat([1],[2,3,4],[6])  => [1, 2, 3, 4, 6]
    */

    /**
    * difference
    * a,b两个数组比较出不同的值：
    * 根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，过滤出数组 b 中不包含的值。
    * difference1([1,2,3],[2,3,4]) => [1]
    */

    /**
    * includes
    * 数组包含
    * 使用 slice() 来抵消数组/字符串，并且使用 indexOf() 来检查是否包含该值。如果省略最后一个参数 fromIndex ，则会检查整个数组/字符串。
    * includes("30-seconds-of-code", "code") -> true
    * includes([1, 2, 3, 4], [1, 2], 1) -> false
    */

    /**
    * intersection
    * 数组交集 跟 difference 取反即可
    */

    /**
    * union
    * 数组合集， 两个数组合为一个数组
    * 用数组 a 和 b 的所有值创建一个 Set 对象，并转换成一个数组。
    * union([1,2,3],[4,5]) => [1,2,3,4,5]
    */