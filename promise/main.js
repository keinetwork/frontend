function a() {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log('A')
            resolve()
        }, 1000)
    })
}

function b() {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log('B')
            resolve()
        }, 1000)
    })
}

function c() {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log('C')
            resolve()
        }, 1000)
    })
}

function d() {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log('D')
            resolve()
        }, 1000)
    })
}

function test() {
    // const promise = a()
    // promise.then(()=>{
    //     console.log('B')

    // })

    a().then(()=>{
        b().then(()=>{
            c().then(()=>{
                d().then(()=>{
                    console.log('Done!')
                })
            })
        })
    })

    a().then(()=>{
        return b()
    }).then(()=>{
        return c()
    }).then(()=>{
        return d()
    }).then(()=>{
        console.log('Done!')
    })

    a()
        .then(()=> b())
        .then(()=> c())
        .then(()=> d())
        .then(()=> {
            console.log('Done!')
        })
}

// test()

function aa(number) {
    return new Promise((resolve, reject)=> {
        if( number > 4) {
            reject()
            return 
        }
        setTimeout(()=>{
            console.log('A')
            resolve()
        }, 1000)
    })
}

function test2() {
    aa(4)
        .then(()=>{
            console.log('Resolve!')
        })
        .catch(()=>{
            console.log('Reject!')
        })
        .finally(()=>{
            console.log('Done!')
        })
}

async function test3(){
    try{     
        await aa(8)
        console.log('Resolve!')   
    } catch(error) {
        console.log('Reject!')
    } finally {
        console.log('Done!')
    }
}

test3()