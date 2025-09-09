"use client"

import BottomTabBar from "@/components/BottomTabBar"
import CategoryCard from "@/components/CategoryCard"
import PhotographerCard from "@/components/PhotographerCard"
import { useColorScheme } from '@/hooks/useColorScheme'
import { useEffect, useState } from "react"
import { Animated, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from "../constants/Colors"

const { width } = Dimensions.get("window")

export default function Index() {
  const [activeTab, setActiveTab] = useState("Home")
  const colorScheme = useColorScheme();
  const currentColors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const borderAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(borderAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, []);

  const animatedBorderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [currentColors.border, currentColors.primaryText], // Animate between border and primary text color
  });

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: currentColors.primaryBackground,
    },
    topSectionBackground: {
      backgroundColor: currentColors.primaryBackground,
      paddingBottom: 20,
      paddingTop: 20,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#000000",
    },
    scrollViewContent: {
      flex: 1,
    },

    // Header Styles
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    welcomeText: {
      fontSize: 16,
    },
    taglineText: {
      fontSize: 24,
      fontWeight: "bold",
    },

    // Search and Filter Styles
    searchFilterContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: 15,
    },
    searchBarWrapper: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.light.cardBackground,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginRight: 10,
      height: 50,
      borderWidth: 1,
      borderColor: "#000000",
    },
    searchIcon: {
      fontSize: 20,
      marginRight: 10,
      color: Colors.light.secondaryText,
    },
    searchTextInput: {
      flex: 1,
      fontSize: 16,
      color: Colors.light.primaryText,
      fontWeight: "500",
    },
    filterButton: {
      backgroundColor: Colors.light.cardBackground,
      borderRadius: 10,
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#000000",
    },
    filterIcon: {
      fontSize: 20,
      color: Colors.light.primaryText,
    },

    // Section Styles
    section: {
      marginBottom: 20,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 20,
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "700",
    },
    seeAllText: {
      fontSize: 14,
      fontWeight: "600",
    },

    // Categories List
    categoriesList: {
      paddingHorizontal: 20,
    },
    categoryCard: {
      alignItems: "center",
      marginRight: 20,
    },
    categoryIconBackground: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: currentColors.primaryBackground,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 8,
    },
    categoryIcon: {
      fontSize: 28,
      color: currentColors.primaryText,
    },
    categoryName: {
      fontSize: 14,
      color: currentColors.primaryText,
    },

    // Photographers List
    eventsList: {
      paddingHorizontal: 20,
    },
    photographerCard: {
      width: width * 0.7,
      maxWidth: 280,
      backgroundColor: currentColors.cardBackground,
      borderRadius: 16,
      marginRight: 16,
      shadowColor: currentColors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "#000000", // Add black border
    },
    photographerImage: {
      width: "100%",
      height: 160,
      backgroundColor: currentColors.border,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    cardContent: {
      padding: 16,
    },
    photographerName: {
      fontSize: 18,
      fontWeight: "600",
      color: currentColors.primaryText,
      marginBottom: 4,
    },
    photographerSpecialty: {
      fontSize: 14,
      color: currentColors.secondaryText,
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
      color: currentColors.primaryText,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    ratingText: {
      fontSize: 14,
      fontWeight: "600",
      color: currentColors.primaryText,
    },
    ratingIcon: {
      fontSize: 14,
      color: currentColors.warning,
    },
    favoriteButton: {
      position: "absolute",
      top: 10,
      right: 10,
      backgroundColor: currentColors.cardBackground,
      borderRadius: 20,
      width: 36,
      height: 36,
      justifyContent: "center",
      alignItems: "center",
    },
    favoriteIcon: {
      fontSize: 20,
      color: currentColors.secondaryAccent,
    },

    // Subscription Highlight Section
    premiumCard: {
      marginHorizontal: 20,
      backgroundColor: currentColors.cardBackground,
      borderRadius: 16,
      padding: 24,
      alignItems: "center",
    },
    premiumTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: currentColors.primaryText,
      marginBottom: 8,
      textAlign: "center",
    },
    premiumSubtitle: {
      fontSize: 14,
      color: currentColors.secondaryText,
      textAlign: "center",
      marginBottom: 20,
      lineHeight: 20,
    },
    secondaryButton: {
      borderWidth: 1,
      borderColor: currentColors.primaryAccent,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: currentColors.primaryAccent,
    },
    secondaryButtonText: {
      color: currentColors.cardBackground,
      fontSize: 14,
      fontWeight: "600",
    },

    // Bottom Tab Bar
    bottomTabBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: currentColors.primaryBackground,
      borderTopWidth: 1,
      borderTopColor: currentColors.border,
      paddingVertical: 10,
      paddingBottom: 20,
    },
    tabBarItem: {
      alignItems: "center",
      flex: 1,
    },
    tabBarIcon: {
      fontSize: 24,
      color: currentColors.secondaryText,
      marginBottom: 4,
    },
    tabBarIconActive: {
      color: currentColors.secondaryAccent,
      marginBottom: 4,
    },
    tabBarText: {
      fontSize: 12,
      color: currentColors.secondaryText,
    },
    tabBarTextActive: {
      color: currentColors.secondaryAccent,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSectionBackground}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back,</Text>
            <Text style={styles.taglineText}>Your Shot, Your Way.</Text>
          </View>
        </View>

        <View style={styles.searchFilterContainer}>
          <Animated.View style={[styles.searchBarWrapper, { borderColor: "#000000" }]}>
            <Text style={[styles.searchIcon, { color: currentColors.secondaryText }]}>🔍</Text>
            <TextInput
              style={[styles.searchTextInput, { color: currentColors.primaryText }]} // Apply text color
              placeholder="Search"
              placeholderTextColor={currentColors.secondaryText}
            />
          </Animated.View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={[styles.filterIcon, { color: currentColors.primaryText }]}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollViewContent}>
        {/* Categories Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: currentColors.primaryText }]}>Categories</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: currentColors.secondaryAccent }]}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesList}>
            {[
              { name: "Portrait", iconName: "camera" },
              { name: "Wedding", iconName: "heart" },
              { name: "Events", iconName: "calendar" },
              { name: "Landscape", iconName: "map" },
              { name: "Fashion", iconName: "tags" },
              { name: "Wildlife", iconName: "paw" },
            ].map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                iconName={category.iconName}
                onPress={() => console.log(`${category.name} pressed`)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Nearby Photographers Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: currentColors.primaryText }]}>Nearby Photographers</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: currentColors.secondaryAccent }]}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.eventsList}>
            {[1, 2, 3].map((_, index) => (
              <PhotographerCard
                key={index}
                imageSource={index === 0 ? "https://i.pinimg.com/736x/d6/1f/07/d61f07632af8030125eab919b25db0ed.jpg" : index === 1 ? "https://i.pinimg.com/736x/7f/07/77/7f07770020ed44766d2981d45bd24f19.jpg" : "https://i.pinimg.com/736x/47/78/bf/4778bf880c77cc0dfce72ca94c3554bb.jpg"} // Updated image sources for all cards
                name="Maria Rodriguez"
                specialty="Wedding & Landscape"
                price="$150/hr"
                distance="5 miles"
                rating={4.7}
                onPress={() => console.log("Photographer pressed")}
              />
            ))}
          </ScrollView>
        </View>

        {/* Subscription Highlight */}
        <View style={styles.section}>
          <View style={[styles.premiumCard, { backgroundColor: currentColors.cardBackground }]}>
            <Text style={[styles.premiumTitle, { color: currentColors.primaryText }]}>Boost Your Visibility with Premium Plans</Text>
            <Text style={[styles.premiumSubtitle, { color: currentColors.secondaryText }]}>Showcase your portfolio and reach more clients.</Text>
            <TouchableOpacity style={[styles.secondaryButton, { borderColor: currentColors.primaryAccent, backgroundColor: currentColors.primaryAccent }]}>
              <Text style={[styles.secondaryButtonText, { color: currentColors.cardBackground }]}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  )
}
