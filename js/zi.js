function template(id, date) {
    var str = document.getElementById(id).innerHTML
    var patter = /{{\s*([a-zA-Z]+)\s*}}/ //  利用小括号进行提取，返回值是一个数组，并且具有两个数值
    var result = null
    while (result != patter.exec(str)) { //  只要 检索的数值不是 null 就会一直循环下去
        var str = str.replace(patter.exec(str)[0], date[parent.exec(str)[1]])
    }
    return str;
}