import * as LucideIcons from "lucide-react-native";
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get("window");

interface PhotographerCardProps {
  imageSource: string;
  name: string;
  specialty: string;
  price: string;
  distance: string;
  rating: number;
  onPress: () => void;
  currentColors: typeof Colors.light;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({
  imageSource,
  name,
  specialty,
  price,
  distance,
  rating,
  onPress,
  currentColors,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <TouchableOpacity style={[styles.photographerCard, { backgroundColor: currentColors.cardBackground, shadowColor: currentColors.shadow, borderColor: currentColors.border }]} onPress={onPress}>
      <Image source={{ uri: imageSource }} style={styles.photographerImage} />
      <View style={styles.cardContent}>
        <Text style={[styles.photographerName, { color: currentColors.primaryText }]}>{name}</Text>
        <Text style={[styles.photographerSpecialty, { color: currentColors.secondaryText }]}>{specialty}</Text>
        <View style={styles.cardFooter}>
          <Text style={[styles.price, { color: currentColors.primaryText }]}>{price}</Text>
          <View style={styles.ratingContainer}>
            <LucideIcons.Star size={16} color={currentColors.warning} fill={currentColors.warning} />
            <Text style={[styles.ratingText, { color: currentColors.primaryText }]}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.favoriteButton} onPress={onToggleFavorite}>
        <LucideIcons.Heart size={20} color={isFavorite ? currentColors.error : currentColors.secondaryText} fill={isFavorite ? currentColors.error : "none"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photographerCard: {
    width: width * 0.6,
    maxWidth: 240,
    borderRadius: 12,
    marginRight: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
    borderWidth: 1,
  },
  photographerImage: {
    width: "100%",
    height: 140, // Reduced image height
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 12,
  },
  photographerName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  photographerSpecialty: {
    fontSize: 12,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6, // Adjusted margin top
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4, // Adjusted gap
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: Colors.light.cardBackground, // Use card background color
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PhotographerCard;
