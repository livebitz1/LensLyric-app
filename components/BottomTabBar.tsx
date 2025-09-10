import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from "../constants/Colors";

interface TabBarItemProps {
  icon: string;
  text: string;
  isActive: boolean;
  onPress: () => void;
}

const TabBarItem: React.FC<TabBarItemProps> = ({ icon, text, isActive, onPress }) => (
  <TouchableOpacity style={styles.tabBarItem} onPress={onPress}>
    <Icon name={icon as keyof typeof Ionicons.glyphMap} size={24} color={isActive ? Colors.light.secondaryAccent : Colors.light.secondaryText} />
    <Text style={[styles.tabBarText, isActive && styles.tabBarTextActive]}>{text}</Text>
  </TouchableOpacity>
);

interface BottomTabBarProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.bottomTabBar}>
      <TabBarItem icon="home-outline" text="Home" isActive={activeTab === "Home"} onPress={() => onTabPress("Home")} />
      <TabBarItem icon="compass-outline" text="Explore" isActive={activeTab === "Explore"} onPress={() => onTabPress("Explore")} />
      <TabBarItem icon="heart-outline" text="Favorite" isActive={activeTab === "Favorite"} onPress={() => onTabPress("Favorite")} />
      <TabBarItem icon="ticket-outline" text="Ticket" isActive={activeTab === "Ticket"} onPress={() => onTabPress("Ticket")} />
      <TabBarItem icon="person-outline" text="Profile" isActive={activeTab === "Profile"} onPress={() => onTabPress("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.light.primaryBackground,
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    paddingVertical: 12,
    paddingBottom: 24, // To account for safe area insets on some devices
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarItem: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 4,
  },
  tabBarIcon: {
    fontSize: 24,
    color: Colors.light.secondaryText,
    marginBottom: 4,
  },
  tabBarIconActive: {
    color: Colors.light.secondaryAccent,
  },
  tabBarText: {
    fontSize: 12,
    color: Colors.light.secondaryText,
    fontFamily: 'SpaceMono-Regular', // Assuming you have this font loaded
  },
  tabBarTextActive: {
    color: Colors.light.secondaryAccent,
    fontFamily: 'SpaceMono-Regular',
    fontWeight: 'bold',
  },
});

export default BottomTabBar;

interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  return <Ionicons name={name} size={size} color={color} />;
};
