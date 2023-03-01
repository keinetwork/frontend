function a(callback) {
    const str = 'Hello A'
    setTimeout(()=> {
        console.log('A')
        callback(str)
    }, 1000)
}


function c(callback) {
    setTimeout(()=> {
        console.log('C')
        callback()
    }, 1000)
}


function d(callback) {
    setTimeout(()=> {
        console.log('D')
        callback()
    }, 1000)
}

function b(callback) {
    setTimeout(()=> {
        console.log('B')
        callback()
    }, 1000)
}

// a(function () {
//     b( function() {
//         c(function() {
//             d(function(){
//                 console.log('Done!')
//             } )
//         })
//     })
// })

function aa() {
    // promise: 약속의 객ㅔ!
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('A')
            resolve('Hello A')
        }, 1000)
    })
}

function bb() {
    // promise: 약속의 객ㅔ!
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('B')
            resolve('Hello B')
        }, 1000)
    })
}
function cc() {
    // promise: 약속의 객ㅔ!
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('C')
            resolve('Hello C')
        }, 1000)
    })
}

function dd() {
    // promise: 약속의 객ㅔ!
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('D')
            resolve('Hello D')
        }, 1000)
    })
}

async function test() {
    const h1 = await aa()
    const h2 = await bb()
    const h3 = await cc()
    const h4= await dd()
    console.log('Done!')
    console.log(h1, h2, h3, h4)
}

test()