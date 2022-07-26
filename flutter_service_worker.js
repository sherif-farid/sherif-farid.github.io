'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/package_config.json": "7d0d8923b8c2855cc64ce5cd9abd1d55",
".dart_tool/package_config_subset": "ade79e22631b331daba5d589683cbb16",
".dart_tool/version": "66270f1829b159202c7a77e2afa62880",
".git/COMMIT_EDITMSG": "9b14d3c923cb903971106eb9be47a792",
".git/config": "5845098f44f7361a140ed80e8f61ac57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7f65bcfd82df2992d8b4367458d1d6b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fdb7d0fd59a3add61cee501c6263960",
".git/logs/refs/heads/master": "5fdb7d0fd59a3add61cee501c6263960",
".git/logs/refs/remotes/origin/master": "596e9652bf019fac3a7dfa7f1dc7b28b",
".git/objects/00/351503383d72f473cf633acc5911a3f95ae994": "57a13c800871e84bfe2c3cb6ca3a9d08",
".git/objects/02/5f2ad8bd80ff8a28e86219252ea4d3a801a0f5": "333f14d950de93b0ffa7397d9e020516",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/10/9056ce549053caf0b3954a0026fb95955b2544": "759d2d2060ea63d17ca0b792e14e1315",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1f/1c699290a77a370c3243c1e8c3ee9d06057533": "a1f80d17d64d9bf2571dadbc07bff756",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2b/17c8dd711084697b9180127ba5bfc8015a0f84": "8e7e21543f4190529f5f81c8c2c3039e",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/5471598f3b056f10c4bb643d79202b19b1055f": "810c2fdb47daef215e06a3bf25888067",
".git/objects/3c/3e4b52f7349d21ca416e967b653e4962329ada": "7c9f7419eadc4757f4f1cbc36049fb34",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/dd8b6c3258f81f471fe20a696e3b5915e36dc9": "7b3ff2953302b9f133e0d12dc1055595",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/12ecf67364135ff6ac7315555b5a377749a8c2": "fb79abf90ff0e3f84e0427c89229a558",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/70/2838528269351986931a6a6f89ef72a18b787d": "4a1454f519d1df1efafa67faf01f0fe2",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/6be57caf8aa7f3325c5c6adbf278757361dda8": "a50debb2b6bedcd3143eabafe55f79c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0c4ee790682b3a63d9dea0d083686482dd5279": "a4ed8aef5f8fd30f76d5d35146581267",
".git/objects/8e/2869e2b09e71c589037e209ee9eadeb8b47c5c": "97cb1ffdfd1feddcefbb354f358e69df",
".git/objects/92/a921a793030596423de0b927185c783244c661": "c6f3da40bf03c5779f59fec0b8f8f70d",
".git/objects/9e/723cf1e8e294747bf06fea535f6096bb7b2840": "2163bbadb3bad822ffdb9f8c61c2ff09",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cc/af8b0aeb12aa12e4ef6ac6253c503bb8350195": "5525f756b1c5285d637c89632eec6435",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/4dce9afe4bfb86b96cb579519435256f63b4bf": "45b0900402f9a4ace01ab818b613b0b0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/7825e65d6ac30a4c32397148b8ee2e7d424083": "b0bb232823824582cbbd391e160ee7ef",
".git/objects/f7/a03e95d7261b4f4bef605b686099ef0dc635db": "311b32aa89e0c25961925ddbf73f2c7d",
".git/objects/fe/4ab0c71d29604c14e97075f9d5ca007543c83d": "1f672758390b2565c0fcd8ec90e56b28",
".git/refs/heads/master": "e60b6d8a454314dc66d8b55f895d342a",
".git/refs/remotes/origin/master": "e60b6d8a454314dc66d8b55f895d342a",
".idea/libraries/Dart_SDK.xml": "1577cf4292f8f769e30ca8280a199541",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "c8ac63a992800982a691a36badcc03cf",
"android/app/src/debug/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/app/src/main/AndroidManifest.xml": "380ceb596b3652ab4147e0aae36010b8",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "a18248a21b23da0aa6f12b97d981d1f5",
"android/app/src/main/res/values-night/styles.xml": "e71d4d49f44112d5dc835ac7a839dbdb",
"android/app/src/profile/AndroidManifest.xml": "f430bd7edebf225c7a4b29e405fed09c",
"android/build.gradle": "0f6e66826cb3f1bd4e48e0ef40054a46",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "229502955d529ae0e02c6ad58236b7a0",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "e384cbe3cfe661947b43dfcbe23b4bbd",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "2b3d4e5d694bffd74ed2d8a77f3b4a29",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/copy_icon.png": "ead646a1559b47d62f89787d4d751182",
"assets/images/delete.png": "d267e74ec16b7335c1d2e1fff0dcb54d",
"assets/images/gb_icon.png": "bfc05dd0511a76974c62d244caef71da",
"assets/images/gc_icon.png": "093595db17283a784d08c73851ddfb9a",
"assets/NOTICES": "17a8f3ab2fa57090b863f28fbb556faf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8596a1910bfff7c4344394d51c5b385b",
"/": "9d4b431a611b414a41c556e480878935",
"ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "d97e70f0e1245fcb7bafbf77290fde08",
"ios/Flutter/Generated.xcconfig": "e7abbf48c8878719193b74c2184c3cce",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "440c34fbb0d290bebc9f05ee681547bd",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "085e3343bee4f742010057a1928295a2",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "a6fb1329af99457b050f36d34b9bfb35",
"main.dart.js": "7276a477501c995b9db8243bf796ab88",
"manifest.json": "423d94e7d509de0105979fcb9399a9d4",
"pubspec.lock": "b3438d8392db8eae161f587db12c6408",
"pubspec.yaml": "5c97cb976348b1f164a6d181fd2275dd",
"README.md": "d9fec75372da6c786d1b533b9e26def0",
"test/widget_test.dart": "95ff94f4eed36f4a403cb72b1ec744ff",
"version.json": "54faf8498b7f8d51e528c0b9da39df0c",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "9d4b431a611b414a41c556e480878935",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "e0f10da35b9e41eee205c76b23f0f835",
"windows/CMakeLists.txt": "5182214bb6e2959aabc06505442d23aa",
"windows/flutter/CMakeLists.txt": "e0f804799e73e21a8f7455f3d7810526",
"windows/flutter/generated_plugins.cmake": "9d9aa3846cae8ac080da713b4f8ed197",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "f3e83cce73b27436e3610a7f1bf4082b",
"windows/runner/flutter_window.cpp": "f853be20595509bef5128dc4eebf8b8a",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "e32754af8da2d4bdeeda9164a3d22694",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "e6f4cf89a9b09cc07835380ee88ad54f",
"windows/runner/Runner.rc": "fd36d01d7dd80f3b6ffb769b96debfca",
"windows/runner/utils.cpp": "931ef80910e7d0fc61010bf731bb4089",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "51d773f28ac8f760edd9003a06a96723",
"windows/runner/win32_window.h": "ca8cb4198d0ab7865e929fba6318d26e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
