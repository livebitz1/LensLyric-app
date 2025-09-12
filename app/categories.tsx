"use client"

import { router } from "expo-router"

import * as LucideIcons from "lucide-react-native"
import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import {
  Animated,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

interface Category {
  id: string
  name: string
  iconName: keyof typeof LucideIcons
  bgColor?: string
  iconColor?: string
}

const dummyCategories: Category[] = [
  { id: "1", name: "Portraits", iconName: "User2", bgColor: "#EAF4FF", iconColor: "#007AFF" },
  { id: "2", name: "Weddings", iconName: "Heart", bgColor: "#FFF0F3", iconColor: "#FF3B30" },
  { id: "3", name: "Events", iconName: "Calendar", bgColor: "#F0FFF4", iconColor: "#34C759" },
  { id: "4", name: "Commercial", iconName: "Briefcase", bgColor: "#FFF8E7", iconColor: "#FF9500" },
  { id: "5", name: "Landscape", iconName: "Image", bgColor: "#F3F9F1", iconColor: "#28A745" },
  { id: "6", name: "Fashion", iconName: "Shirt", bgColor: "#FDF4FF", iconColor: "#AF52DE" },
  { id: "7", name: "Wildlife", iconName: "Feather", bgColor: "#F9F5F0", iconColor: "#8B4513" },
  { id: "8", name: "Abstract", iconName: "Sparkles", bgColor: "#F4F1FA", iconColor: "#9C27B0" },
  { id: "9", name: "Street", iconName: "Camera", bgColor: "#F0F0F0", iconColor: "#111" },
  { id: "10", name: "Food", iconName: "Coffee", bgColor: "#FFF7ED", iconColor: "#FF7F00" },
  { id: "11", name: "Architecture", iconName: "Building", bgColor: "#F8FAFC", iconColor: "#4B5563" },
]

interface CategoryCardProps {
  name: string
  iconName: keyof typeof LucideIcons
  onPress: () => void
  cardWidth: number
  isTablet: boolean
  bgColor?: string
  iconColor?: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, iconName, onPress, cardWidth, isTablet, bgColor, iconColor }) => {
  const IconComponent = LucideIcons[iconName] as React.ComponentType<any>
  const scaleAnim = useRef(new Animated.Value(1)).current

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const responsiveStyles = useMemo(
    () => ({
      card: {
        ...styles.card,
        width: cardWidth,
        padding: isTablet ? 26 : 20,
        borderRadius: isTablet ? 22 : 18,
        backgroundColor: bgColor || "#ffffff",
      },
      iconContainer: {
        ...styles.iconContainer,
        width: isTablet ? 68 : 56,
        height: isTablet ? 68 : 56,
        borderRadius: isTablet ? 34 : 28,
      },
      cardTitle: {
        ...styles.cardTitle,
        fontSize: isTablet ? 18 : 15,
      },
    }),
    [cardWidth, isTablet, bgColor],
  )

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={responsiveStyles.card}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.85}
      >
        <View style={responsiveStyles.iconContainer}>
          <IconComponent size={isTablet ? 32 : 24} color={iconColor || "#000"} strokeWidth={1.8} />
        </View>
        <Text style={responsiveStyles.cardTitle}>{name}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

const CategoriesScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const { width, height } = useWindowDimensions()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const animatedBorderColor = useRef(new Animated.Value(0)).current

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
    Animated.timing(animatedBorderColor, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const handleSearchBlur = () => {
    setIsSearchFocused(false)
    Animated.timing(animatedBorderColor, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const responsiveConfig = useMemo(() => {
    const isTablet = width >= 768
    const isLandscape = width > height

    let numColumns = 2
    if (isTablet) numColumns = isLandscape ? 4 : 3

    const padding = isTablet ? 40 : 20
    const spacing = isTablet ? 20 : 16
    const availableWidth = width - padding * 2
    const cardWidth = (availableWidth - spacing * (numColumns - 1)) / numColumns

    return { isTablet, numColumns, padding, spacing, cardWidth }
  }, [width, height])

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return dummyCategories
    return dummyCategories.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  const handleCategoryPress = (categoryName: string) => {
    console.log(`[Category pressed]: ${categoryName}`)
    if (Platform.OS === "ios") {
      // Add haptic feedback (optional)
    }
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View style={styles.container}>
      <Header title="Explore Categories" onBackPress={() => router.replace("/")} />
      <Animated.View style={{ flex: 1, opacity: fadeAnim, paddingHorizontal: responsiveConfig.padding }}>
        {/* <View style={styles.header}>
          <Text style={[styles.headerTitle, { fontSize: responsiveConfig.isTablet ? 34 : 26 }]}>
            Explore Categories
          </Text>
          <Text style={[styles.headerSubtitle, { fontSize: responsiveConfig.isTablet ? 16 : 14 }]}>
            Find photographers for every occasion
          </Text>
          <View style={[styles.headerDivider, { width: responsiveConfig.isTablet ? 50 : 36 }]} />
        </View> */}

        <SearchBar
          isTablet={responsiveConfig.isTablet}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item.id}
          numColumns={responsiveConfig.numColumns}
          key={`${responsiveConfig.numColumns}`}
          columnWrapperStyle={
            responsiveConfig.numColumns > 1 ? { justifyContent: "space-between", marginBottom: 20 } : undefined
          }
          renderItem={({ item }) => (
            <CategoryCard
              name={item.name}
              iconName={item.iconName}
              onPress={() => handleCategoryPress(item.name)}
              cardWidth={responsiveConfig.cardWidth}
              isTablet={responsiveConfig.isTablet}
              bgColor={item.bgColor}
              iconColor={item.iconColor}
            />
          )}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Light background
  },
  header: {
    marginTop: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontWeight: "800",
    color: "#111",
  },
  headerSubtitle: {
    color: "#666",
    marginTop: 6,
    fontWeight: "400",
  },
  headerDivider: {
    marginTop: 12,
    height: 3,
    backgroundColor: "#111",
    borderRadius: 2,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#000",
  },
  iconContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
})

export default CategoriesScreen
