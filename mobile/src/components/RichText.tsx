import { Text, type StyleProp, type TextStyle } from 'react-native';
import { font } from '../theme';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
  boldStyle?: StyleProp<TextStyle>;
}

/** Renders lesson text, honoring the <b>…</b> tags used in data.js. */
export function RichText({ children, style, boldStyle }: Props) {
  const parts = children.split(/(<b>.*?<\/b>)/g).filter(Boolean);
  return (
    <Text style={style}>
      {parts.map((part, i) =>
        part.startsWith('<b>') ? (
          <Text key={i} style={[font(800), boldStyle]}>
            {part.slice(3, -4)}
          </Text>
        ) : (
          part.replace(/<\/?[a-z]+>/g, '')
        )
      )}
    </Text>
  );
}
