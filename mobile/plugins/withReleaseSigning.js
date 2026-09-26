/**
 * Signs release builds (APK + AAB) with an upload keystore when these Gradle
 * properties are set (keep them in ~/.gradle/gradle.properties, never in git):
 *
 *   BK_UPLOAD_STORE_FILE=C:/path/to/upload.jks
 *   BK_UPLOAD_STORE_PASSWORD=...
 *   BK_UPLOAD_KEY_ALIAS=upload
 *   BK_UPLOAD_KEY_PASSWORD=...
 *
 * Without them, release builds fall back to the debug key (installable, not uploadable to Play).
 */
const { withAppBuildGradle } = require('expo/config-plugins');

const MARKER = '// bk-release-signing';

const RELEASE_SIGNING_CONFIG = `
        ${MARKER}
        release {
            if (project.hasProperty('BK_UPLOAD_STORE_FILE')) {
                storeFile file(BK_UPLOAD_STORE_FILE)
                storePassword BK_UPLOAD_STORE_PASSWORD
                keyAlias BK_UPLOAD_KEY_ALIAS
                keyPassword BK_UPLOAD_KEY_PASSWORD
            }
        }`;

module.exports = function withReleaseSigning(config) {
  return withAppBuildGradle(config, (cfg) => {
    let gradle = cfg.modResults.contents;
    if (gradle.includes(MARKER)) return cfg;

    gradle = gradle.replace(/signingConfigs\s*\{/, (m) => m + RELEASE_SIGNING_CONFIG);

    // Point the release build type at the upload key when it is configured.
    gradle = gradle.replace(
      /(release\s*\{[^{}]*?)signingConfig\s+signingConfigs\.debug/,
      "$1signingConfig project.hasProperty('BK_UPLOAD_STORE_FILE') ? signingConfigs.release : signingConfigs.debug"
    );

    if (!gradle.includes('signingConfigs.release : signingConfigs.debug')) {
      throw new Error('withReleaseSigning: could not find release signingConfig in app/build.gradle');
    }
    cfg.modResults.contents = gradle;
    return cfg;
  });
};
