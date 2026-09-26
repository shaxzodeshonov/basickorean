import { Platform, TextStyle } from 'react-native';

export const colors = {
  bgPage: '#FAF9F6',
  surface: '#FFFFFF',
  surfaceHover: '#F4F3EF',
  chip: '#F4F3EF',
  segment: '#EEECE6',
  border: '#E7E5DF',
  borderLight: '#EEECE6',
  textMain: '#18181B',
  textMuted: '#71717A',
  textSub: '#A1A1AA',

  nodeLockedBg: '#ECE8E1',
  nodeLockedIcon: '#78716C',
  nodeCompletedBg: '#059669',
  connector: '#DCD8CF',

  star: '#F59E0B',
  heart: '#EF4444',
  emerald: '#10B981',
  blue: '#2563EB',

  correctBg: '#F0FDF4',
  correctBorder: '#BBF7D0',
  correctText: '#15803D',
  wrongBg: '#FEF2F2',
  wrongBorder: '#FECACA',
  wrongText: '#B91C1C',
  wrongTextLight: '#DC2626',
};

export const radius = { pill: 9999, xl: 20, lg: 16, md: 12, sm: 8 };

// Plus Jakarta Sans is embedded on Android as the "Jakarta" family (see app.json).
// Korean text uses the system Noto Sans CJK font.
const family = Platform.OS === 'android' ? 'Jakarta' : undefined;

export function font(weight: 400 | 500 | 600 | 700 | 800 | 900): TextStyle {
  return { fontFamily: family, fontWeight: String(weight) as TextStyle['fontWeight'] };
}

export function koFont(weight: 700 | 800 | 900 = 900): TextStyle {
  return { fontWeight: String(weight) as TextStyle['fontWeight'] };
}
