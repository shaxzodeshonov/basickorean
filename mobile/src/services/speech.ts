import * as Speech from 'expo-speech';
import { Alert, Linking, Platform } from 'react-native';

// expo-speech on Android builds `new Locale(language)`, which only understands a bare language code.
const KOREAN = Platform.OS === 'android' ? 'ko' : 'ko-KR';

let voiceCheck: Promise<boolean> | null = null;
let warned = false;

function checkKoreanVoice(): Promise<boolean> {
  if (!voiceCheck) {
    voiceCheck = Speech.getAvailableVoicesAsync()
      // Let the engine pick its default Korean voice (explicit "enhanced" voices are often network-only).
      .then((voices) => voices.some((v) => v.language.toLowerCase().startsWith('ko')))
      .catch(() => true); // Unknown: just try to speak.
  }
  return voiceCheck;
}

export function warmUpSpeech() {
  checkKoreanVoice();
}

function openVoiceInstaller() {
  if (Platform.OS !== 'android') return;
  Linking.sendIntent('android.speech.tts.engine.INSTALL_TTS_DATA').catch(() =>
    Linking.sendIntent('com.android.settings.TTS_SETTINGS').catch(() => {})
  );
}

function warnMissingVoice() {
  if (warned) return;
  warned = true;
  Alert.alert(
    'Koreyscha ovoz topilmadi',
    "Talaffuzni eshitish uchun telefon sozlamalarida koreys tili ovozini (Text-to-speech) o'rnating.",
    [
      { text: 'Keyinroq', style: 'cancel' },
      { text: "O'rnatish", onPress: openVoiceInstaller },
    ]
  );
}

/** Speaks Korean text aloud. `rate` follows the website (0.85 normal, 0.65 slow). */
export async function speakKorean(text: string, rate = 0.85) {
  if (!text) return;
  const hasKorean = await checkKoreanVoice();
  if (!hasKorean) {
    warnMissingVoice();
    voiceCheck = null; // Re-check next time in case the user installs it.
  }
  Speech.stop();
  Speech.speak(text, {
    language: KOREAN,
    rate,
    onError: () => warnMissingVoice(),
  });
}

export function stopSpeech() {
  Speech.stop();
}
