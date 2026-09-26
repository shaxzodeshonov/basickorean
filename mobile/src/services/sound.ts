import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';
import * as Haptics from 'expo-haptics';

// Same tones as the website's Web Audio synth, pre-rendered to WAV.
const SOURCES = {
  click: require('../../assets/sfx/click.wav'),
  correct: require('../../assets/sfx/correct.wav'),
  wrong: require('../../assets/sfx/wrong.wav'),
  fanfare: require('../../assets/sfx/fanfare.wav'),
};
type Effect = keyof typeof SOURCES;

const players: Partial<Record<Effect, AudioPlayer>> = {};

export function initSound() {
  setAudioModeAsync({ playsInSilentMode: true, interruptionMode: 'mixWithOthers' }).catch(() => {});
  for (const key of Object.keys(SOURCES) as Effect[]) {
    players[key] = createAudioPlayer(SOURCES[key]);
  }
}

function play(effect: Effect) {
  const player = players[effect];
  if (!player) return;
  try {
    player.seekTo(0);
    player.play();
  } catch {
    // Sound effects are decorative; never let them break the lesson.
  }
}

export const sfx = {
  click: () => play('click'),
  correct: () => {
    play('correct');
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  },
  wrong: () => {
    play('wrong');
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
  },
  fanfare: () => play('fanfare'),
};
