import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from "../constants/Colors";

interface BookNowButtonProps {
  onPress: () => void;
  title: string;
  currentColors: typeof Colors.light; // Assuming Colors.light or Colors.dark type
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ onPress, title, currentColors }) => {
  return (
    <TouchableOpacity
      style={[
        styles.secondaryButton,
        { backgroundColor: currentColors.primaryAccent, borderColor: currentColors.primaryAccent },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.secondaryButtonText, { color: currentColors.cardBackground }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  secondaryButton: {
    borderWidth: 1,
    paddingHorizontal: 36,
    paddingVertical: 18,
    borderRadius: 8,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default BookNowButton;
