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
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({
  imageSource,
  name,
  specialty,
  price,
  distance,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.photographerCard} onPress={onPress}>
      <Image source={{ uri: imageSource }} style={styles.photographerImage} />
      <View style={styles.cardContent}>
        <Text style={styles.photographerName}>{name}</Text>
        <Text style={styles.photographerSpecialty}>{specialty}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            <Text style={styles.ratingIcon}>★</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <Text style={styles.favoriteIcon}>♡</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photographerCard: {
    width: width * 0.7,
    maxWidth: 280,
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 16,
    marginRight: 16,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 }, // Adjusted shadow offset
    shadowOpacity: 0.05, // Reduced shadow opacity
    shadowRadius: 4, // Reduced shadow radius
    elevation: 2, // Reduced elevation
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  photographerImage: {
    width: "100%",
    height: 160,
    backgroundColor: Colors.light.border, // Using border color for image placeholder
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    padding: 16,
  },
  photographerName: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.primaryText,
    marginBottom: 4,
  },
  photographerSpecialty: {
    fontSize: 14,
    color: Colors.light.secondaryText,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.primaryText,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.light.primaryText,
  },
  ratingIcon: {
    fontSize: 14,
    color: Colors.light.warning,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255,255,255,0.7)", // Keep translucent white
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteIcon: {
    fontSize: 20,
    color: Colors.light.secondaryAccent,
  },
});

export default PhotographerCard;
