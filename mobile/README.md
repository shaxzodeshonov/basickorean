# BasicKorean — Android app (React Native / Expo)

Native React Native version of the BasicKorean website in the parent folder. No login: progress
(stars, hearts, completed lessons, free/sequential mode) is stored on the device.

- **Yo'l** – the 20-lesson roadmap with all six exercise types (theory, choice, listening, match,
  syllable builder, letter tracing), hearts, stars and the completion screen
- **Alifbo** – all 40 Hangul letters with filters and pronunciation
- **Lug'at** – 68-word searchable dictionary with pictures and audio
- **Qo'llanma** – course rules, grading, history and culture notes

Pronunciation uses the phone's text-to-speech engine (Korean voice). If it is missing, the app offers
to open the voice installer. Everything else works fully offline.

## Content comes from the website

`../data.js` and `../images/` are the single source of truth. After editing them run:

```bash
npm run sync-content
```

This regenerates `src/content/hangeul.json`, `src/content/images.ts` and `assets/content/`.

## Develop

```bash
npm install
npx expo run:android
```

## Build release APK + AAB

Requirements: JDK 17–21, Android SDK (`ANDROID_HOME`), Node 20+.

```bash
npx expo prebuild -p android --clean
cd android
./gradlew assembleRelease bundleRelease
```

Outputs:

- `android/app/build/outputs/apk/release/app-release.apk` – install directly on a phone
- `android/app/build/outputs/bundle/release/app-release.aab` – upload to Google Play

### Signing

Release builds are signed with the upload key configured in `~/.gradle/gradle.properties`
(see `plugins/withReleaseSigning.js`):

```properties
BK_UPLOAD_STORE_FILE=C:/Users/<you>/.keystores/basickorean-upload.jks
BK_UPLOAD_STORE_PASSWORD=...
BK_UPLOAD_KEY_ALIAS=upload
BK_UPLOAD_KEY_PASSWORD=...
```

Back up the keystore and passwords — Google Play needs the same upload key for every update. Without
these properties, release builds fall back to the debug key (fine for sideloading, not for Play).

Bump `expo.version` and `expo.android.versionCode` in `app.json` before each Play upload.
