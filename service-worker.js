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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b368643ef1d52799a006b0c081105718"
  },
  {
    "url": "assets/css/0.styles.c8b4645d.css",
    "revision": "ad4c1ccaf07efbc7ef66e1b6ebc94fe9"
  },
  {
    "url": "assets/img/01-project.208f3b69.png",
    "revision": "208f3b6973b8b9680c4cf29d4de9be59"
  },
  {
    "url": "assets/img/02-folder.579c6a0e.png",
    "revision": "579c6a0e175fed85dac7fed2de85705d"
  },
  {
    "url": "assets/img/03-task.99bbf979.png",
    "revision": "99bbf9795e5a4fc7a1e22377b3295068"
  },
  {
    "url": "assets/img/04-duedate.63c31c82.png",
    "revision": "63c31c82493ebf6204dc34023098e28f"
  },
  {
    "url": "assets/img/05-milestone.7a977990.png",
    "revision": "7a977990212e9781635d3cdbf7e3be1c"
  },
  {
    "url": "assets/img/06-list.b9851ab1.png",
    "revision": "b9851ab1250c8db299b0a2ba6649feea"
  },
  {
    "url": "assets/img/07-timeline.70c2a079.png",
    "revision": "70c2a0798537725a0188e277e0589c1d"
  },
  {
    "url": "assets/img/high-level-architecture.6ba3394b.png",
    "revision": "6ba3394bba21456a4e8649c3e5d6a34d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.74794bf7.js",
    "revision": "fe90c3508ef9b7387836082bc7bfe2a8"
  },
  {
    "url": "assets/js/11.71b2dc49.js",
    "revision": "262fe47d6bd71882faa72782582c5566"
  },
  {
    "url": "assets/js/12.66d6c725.js",
    "revision": "11006222fafd732587cd15ab7995123c"
  },
  {
    "url": "assets/js/13.fcf6f502.js",
    "revision": "df39898b26a5cfa391d3fda964c7e692"
  },
  {
    "url": "assets/js/14.6bd3240d.js",
    "revision": "ae95e5ac355e2cb5a43776a7f7c0d284"
  },
  {
    "url": "assets/js/15.d2fbac95.js",
    "revision": "2c22de2bc86be9fde8c4a3098d53b899"
  },
  {
    "url": "assets/js/16.cbee0857.js",
    "revision": "e3abcf74f866229cc1c03eccb2fdfa3f"
  },
  {
    "url": "assets/js/17.70dbff41.js",
    "revision": "bbbd31e1af11386ab59392cca26844c1"
  },
  {
    "url": "assets/js/18.fcb198d8.js",
    "revision": "69f8b77580a48bd0356bc039bb56a0e1"
  },
  {
    "url": "assets/js/19.da602ab3.js",
    "revision": "563115f76f2751b52aa51a99231e024a"
  },
  {
    "url": "assets/js/2.bcf63de6.js",
    "revision": "5380cc40378e71b452d96f4e40b48630"
  },
  {
    "url": "assets/js/20.a6878e4d.js",
    "revision": "d122a92c99e2a55da82b47b3d3aa1eac"
  },
  {
    "url": "assets/js/21.eaa7e962.js",
    "revision": "a19ea37b402bbba192ba86c6679de664"
  },
  {
    "url": "assets/js/22.08aa7118.js",
    "revision": "91a069e6710fefb3fe2be7bd1051cea5"
  },
  {
    "url": "assets/js/23.3b3b8dca.js",
    "revision": "5cd5cefa5593d5e615fd0a91bd2718c7"
  },
  {
    "url": "assets/js/24.e5be77e7.js",
    "revision": "3435a961e19f798eaf2538f070a0afaf"
  },
  {
    "url": "assets/js/25.91afaf1b.js",
    "revision": "2f2281f40f57417f8cba414cb3e6dea7"
  },
  {
    "url": "assets/js/26.93e34940.js",
    "revision": "7152ff2669fe67ac8ab49447309301c0"
  },
  {
    "url": "assets/js/27.9f259237.js",
    "revision": "0dece6a1042a2188b8fb0a4a0f6ff772"
  },
  {
    "url": "assets/js/28.ea1cecc6.js",
    "revision": "1a4b065d5e57571ddb616ba3081aa6ca"
  },
  {
    "url": "assets/js/29.a1baa42a.js",
    "revision": "1335bf25fdcb386ac8e8532642e3f267"
  },
  {
    "url": "assets/js/3.a206698a.js",
    "revision": "5577addfbece73194eb4a28c35200b0d"
  },
  {
    "url": "assets/js/30.118ee733.js",
    "revision": "84f1d78ef7d178ac4f8d49b8faeb8377"
  },
  {
    "url": "assets/js/31.eaf6168e.js",
    "revision": "2daae3967354c152a7167e854047addd"
  },
  {
    "url": "assets/js/32.b8b819da.js",
    "revision": "0b5ef7e80461db7ec6f528903a230877"
  },
  {
    "url": "assets/js/33.76762ebc.js",
    "revision": "86f372e39db24b4e556ba855101bcc02"
  },
  {
    "url": "assets/js/34.1c88f710.js",
    "revision": "a547185f7fcdee7587a2e995624dae2d"
  },
  {
    "url": "assets/js/35.6d815cc7.js",
    "revision": "75283272ce34115f9836adf309f8c650"
  },
  {
    "url": "assets/js/36.1a85445d.js",
    "revision": "2ec6037ebb26497587551e2c735c3832"
  },
  {
    "url": "assets/js/37.6df10841.js",
    "revision": "cb315c7c29c86e66f32c7e0a2a47a3c3"
  },
  {
    "url": "assets/js/38.58b42a83.js",
    "revision": "21bfc79d0d2ae8354cdf6cb141c5cc2a"
  },
  {
    "url": "assets/js/39.e1d66473.js",
    "revision": "54098604db8b906889463029a853dfea"
  },
  {
    "url": "assets/js/4.5c2035d3.js",
    "revision": "54d8573c73a6541a5d5cd4ed040be58e"
  },
  {
    "url": "assets/js/40.7a617467.js",
    "revision": "51c149c9437040aa40c3b06b29b02020"
  },
  {
    "url": "assets/js/41.7ef7dae4.js",
    "revision": "332f1ef4bf5305416c32a4985ada1025"
  },
  {
    "url": "assets/js/42.c8783bbe.js",
    "revision": "f711d1860af02ed7796da125316607c2"
  },
  {
    "url": "assets/js/43.c37fe773.js",
    "revision": "86b75a797b10b231c21e010bf36283b0"
  },
  {
    "url": "assets/js/44.d4b013fe.js",
    "revision": "3db7be1284d3f1166f2cefcf1f69fb98"
  },
  {
    "url": "assets/js/45.8150200d.js",
    "revision": "9cd814e4370dca1d781dc1b22e10a075"
  },
  {
    "url": "assets/js/46.fc9a2190.js",
    "revision": "3d8adc15d287aeb008935a7937013be9"
  },
  {
    "url": "assets/js/47.4487a72f.js",
    "revision": "675697be9f1fab0391e1436dd8760b9d"
  },
  {
    "url": "assets/js/48.e39375e0.js",
    "revision": "0e995b2542617de78ae9d8034d37899e"
  },
  {
    "url": "assets/js/49.e6ccd882.js",
    "revision": "b97484471f667e5fcb2ed3737e747848"
  },
  {
    "url": "assets/js/5.5d59f9d3.js",
    "revision": "495d344b41bb3829d2112595248376bb"
  },
  {
    "url": "assets/js/50.0a0ff47d.js",
    "revision": "df22a7143b14e560d5d054a966a31a9f"
  },
  {
    "url": "assets/js/6.a70ade03.js",
    "revision": "234ee09c2c7462a2c22cc9a20a2ef5b2"
  },
  {
    "url": "assets/js/7.98568b7a.js",
    "revision": "249239ede0737541cf4e0942fcb233b6"
  },
  {
    "url": "assets/js/8.b42e4b75.js",
    "revision": "665da324b199f064314d2d28ea064a8a"
  },
  {
    "url": "assets/js/9.2c74177a.js",
    "revision": "2102f7c4297885dce931285e5954a54a"
  },
  {
    "url": "assets/js/app.edc09538.js",
    "revision": "532fadd6bb78192737ceda081425dc02"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "707bd1b584261d191b979a732180e698"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "6b8e44804c05a36e0c831fbda21f9be9"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "29d45f62a7da9e43fdf950016a423abb"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "a66cdc11e18a385ed521d6babd9d43ee"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "82ce019b0356132b0fbdb283485de938"
  },
  {
    "url": "assignments/features.html",
    "revision": "f754d755ea482334d9974c0d7a7acc87"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "e4dd8e733c8462e05b4e58c5acf6a403"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "67e6b1ec6d52a67571c08f99325edaa9"
  },
  {
    "url": "assignments/identity.html",
    "revision": "2a03914e08fa19ac4c25051a2a002a50"
  },
  {
    "url": "assignments/index.html",
    "revision": "60a5f83f8355d7fdeba4057d1e29b696"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "e4f9ea3db44142b4ee4c4e975edd1319"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "93e3422ed9789c91b8c6962596b0fd41"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "58836afe310b55dc2f4c68dbfbd25037"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "0f87da141d3288fe70977dc30ff1759d"
  },
  {
    "url": "assignments/personas.html",
    "revision": "25a572141ef9185ae80690f68c078c34"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "f25f4f39522f8e8bfc29675d6ea7de67"
  },
  {
    "url": "assignments/poc.html",
    "revision": "2c7303128c07a58054ee3c6210b2110f"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "f8af7a0355020ae6e8d9fec092c970f8"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "5fe15896e5d004a5d996b555383f7d23"
  },
  {
    "url": "assignments/responses.html",
    "revision": "d52fce891b31f911234633d20feab775"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "be9a99ce72114658418e8cf0445c2cac"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "eb443eca610f4de7805a8d098bce17a2"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "ac1119dc830ea687502ae378fe133620"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "d674f06b1f2370754a3a2a06e6151a29"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "dd8de00d08ace1f9f309ec1ffaf5ffb4"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "a251b30ec702ecd896c805a470aec2f0"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "aaccfdca5a76e213a180c4ddd3bad2db"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "6d53a4b7340fd5eeec3fde00f7ebf70d"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "a38c518f4ac2ba60285a63d0f82a7548"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "33d3d951adb85a9c43c4a570e1c0c084"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "103da290b2853574c6fc7fe8ccef1175"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "111ccf0719a01b0ce81d2f408ea59f0a"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "d5ad192fd33812fe58ed6000c751f897"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "1c9a28bd4da342c5336ac5705bdc9534"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "0a55095f3ae5948126a69fb5d4c68781"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "fa30ed2c2da04c4e1f48276ffc3b037c"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "0940067c5f7227b3f2485b0fbf385a2a"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "a67d7c0e5d25f194eefbf43b38013159"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "40f65c705775fbbd388e295297bc2ac8"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "e3a7d061078c85014e24d70dda5c63be"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "5f72766bc9d73440f88b95f4e0d3c476"
  },
  {
    "url": "overview/contacts.html",
    "revision": "40c2873950702368d34e41d6ffa7d67d"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "e993945b2f6447d52ace243d8eb41f3d"
  },
  {
    "url": "overview/index.html",
    "revision": "d5dd7d54f59cb5ab405b05f8f94769cb"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
