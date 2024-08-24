export default {
    install(app) {
        app.config.globalProperties.$loadImage = src => {
            return new Promise(resolve => {
                console.log("loading init")
                const img = document.createElement('img')
                img.src = src
                img.addEventListener('load', () => {
                    // 완료!
                    console.log("loading false")
                    resolve()
                })
            })
        }
    }
}