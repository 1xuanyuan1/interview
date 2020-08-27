// promise 依次执行

let a = function () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(1)
        }, 3000)
    })
} 
let b = function () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(2)
        }, 3000)
    })
} 
let list = [a, b]

// 使用 async await
async function test1 (list = []) {
    for (let item of list) {
        let msg = await item();
        console.log(`test1: ${msg}`)
    }
}

// 不是用 async await
function test2 (list = []) {
    if (list == null || list.length == 0) {
        return;
    }
    let item = list.shift();
    item().then((i) => {
        console.log(`test2: ${i}`)
        test2(list);
    })
}

let resolveFunc = function (i) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(i)
        }, 2000)
    })
} 
let rejectFunc = function (i) { 
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(i)
        }, 3000)
    })
}

// 实现 promise.all
function test3 (list = []) {
    return new Promise((resolve, reject) => {
        if (list == null || list.length == 0) {
            reject('没有输入promise数组')
            return
        }
        let results = []
        for (let item of list) {
            item.then((result) => {
                console.log('test3: ' + result)
                results.push(result);
                if (results.length == list.length) {
                    resolve(results)
                }
            }).catch(e => {
                reject(e)
            })
        }
    })
}


async function test4(list = []) {
    if (list == null || list.length == 0) {
        throw '没有输入promise数组'
    }
    let results = []
    for (let item of list) {
        try {
            results.push(await item)
        } catch (error) {
            throw error
        }
    }
    return results
}