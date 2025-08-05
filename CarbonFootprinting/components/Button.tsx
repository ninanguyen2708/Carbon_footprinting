import React from "react";
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps
} from "react-native";
import colors from "@/constants/colors";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const getButtonStyle = () => {
    let buttonStyle: ViewStyle = {};
    
    // Variant styles
    switch (variant) {
      case "primary":
        buttonStyle.backgroundColor = colors.primary;
        break;
      case "secondary":
        buttonStyle.backgroundColor = colors.secondary;
        break;
      case "outline":
        buttonStyle.backgroundColor = "transparent";
        buttonStyle.borderWidth = 1;
        buttonStyle.borderColor = colors.primary;
        break;
      case "danger":
        buttonStyle.backgroundColor = colors.error;
        break;
    }
    
    // Size styles
    switch (size) {
      case "small":
        buttonStyle.paddingVertical = 6;
        buttonStyle.paddingHorizontal = 12;
        break;
      case "medium":
        buttonStyle.paddingVertical = 10;
        buttonStyle.paddingHorizontal = 16;
        break;
      case "large":
        buttonStyle.paddingVertical = 14;
        buttonStyle.paddingHorizontal = 20;
        break;
    }
    
    // Disabled style
    if (disabled || loading) {
      buttonStyle.opacity = 0.6;
    }
    
    return buttonStyle;
  };
  
  const getTextStyle = () => {
    let textStyleObj: TextStyle = {};
    
    // Variant text styles
    switch (variant) {
      case "outline":
        textStyleObj.color = colors.primary;
        break;
      default:
        textStyleObj.color = "#FFFFFF";
    }
    
    // Size text styles
    switch (size) {
      case "small":
        textStyleObj.fontSize = 14;
        break;
      case "medium":
        textStyleObj.fontSize = 16;
        break;
      case "large":
        textStyleObj.fontSize = 18;
        break;
    }
    
    return textStyleObj;
  };
  
  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      testID="button"
      {...rest}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === "outline" ? colors.primary : "#FFFFFF"} 
          size={size === "small" ? "small" : "small"}
        />
      ) : (
        <Text style={[styles.text, getTextStyle(), textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontWeight: "600" as const,
    textAlign: "center",
  },
});