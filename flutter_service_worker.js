'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e89faded9ca23dabd65ad4850b3a1ca5",
"assets/AssetManifest.bin.json": "2cf8e0827f38d87b03391fb14d4cda6f",
"assets/AssetManifest.json": "9025d00150ce3936d4f8dcedac993a5a",
"assets/assets/anime_images/All_Might.png": "cc2726e3f00711bb1944bae944bc28df",
"assets/assets/anime_images/Eren_Yeager.png": "0c8a4a173835b1071e10929a84ce8adf",
"assets/assets/anime_images/Goku.png": "160956e9d5fa56fe37a78fda849859e7",
"assets/assets/anime_images/Ichigo_Kurosaki.png": "2093e1aeaef2b0a7bd0f2726c277b058",
"assets/assets/anime_images/Izuku_Midoriya.png": "24708510ee655344f08e1db9043d46dd",
"assets/assets/anime_images/Light_Yagami.png": "59e11d5bc8d7e57b6faf6dceb7830799",
"assets/assets/anime_images/Mikasa_Ackerman.png": "c095a3dbb4f9aeab2ad3124d120a6d55",
"assets/assets/anime_images/Monkey_D_Luffy.png": "9c6b6e2dee379e42967d30d72ad02e47",
"assets/assets/anime_images/Naruto_Uzumaki.png": "fe5365a63f781ebcf07d92aa6e670af6",
"assets/assets/anime_images/Nezuko_Kamado.png": "91f91eb37a584b0115da8caf64037213",
"assets/assets/anime_images/Sasuke_Uchiha.png": "e256c799eb3cf66464a2afadcfaf0a99",
"assets/assets/anime_images/Tanjiro_Kamado.png": "02577b03d2b046a737c9584c93294dd2",
"assets/assets/anime_images/Vegeta.png": "dfcb23c394de5cf6f8c2daa0f8911406",
"assets/assets/anime_images/Zoro_Roronoa.png": "ed7ed6e8a3c1ff4a1a4420d27a7e0653",
"assets/assets/audio/adventure_of_a_lifetime.mp3": "4520b0a81891adc723031762ad8360b8",
"assets/assets/audio/arcade.mp3": "fb96aa4ee7086c4d4e8f0e53d95c23cf",
"assets/assets/audio/atlantis.mp3": "cca42fabba5faee56d75f63065e5a5d0",
"assets/assets/audio/blessings.mp3": "af9979ffdd99ddc2a4d36dbda2d5cd9f",
"assets/assets/audio/budapest.mp3": "25c327d679036f24e9f71cb6964edd1d",
"assets/assets/audio/castle_on_the_hill.mp3": "3b155f7ffd5732fb1f52095ed8f81f77",
"assets/assets/audio/clocks.mp3": "4f51cb4c795ad472de6b9cab457ae7e4",
"assets/assets/audio/crazy.mp3": "92181381d0291e7381aa9f4ec2190bae",
"assets/assets/audio/dirty_paws.mp3": "d8193fd9f8ceaa2d4276f164691f6786",
"assets/assets/audio/everything_i_wanted.mp3": "beae5653d3a8d6e2b089e7eea850d3df",
"assets/assets/audio/galway_girl.mp3": "cc0bb7d1d269ba33a45b76e1413de727",
"assets/assets/audio/glorious.mp3": "06890bf71106aacc5d73db917c228313",
"assets/assets/audio/good_to_be.mp3": "cd648abbf07d24540a348b2c6bb39f79",
"assets/assets/audio/got_it_in_you.mp3": "ebea5d2d7da99ab5ac71a5b87c9846b8",
"assets/assets/audio/high_hopes.mp3": "daba5901c0e2cd3774a32c149db002c3",
"assets/assets/audio/hold_on.mp3": "6a8966af06e5064a13c78a1b00471d18",
"assets/assets/audio/its_ok.mp3": "e98e4fe252e17909f1e1b778c9f35736",
"assets/assets/audio/it_aint_me.mp3": "2a720d8b98923cb1a7e1e210024eed05",
"assets/assets/audio/me_and_the_devil.mp3": "094c7e4a1a91341de2d71494ac39a77d",
"assets/assets/audio/no_angels.mp3": "9f2e28333256740575fafcae7403e279",
"assets/assets/audio/payphone.mp3": "e23b8f02bcc25b51a7ed695e152fee33",
"assets/assets/audio/pompeii.mp3": "fe24f607d44d55909e3c7a619ef2c4cd",
"assets/assets/audio/send_them_off.mp3": "d8d743c53a14f80f68512ab0289aa18e",
"assets/assets/audio/set_fire_to_the_rain.mp3": "3c809ce13f2be4d9c66a8c188a8bc3b9",
"assets/assets/audio/sfx/break.wav": "9c9970396d963ced67fe9e02a8f8f288",
"assets/assets/audio/sfx/match_win.wav": "83cd2c74bcdf5cec938558afabe43ee4",
"assets/assets/audio/sfx/set_win.wav": "bce8940b2920df1db8d68442fb2205c4",
"assets/assets/audio/sfx/tick.wav": "8289c2dd30bf273b79829f6023e45e2b",
"assets/assets/audio/sfx/timeout.wav": "46bfbc62f2448a750e0dc881668faf51",
"assets/assets/audio/shots.mp3": "386459f80beb9514153154327982da72",
"assets/assets/audio/stereo_hearts.mp3": "01fcafb1a6d014b785bbc1274ebcee55",
"assets/assets/audio/take_yours_ill_take_mine.mp3": "11e94a0f54b99e2fb66a942505e9b4ef",
"assets/assets/audio/these_days.mp3": "50a7ece77149c617ef633b5de7a0976e",
"assets/assets/audio/this_is_the_life.mp3": "4b4f753c971de64c1cb16e66db6b2e86",
"assets/assets/audio/unstoppable.mp3": "9e9e5ad75ada927d371a9a1a0d23d65f",
"assets/assets/audio/whatever_it_takes.mp3": "3284f05260c5c832769b065f13aa8b93",
"assets/assets/audio/young_and_beautiful.mp3": "1d1a893d20a59ff981916d4251917e83",
"assets/assets/countries_images/af.png": "86bca0dce96ed8046bd82bb974dae355",
"assets/assets/countries_images/al.png": "00e3ce56d521ab82d4282af49f64f6eb",
"assets/assets/countries_images/alg.png": "da1d9d5c1438924b04402938fc6e91c6",
"assets/assets/countries_images/and.png": "ceed3cb4d329cd3e70a812724c27a2f7",
"assets/assets/countries_images/ang.png": "203448680eee3e2fca1231660f12536d",
"assets/assets/countries_images/arg.png": "8738df87f2635122ee93cc4afb45d6bb",
"assets/assets/countries_images/arm.png": "555e1a7ff5d29041894105f3110844dc",
"assets/assets/countries_images/au.png": "934c0639c5d4da0797eb1ab07cb39332",
"assets/assets/countries_images/aus.png": "43815e299429c8e3e5e9a1dd29c0f05a",
"assets/assets/countries_images/aze.png": "533292c6b5fb330ce04a58ad16438b38",
"assets/assets/countries_images/bah.png": "f1ec5b1eed3fe6b9aa34b2698a5acaf0",
"assets/assets/countries_images/bang.png": "16a903c4e807e9cc39a5d37e0fa5d496",
"assets/assets/countries_images/bel.png": "4a9e2462eca0bd8f36625d53ea2f9e24",
"assets/assets/countries_images/belg.png": "7c919046f1ee543505ad652615ac9527",
"assets/assets/countries_images/bol.png": "de19d17bbc7151b532d3473bbc2f0262",
"assets/assets/countries_images/bos.png": "cb81f616d9875bd781b9a3db1134602a",
"assets/assets/countries_images/br.png": "a13bb4a6277474203043513f6d53593e",
"assets/assets/countries_images/bul.png": "f0acc70c77195f144d05a5b3270225a2",
"assets/assets/countries_images/bur.png": "f596e6c62f30e2b154ebf12e7b8f8ce7",
"assets/assets/countries_images/ca.png": "5e92736fe3a2e34e1248e11d94d565e7",
"assets/assets/countries_images/ch.png": "71877a0ec5a4a578b7bcbb51a4b43625",
"assets/assets/countries_images/chi.png": "b121648a2c60f4668e7b3f6f9fa89c97",
"assets/assets/countries_images/colo.png": "383ef61ac136c29b1af09966a2f1eeaa",
"assets/assets/countries_images/cro.png": "608da2f7a9a2380fa7fb0a5bd4b63870",
"assets/assets/countries_images/cz.png": "54ae7a6a31b2304b79ad496d1531dda4",
"assets/assets/countries_images/de.png": "480478f0d48dc4ff46bc5ca7450fc4a2",
"assets/assets/countries_images/ecu.png": "7656fd99baec4615021042fe0cca99ad",
"assets/assets/countries_images/fr.png": "afe97a8cb92f5cafe7c2f0039c0cb513",
"assets/assets/countries_images/ger.png": "a81bc2841081ec197877c466e0a48d95",
"assets/assets/countries_images/gr.png": "d6c9b8be5dd7bd49f882fac833e3220b",
"assets/assets/countries_images/hun.png": "912625a30153854ba8563ab675c3e67e",
"assets/assets/countries_images/in.png": "08f43d9440d3b0710be884449359cda5",
"assets/assets/countries_images/ind.png": "1c442053507c208df57b11533b5f5994",
"assets/assets/countries_images/iraq.png": "7fa409235d670a4a161689a87a0f4b04",
"assets/assets/countries_images/it.png": "b02a143494e3ac4e3df4a6f9f6cdb34b",
"assets/assets/countries_images/jor.png": "96c46717c963774907fa2235c3dd1353",
"assets/assets/countries_images/jp.png": "803ba89c65bf002fbc9e7fc698aeaadf",
"assets/assets/countries_images/ken.png": "e91e911df450de8d84f143a128f67149",
"assets/assets/countries_images/ksa.png": "48172c0c5b76a27c2943852ed155537d",
"assets/assets/countries_images/kuw.png": "636eae6b972fb0a3dabb33948f8388c3",
"assets/assets/countries_images/me.png": "0a618ee22537fe83defde2e098acf8af",
"assets/assets/countries_images/mo.png": "3e2acb7405a2d0aba78016a86dca65da",
"assets/assets/countries_images/net.png": "3bcbb40d8f3f2d09ee519fa47cec159d",
"assets/assets/countries_images/nig.png": "1ed29542d7f6003672a06d8c2ad8fd67",
"assets/assets/countries_images/nk.png": "59f9790a3dec8ce3e48076ce5e82bd63",
"assets/assets/countries_images/nr.png": "6f4b2ffbe4d1e7fae9afb75eb6fcae6a",
"assets/assets/countries_images/nz.png": "cf71cc314dfc62f8af08a5562d92e17e",
"assets/assets/countries_images/per.png": "fe59852614c44b9c853c8427f6d16b18",
"assets/assets/countries_images/Poland.png": "84b1e72ba1e2a0c893a97a08b746ef99",
"assets/assets/countries_images/pr.png": "327de8c88734d187cd17032b8e9e1474",
"assets/assets/countries_images/qa.png": "41b1e1e92377077c57143fbfdc609e70",
"assets/assets/countries_images/rom.png": "e9a3b2de5729c61ffe6b74b7a4c3a8e8",
"assets/assets/countries_images/ru.png": "ecd7c61b9b45bf85ae2d767b9c012581",
"assets/assets/countries_images/sa.png": "ba187e0e4ae98efd6ad76508f9cc005c",
"assets/assets/countries_images/ser.png": "f55019a8b9d8606b0592bcb2d39a8fb0",
"assets/assets/countries_images/sk.png": "9c91a1e22da35501e57444127a84e64a",
"assets/assets/countries_images/sp.png": "cccb53b72091e26eb58c05cc8174d27e",
"assets/assets/countries_images/sw.png": "5fc6a9a86dd371fd5e414ddeafe38f3e",
"assets/assets/countries_images/swe.png": "caebb614f1d597ef8f3fffa0bb96d9e9",
"assets/assets/countries_images/thi.png": "992ec887a6bb10e09e5a20d8d46be02f",
"assets/assets/countries_images/tu.png": "680bdd2ad6f0c744a8930258d658d741",
"assets/assets/countries_images/tun.png": "c8d3dede8fff74e47e4e28c821638fde",
"assets/assets/countries_images/UAE.png": "beb3db50161fe5ced88f73cadb8ee193",
"assets/assets/countries_images/uk.png": "f51ce772603b7e296ac9f7c70a9a2c02",
"assets/assets/countries_images/ukr.png": "bc54a81f0ce6f189244de85fce0c567f",
"assets/assets/countries_images/uru.png": "c4487b94cac6d6a0114a1b1e023f5025",
"assets/assets/countries_images/us.png": "a83f3d043f5c48dbfdd151fd348585e1",
"assets/assets/countries_images/ven.png": "721817e30b2dfaaf8d3310a1de1de95f",
"assets/assets/countries_images/vit.png": "ee606778a569fe11b454d77a3a7761b6",
"assets/assets/fonts/Tajawal-Bold.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Tajawal-Regular.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/anime.png": "fe44d073781d9674605a64dccde01148",
"assets/assets/images/champions_league.png": "26b015b5198bc66e351626ad74dffe70",
"assets/assets/images/countries.png": "0ef30f220a6c8fcafadaae34920e3214",
"assets/assets/images/english_premier.png": "50917266dec7b7f826f745f56fb13be2",
"assets/assets/images/games.png": "04dc7e0fa069aa5d4edb3dfde8c6720c",
"assets/assets/images/general.png": "64617464cc2cce46ac1317323165bb6a",
"assets/assets/images/guess_the_goal.png": "0b8725e41763e8a6e2f2295c3db8f7bd",
"assets/assets/images/history.png": "dc9de643ff2d9e516ebb025e1760bbc5",
"assets/assets/images/islamic.png": "0cf5219cb2841888908d0fbb9a367a4b",
"assets/assets/images/music.png": "55c5cea19731608d338a432d79e5ba43",
"assets/assets/images/player_path.png": "7a641df17725d0b6071f6b822645f8c7",
"assets/assets/images/quotes.png": "3d4131151ee59cdcc5c2cd249f857321",
"assets/assets/images/science.png": "9e745799542ec2cb9aeb6f1b8c557119",
"assets/assets/images/series.png": "59f9c1790558f8eb142f44999507e6d6",
"assets/assets/images/words.png": "287bff249553914f393b967c728c90b5",
"assets/assets/player_images/amad.png": "0b74c78dcc78ec92482f6e28fa2fc8a9",
"assets/assets/player_images/angel.png": "679128e816b18846bee023daab103cd9",
"assets/assets/player_images/auba.png": "adc76b5aa15499a79a2aa3b7d61ff8c7",
"assets/assets/player_images/balotelli.png": "6a1d17e7c16dadcdad1c495a2435e9f0",
"assets/assets/player_images/bastoni.png": "ec43c9b82100ab52813eb33c5c42fcd4",
"assets/assets/player_images/cabaye.png": "8c31306ac80dcecb4e742844a1a8ce58",
"assets/assets/player_images/coutinho.png": "f80724968036205eaf4541d89059044e",
"assets/assets/player_images/cuadrado.png": "ccab75836662eabb0a3241a9245e3c28",
"assets/assets/player_images/darmian.png": "6ca062088f32339cbc505da151540786",
"assets/assets/player_images/depay.png": "054186e9b507a3338ace6ec910a99b22",
"assets/assets/player_images/draxler.png": "7e201add7192b6ac988cf4a8d0e36524",
"assets/assets/player_images/dzeko.png": "5ee2b7a33c5a149efe6cb165ff22285b",
"assets/assets/player_images/etoo.png": "87ab708d1df377157f00dc2c588c89b9",
"assets/assets/player_images/fabregas.png": "87e02c4ee33e4e866b5838668c46e698",
"assets/assets/player_images/falcao.png": "3263022b5b1936344b0a247a279e8e1c",
"assets/assets/player_images/hazard.png": "e6f0d00c21f1fd6ad35e9d88a73c6a74",
"assets/assets/player_images/higuain.png": "07685eecbdcf987fc55fe14607403a21",
"assets/assets/player_images/james.png": "19cdcc7c246ea6fdfc68a87e18b62fbe",
"assets/assets/player_images/jovetic.png": "f8ee0575c06cf4539dcccc8df852c503",
"assets/assets/player_images/kvara.png": "22a5a14892105cabc0092b21d9682c26",
"assets/assets/player_images/lenglet.png": "2914d1d0588f1fbe805d431fbe63d41b",
"assets/assets/player_images/magalhaes.png": "2082f521061a7e492e25927e618d7205",
"assets/assets/player_images/matic.png": "4ad47389cbb8c835af974f3a9c2eb6cf",
"assets/assets/player_images/mkhitaryan.png": "ac246fd61ec87360280a4f340ec5f54e",
"assets/assets/player_images/morata.png": "8a793336cfa794b27ba48f710e700915",
"assets/assets/player_images/odoi.png": "90d7d9542ea7f4dec1fa742c3bd560b5",
"assets/assets/player_images/onana.png": "289f35ddd2a517b37d3f97652102abb0",
"assets/assets/player_images/perisic.png": "3ea430d5bec36a4bd0382cc876540dbf",
"assets/assets/player_images/renato.png": "9429975dff6f3d78f082a5e91319aa86",
"assets/assets/player_images/sanchez.png": "3b95d27c38b81bd2ae583797dd40e8bd",
"assets/assets/player_images/sarabia.png": "99e6159ae1e843a44e29bc7c8f9e330d",
"assets/assets/player_images/tavares.png": "dba8ccd9653f4132abab3a3cc5d72efa",
"assets/assets/player_images/tevez.png": "b868378a53653194a7f29de12e584f28",
"assets/assets/player_images/vidal.png": "5c720286407cefe0ab16f0a09ee6b276",
"assets/assets/player_images/white.png": "c5b8e38c74ff00e2440a6eae457038da",
"assets/assets/questions/anime.json": "dd7b59ff1ebb189e78c1b7289527fab2",
"assets/assets/questions/champions_league.json": "1945fd7eae036d81e49f00db9df88fc4",
"assets/assets/questions/countries.json": "8dc3ecc3a65369bddeca62bc2c255701",
"assets/assets/questions/english_language.json": "d751713988987e9331980363e24189ce",
"assets/assets/questions/english_premier.json": "54aca5ced624b70aa7e8c71aaf246ce7",
"assets/assets/questions/games.json": "91e2ec6e53a0d076ff0344234fc46d39",
"assets/assets/questions/general.json": "719798b86981a59fe7d6f180ba72ecde",
"assets/assets/questions/guess_the_goal.json": "0544023587d377aa5c2f1478abb623d6",
"assets/assets/questions/history.json": "b7f13dbea412418865c7e146cf750cc8",
"assets/assets/questions/intelligence.json": "d751713988987e9331980363e24189ce",
"assets/assets/questions/islamic.json": "c425c53365b2a676a350fe33d3d4ef75",
"assets/assets/questions/missing_player.json": "d751713988987e9331980363e24189ce",
"assets/assets/questions/music.json": "ca0b2a6abafa7dbb549e12037bf45135",
"assets/assets/questions/player_path.json": "d2cae15a139dd7ad857659fcd94b074e",
"assets/assets/questions/puzzles.json": "d751713988987e9331980363e24189ce",
"assets/assets/questions/quotes.json": "73454305bf24b7d8642d9f50856d2921",
"assets/assets/questions/science.json": "d751713988987e9331980363e24189ce",
"assets/assets/questions/series.json": "51c84a100b115421c500221f553664c8",
"assets/assets/questions/sports.json": "d751713988987e9331980363e24189ce",
"assets/assets/questions/words.json": "d751713988987e9331980363e24189ce",
"assets/FontManifest.json": "32765036925fab5389d06b2c17dd6b0e",
"assets/fonts/MaterialIcons-Regular.otf": "80ef10a194431c815256c241c1b7f1f3",
"assets/NOTICES": "acc9517383eb1bceea5d3e576bf8a786",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "499531daab7b9475e3a5187181098e44",
"/": "499531daab7b9475e3a5187181098e44",
"main.dart.js": "02c3d60441e50f8f6a20c9b1b689647c",
"manifest.json": "241beacd1f14c76e1c15cefe376d2089",
"version.json": "bd1ed2565c3536cf912164c96bc49de2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
