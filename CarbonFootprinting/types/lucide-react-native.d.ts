// types/lucide-react-native.d.ts
import "lucide-react-native";

declare module "lucide-react-native" {
  // Augment the props to make sure TS accepts 'color'
  export interface LucideProps {
    color?: string;
    size?: number | string;
    strokeWidth?: number;
    absoluteStrokeWidth?: boolean;
  }
}
