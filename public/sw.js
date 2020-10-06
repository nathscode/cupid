importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  /\.(?:js|css|html|ttf|png|jpeg|jpg)$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  "http://localhost:3000",
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp("/assets/.+"),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  /https:\/\/fonts.googleapis.com\/.+/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  /https:\/\/firebasestorage\.googleapis\.com\/.+/,
  new workbox.strategies.NetworkFirst()
);
