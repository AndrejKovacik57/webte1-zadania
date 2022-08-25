navigator.serviceWorker.register("./serviceWorker.js")
    .then((reg) => {
        console.log("service worker registered", reg)
    })
    .catch(err=>{
        console.log("error", err)
    })
