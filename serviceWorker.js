const staticDevFlashcards = "dev-flashcards-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/icons/icubed-512x512.png",
  math_formulas.js"></script>
  <script type="text/javascript" src="angles.js"></script>
  <script src="

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevFlashcards).then(cache => {
      cache.addAll(assets)
    })
  )
})
