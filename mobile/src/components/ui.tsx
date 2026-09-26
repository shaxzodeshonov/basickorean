import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, font, radius } from '../theme';
import { Icon } from './Icon';

interface MainButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'dark' | 'wrong' | 'heart';
  style?: StyleProp<ViewStyle>;
}

/** The site's .btn-main: pill button with a pressed-down 3D lip. */
export function MainButton({ label, onPress, disabled, variant = 'dark', style }: MainButtonProps) {
  const bg = variant === 'wrong' ? '#DC2626' : variant === 'heart' ? colors.heart : colors.textMain;
  const lip = variant === 'wrong' ? '#991B1B' : variant === 'heart' ? '#B91C1C' : '#09090B';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.main,
        disabled
          ? styles.mainDisabled
          : { backgroundColor: bg, borderBottomColor: lip, borderBottomWidth: pressed ? 2 : 4, marginTop: pressed ? 2 : 0 },
        style,
      ]}
    >
      <Text style={[styles.mainLabel, disabled && { color: colors.textSub }]}>{label}</Text>
    </Pressable>
  );
}

interface AudioButtonProps {
  onPress: () => void;
  size?: 'normal' | 'large';
  slow?: boolean;
  label?: string;
}

/** Round speaker button (.audio-btn-pill). */
export function AudioButton({ onPress, size = 'normal', slow, label = 'Tinglash' }: AudioButtonProps) {
  const dim = size === 'large' ? 60 : 48;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={6}
      style={({ pressed }) => [
        styles.audio,
        { width: dim, height: dim, transform: [{ scale: pressed ? 0.94 : 1 }] },
        slow && styles.audioSlow,
      ]}
    >
      <Icon name={slow ? 'timer' : 'speaker'} size={size === 'large' ? 28 : 22} color={slow ? colors.textMain : '#fff'} />
    </Pressable>
  );
}

export function Badge({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[styles.badge, style]}>
      <Text style={styles.badgeText}>{children}</Text>
    </View>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    minHeight: 52,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainDisabled: { backgroundColor: '#E4E4E7', marginTop: 4 },
  mainLabel: { color: '#fff', fontSize: 16.5, ...font(800) },
  audio: {
    borderRadius: 999,
    backgroundColor: colors.textMain,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioSlow: { backgroundColor: colors.chip, borderWidth: 1.5, borderColor: colors.border },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.segment,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
  },
  badgeText: { fontSize: 11.5, letterSpacing: 0.5, color: colors.textMain, textTransform: 'uppercase', ...font(800) },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 20,
    marginBottom: 18,
  },
});
