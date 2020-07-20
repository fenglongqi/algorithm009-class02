// 递归的代码模板
function recursion (level, param) {
    
    if (level > MAXLEVEL) {
        // process result
        return
    }

    // process logic incurrent level
    process(level, data)

    // drill down
    recusion(level + 1, newParam)

    // restore current status 
}