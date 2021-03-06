function cloneObj(obj) {
    var o = obj.constructor == Array ? [] : {}; //首先处理变量，看看是数组还是对象啦
    for (var k in obj) {
        //我们知道for in 会将原型的东西也给遍历出来，所以我们这里需要做一个判断
        if (obj.hasOwnProperty(k)) {
            //递归方式处理
            o[k] = typeof obj[k] === "object" ? cloneObj(obj[k]) : obj[k];
        }
    }
    return o;
}