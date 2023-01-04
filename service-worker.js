/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "454719355d9a7f04fc2e9107cc69ea1b"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.8a2735be.css",
    "revision": "72fd9a587951ebf415b8d5ee13055012"
  },
  {
    "url": "assets/img/before_delete.07413b11.png",
    "revision": "07413b119bf1ca530867f6e5af0cdf0e"
  },
  {
    "url": "assets/img/create_res.111875f5.png",
    "revision": "111875f5fabab37a409a8945e675d206"
  },
  {
    "url": "assets/img/create_workspace.56288ccd.png",
    "revision": "56288ccdb28e0abe9f18da53bd62bb1f"
  },
  {
    "url": "assets/img/delete_res.b0138245.png",
    "revision": "b0138245f2d20abc0a0ae0ba9f6dc1db"
  },
  {
    "url": "assets/img/delete_workspace.124850d3.png",
    "revision": "124850d346f31551fbc8cb06349c71c5"
  },
  {
    "url": "assets/img/read_workspace.0ef36b16.png",
    "revision": "0ef36b160d8e245a3ca93660f8f942d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_res.a18259fe.png",
    "revision": "a18259febd290a34bafa6111a480ac8c"
  },
  {
    "url": "assets/img/update_workspace.6fd5957b.png",
    "revision": "6fd5957be0a36d7e6ce6ecea576e61ad"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.cec2ed9f.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.217e251d.js",
    "revision": "317c45e52c1af722c7971beac61b07af"
  },
  {
    "url": "assets/js/14.49aa7893.js",
    "revision": "e269fd883dad74f1b705eefcdd6fc9c3"
  },
  {
    "url": "assets/js/15.11a4580e.js",
    "revision": "d84ae54486f72cc76f06637875ce34cd"
  },
  {
    "url": "assets/js/16.d915a530.js",
    "revision": "3b8a96fc973868f34ad2aa265ca6607a"
  },
  {
    "url": "assets/js/17.f1330ea1.js",
    "revision": "06e3ed0224b60a56db2fc3c5ed8ad8c9"
  },
  {
    "url": "assets/js/18.6c5ebf74.js",
    "revision": "6e3d58f6d5002c120bb6a711dca482af"
  },
  {
    "url": "assets/js/19.3e765882.js",
    "revision": "8d4aa30b4e19693d252b1da4afeb6c8e"
  },
  {
    "url": "assets/js/2.414d185f.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.15a7b89f.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.01626fb9.js",
    "revision": "0ad4507a3d2ce8bd5ffcb195e8fd4e77"
  },
  {
    "url": "assets/js/22.b8821945.js",
    "revision": "a6d237f3d7b1f9ce87405f9d25a50dce"
  },
  {
    "url": "assets/js/23.b6922578.js",
    "revision": "f73354f19b5ba6ab0d674002276b4ef6"
  },
  {
    "url": "assets/js/24.5f6286e6.js",
    "revision": "03e92b5d65bb3702fd707cecd9d4a997"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.2562c345.js",
    "revision": "335a97a113e18bb0cf9cbc8987a43e51"
  },
  {
    "url": "assets/js/4.4ded2ed6.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.5b3d6de5.js",
    "revision": "f49f22a787f321c3bd331e51f87e9584"
  },
  {
    "url": "assets/js/6.cb1ca25b.js",
    "revision": "fa5e8c6dd8fcfb1e81a1277f88437590"
  },
  {
    "url": "assets/js/7.eb73e1ac.js",
    "revision": "5b4888d3d6bfcdf50f41d84f97b97416"
  },
  {
    "url": "assets/js/8.f7398b0c.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.6a0c4c57.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.66889edb.js",
    "revision": "c73a21de9fa798701ab41bb0b29945ce"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c50a63abc9c668b2db2ffdd5c20ee3c1"
  },
  {
    "url": "design/index.html",
    "revision": "5a17ef40b4825a73c64878d00aed00c2"
  },
  {
    "url": "index.html",
    "revision": "98229698ada74b18766d4602d9bb2bf1"
  },
  {
    "url": "intro/index.html",
    "revision": "317f1bb54a614b0557acbd1587220f63"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "bb47eb12c8d2a36afae4b53589678faf"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0a657211d988eba4d5dfe0f3111c0ee6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "cd2f4d7fe132e6841dca60fd2c871cbb"
  },
  {
    "url": "software/index.html",
    "revision": "5c2d3bb161da6213c1db3cc05a628db6"
  },
  {
    "url": "test/index.html",
    "revision": "031b01554b49018feb0f3ee4f0062417"
  },
  {
    "url": "use cases/index.html",
    "revision": "23197264da5f1f50d370acdc2b1f69c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
