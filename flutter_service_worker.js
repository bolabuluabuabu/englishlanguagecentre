'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3f520d9428e3b3a082bf0c0e7e338c58",
"version.json": "a31a1b8279955c1cacbe8ae37145e12d",
"index.html": "d6b35e5a00f7927077e453ca0153b97f",
"/": "d6b35e5a00f7927077e453ca0153b97f",
"main.dart.js": "01340a8e98e1015a506bf1ce4a137ce0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b56f6d60f3df932b9c1b361a86f7463f",
"assets/AssetManifest.json": "71b0ca2dd598ca1540cd4a9c7bf31934",
"assets/NOTICES": "3e90404282d164217f720c9fef5e9b18",
"assets/FontManifest.json": "6284adfb232c537b8755702129ef48b2",
"assets/AssetManifest.bin.json": "cbab2cbe1bac8fc3a3ed9dfeb5ad70d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3252e518fa1aa7c56e73020dae209ada",
"assets/fonts/MaterialIcons-Regular.otf": "ec008747fe77bea081c4589aaa745259",
"assets/assets/images/beginner_to_advance.png": "d189c5d9b4d9491a2bc30826976a062a",
"assets/assets/images/certificate.png": "023afe2ef23544af01f06bee60de31ec",
"assets/assets/images/instagram.png": "bdef32e358948d10a2a5cd7271a7eb7f",
"assets/assets/images/learn_everywhere.png": "219bbb1d834083d91588665d8f93e4f0",
"assets/assets/images/anak_anak_belajar.png": "aa925e0dd406485ea1fca9ddd3f5428d",
"assets/assets/images/member/hasna.jpeg": "33f2dd347c74b1f9c5eed13429453c94",
"assets/assets/images/member/maisha.jpeg": "2642e88805b8a0a5181ecae4937998a3",
"assets/assets/images/member/jihan.jpeg": "42cde800e9ee869f56952de4f733cb96",
"assets/assets/images/member/ranty.jpeg": "e0ac903ae9bf88924713d0ce5bdf81cc",
"assets/assets/images/member/cinta.jpeg": "cb28133eef486976b82816a91055cdb5",
"assets/assets/images/member/nabila.jpeg": "35d165b1d7357d2468630b63a38902bd",
"assets/assets/images/member/dian.jpeg": "4c6a3e6a7db5eee3cf5859a0de099630",
"assets/assets/images/member/bitha.jpeg": "074af7091b3fcc80cb87d4150217acb6",
"assets/assets/images/member/anna.jpeg": "c81ce1978b611c13c5ddde0e37ccce3f",
"assets/assets/images/member/ncik.jpeg": "5aec4ca44a9fc01a1cecb69003c727b4",
"assets/assets/images/member/desty.jpeg": "a097f1757d6a69ec64c8ceb44812049c",
"assets/assets/images/member/dena.jpeg": "d6772ffd7c7957c360f3883b00f0c84c",
"assets/assets/images/professional_tutor.png": "7bacd08c6ec184660572201abcef3ef7",
"assets/assets/images/interactive_class.png": "dae549457527528d37923c206f4eb143",
"assets/assets/images/programs/program14.jpeg": "adb41ae444732cac9828686263fca403",
"assets/assets/images/programs/program2.jpeg": "98615d0e70eb2d7c52935db4c6d4c725",
"assets/assets/images/programs/program3.jpeg": "1a067be07f298342c8cf4af0a81253c9",
"assets/assets/images/programs/program15.jpeg": "fd0d88b2b9785fdd7667a38ac3db3e97",
"assets/assets/images/programs/program4.jpeg": "ca98e4ceb4e44db9dab40ec5ad64a87c",
"assets/assets/images/programs/program8.jpeg": "50c886a781b10968087d8e555380ae4c",
"assets/assets/images/programs/program12.jpeg": "1cccf0a9642d621912b77577666ef79b",
"assets/assets/images/programs/program9.jpeg": "9febe51fdd758437e6dad5ba77a3be61",
"assets/assets/images/programs/program13.jpeg": "db6c657978ad7f4c5aeb9feae3cf06b0",
"assets/assets/images/programs/program5.jpeg": "03adba7d752f75f98c26e7681378c45e",
"assets/assets/images/programs/program6.jpeg": "718a4a39462ad69773d25d3bb9097e14",
"assets/assets/images/programs/program10.jpeg": "12578a003f5eadc334021d14f3393b86",
"assets/assets/images/programs/program11.jpeg": "74e581b73facd432ffc2bbe33931a052",
"assets/assets/images/programs/program7.jpeg": "6fb7f651c809ddd365fd03c127296127",
"assets/assets/images/programs/program16.jpeg": "6f11b3c0de8a25efa96655f8fdd9154c",
"assets/assets/images/programs/program1.jpeg": "419d1a9d842cf7813a7c5a8742d82cf0",
"assets/assets/images/programs/program17.jpeg": "ff1d2eb9089aeff1110e90301525d379",
"assets/assets/images/flourish.png": "f06d1be4d2842f09d15ff1eaee30e7d8",
"assets/assets/images/free_admissions.png": "0b00a401f9c4442fcae78f966e94076e",
"assets/assets/images/members/members10.jpeg": "e5869b5939caf84607541dafb9113d53",
"assets/assets/images/members/members1.jpeg": "9589435d5dffe3724b538158fb8c1859",
"assets/assets/images/members/members6.jpeg": "89bc26152c8f3fa06a9aacd3beb823d1",
"assets/assets/images/members/members7.jpeg": "ee282ecafe6cc817d0c15d4717fb7725",
"assets/assets/images/members/members8.jpeg": "ad8c52941f2a577793ab18bbf129b28c",
"assets/assets/images/members/members4.jpeg": "963dcb1bf2a9782cbf8652b98243573b",
"assets/assets/images/members/members5.jpeg": "6f41616f53476788a400bfb34a55fe01",
"assets/assets/images/members/members9.jpeg": "807ad07b2d9cd5376f858578506ec6bc",
"assets/assets/images/members/members2.jpeg": "70572683599da85cc10a1307bcb58341",
"assets/assets/images/members/members3.jpeg": "c490164991d6f38b3dede7f95f591eb8",
"assets/assets/images/remaja_belajar.jpg": "2d92121375eb378ab426117642698a68",
"assets/assets/fonts/Times-New-Roman/Times-New-Roman.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/assets/elc_logo.jpeg": "23465bf7f524d3ff6d1eda610c9d9392",
"elc_logo.jpeg": "23465bf7f524d3ff6d1eda610c9d9392",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
