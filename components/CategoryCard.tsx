import * as LucideIcons from "lucide-react-native";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from "../constants/Colors";

interface CategoryCardProps {
  name: string;
  iconName: keyof typeof LucideIcons;
  onPress: () => void;
  currentColors: typeof Colors.light;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, iconName, onPress, currentColors }) => {
  const IconComponent = LucideIcons[iconName];

  if (!IconComponent) {
    return null; // Or render a placeholder/error icon
  }

  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <View style={[styles.categoryIconBackground, { backgroundColor: "#000000", borderColor: "#000000" }]}>
        <IconComponent size={28} color={"#FFFFFF"} />
      </View>
      <Text style={[styles.categoryName, { color: "#000000" }]}>{name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
  },
});

export default CategoryCard;
