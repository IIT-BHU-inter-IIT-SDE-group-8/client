const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
    '/'
];

const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length >= size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
}
// Install sw
self.addEventListener("install", (e)=> {
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("Caching shell assets");
            cache.addAll(assets);
        })
    )
})

// Activate SW
self.addEventListener("activate", (e)=> {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
                )
        })
    )
})

// fetch events
self.addEventListener("fetch", (e)=> {
    e.respondWith(
        caches.match(e.request).then(cacheResponse => {
            return cacheResponse || fetch(e.request).then(fetchResponse => {
                const clonedResponse = fetchResponse.clone();
                caches.open(dynamicCacheName).then(cache => {
                    cache.put(e.request.url, clonedResponse);
                })
                limitCacheSize(dynamicCacheName, 10);
                return fetchResponse;
            })
        }).catch(async () => {
            // if(e.request.url.indexOf(".html") > -1) {
            //     return catches.match("/dist/fallback.html");
            // }
            console.log("Error Page");
        })
    )
})