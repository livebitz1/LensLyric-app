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
    <Text style={[styles.tabBarIcon, isActive && styles.tabBarIconActive]}>{icon}</Text>
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
      <TabBarItem icon="🏠" text="Home" isActive={activeTab === "Home"} onPress={() => onTabPress("Home")} />
      <TabBarItem icon="🌐" text="Explore" isActive={activeTab === "Explore"} onPress={() => onTabPress("Explore")} />
      <TabBarItem icon="❤" text="Favorite" isActive={activeTab === "Favorite"} onPress={() => onTabPress("Favorite")} />
      <TabBarItem icon="🎟" text="Ticket" isActive={activeTab === "Ticket"} onPress={() => onTabPress("Ticket")} />
      <TabBarItem icon="👤" text="Profile" isActive={activeTab === "Profile"} onPress={() => onTabPress("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.light.primaryBackground,
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
    paddingVertical: 10,
    paddingBottom: 20, // To account for safe area insets on some devices
  },
  tabBarItem: {
    alignItems: "center",
    flex: 1,
  },
  tabBarIcon: {
    fontSize: 24,
    color: Colors.light.secondaryText, // Default grey color
    marginBottom: 4,
  },
  tabBarIconActive: {
    color: Colors.light.secondaryAccent, // Coral color for active icon
  },
  tabBarText: {
    fontSize: 12,
    color: Colors.light.secondaryText,
  },
  tabBarTextActive: {
    color: Colors.light.secondaryAccent, // Coral color for active text
  },
});

export default BottomTabBar;
