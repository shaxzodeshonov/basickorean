import Svg, { Circle, Line, Path, Polygon, Polyline, Rect } from 'react-native-svg';

// Same icon set as the website (app.js ICONS).
export type IconName =
  | 'play'
  | 'lock'
  | 'star'
  | 'heart'
  | 'check'
  | 'speaker'
  | 'timer'
  | 'close'
  | 'trash'
  | 'search'
  | 'alert';

interface Props {
  name: IconName;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 20, color = '#18181B' }: Props) {
  const stroke = { stroke: color, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  const thick = { ...stroke, strokeWidth: 2.5 };

  switch (name) {
    case 'play':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polygon points="6 3 20 12 6 21 6 3" fill={color} />
        </Svg>
      );
    case 'lock':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Rect x="3" y="11" width="18" height="11" rx="2" ry="2" {...stroke} />
          <Path d="M7 11V7a5 5 0 0 1 10 0v4" {...stroke} />
        </Svg>
      );
    case 'star':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            {...stroke}
          />
        </Svg>
      );
    case 'heart':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill={color}
          />
        </Svg>
      );
    case 'check':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polyline points="20 6 9 17 4 12" {...thick} />
        </Svg>
      );
    case 'speaker':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" {...stroke} />
          <Path d="M15.54 8.46a5 5 0 0 1 0 7.07" {...stroke} />
          <Path d="M19.07 4.93a10 10 0 0 1 0 14.14" {...stroke} />
        </Svg>
      );
    case 'timer':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Circle cx="12" cy="12" r="10" {...stroke} />
          <Polyline points="12 6 12 12 8 14" {...stroke} />
        </Svg>
      );
    case 'close':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Line x1="18" y1="6" x2="6" y2="18" {...thick} />
          <Line x1="6" y1="6" x2="18" y2="18" {...thick} />
        </Svg>
      );
    case 'trash':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Polyline points="3 6 5 6 21 6" {...stroke} />
          <Path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" {...stroke} />
        </Svg>
      );
    case 'search':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Circle cx="11" cy="11" r="8" {...stroke} />
          <Line x1="21" y1="21" x2="16.65" y2="16.65" {...stroke} />
        </Svg>
      );
    case 'alert':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Circle cx="12" cy="12" r="10" {...stroke} />
          <Line x1="12" y1="8" x2="12" y2="12" {...stroke} />
          <Line x1="12" y1="16" x2="12.01" y2="16" {...stroke} />
        </Svg>
      );
  }
}
