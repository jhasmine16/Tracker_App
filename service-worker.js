self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("Budget-cache").then(function(cache){
      return cache.addAll(["index.html"])
    })
  );
});