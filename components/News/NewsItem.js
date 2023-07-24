import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native'; // Import the Text component here
import { colors } from '../../config/theme';
import { statusbar } from 'expo-status-bar'; // Is this needed?

const NewsItem = ({ image, title, avatar, author, date, ...props }) => {
  let activeColors = colors;
  // 
  return (
    <TouchableOpacity
      style={[{ backgroundColor: activeColors.secondary }, styles.container]}
      {...props}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.bottomSection}>
        <Text style={[{ color: activeColors.accent }, styles.title]}>{title}</Text>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={avatar} style={styles.avatar} />
            <Text>{author}</Text>
          </View>
          <Text style={[{ color: activeColors.tertiary }, styles.date]}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 300,
    borderRadius: 25,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25,
  },
  bottomSection: {
    padding: 25,
  },
  title: {
    fontSize: 19,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
});

export default NewsItem;
