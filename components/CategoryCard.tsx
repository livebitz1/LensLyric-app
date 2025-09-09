import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from "../constants/Colors";

interface CategoryCardProps {
  name: string;
  iconName: keyof typeof FontAwesome.glyphMap; // Changed to iconName with FontAwesome type
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <View style={styles.categoryIconBackground}>
        <FontAwesome name={iconName} size={28} color={Colors.light.primaryText} />
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIconBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.primaryBackground, // Changed to white background
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  categoryIcon: {
    fontSize: 28,
    color: Colors.light.primaryText, // Changed to black icon color
  },
  categoryName: {
    fontSize: 14,
    color: Colors.light.primaryText,
  },
});

export default CategoryCard;
