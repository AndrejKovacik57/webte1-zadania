const cache_container = "static"
const files = [
    "./",
    "./index.html",
    "./hra.html",
    "./navod.html",
    "./js/script.js",
    "./js/index-script.js",
    "./css/style.css",
]


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cache_container)
            .then(cache => {
                return cache.addAll(files);
            })
)
})
self.addEventListener('activate', function (event){
    console.log("service worker activated", event)
})

self.addEventListener('fetch', event => {
    event.respondWith(async function() {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) return cachedResponse
        return fetch(event.request)
    }())
})