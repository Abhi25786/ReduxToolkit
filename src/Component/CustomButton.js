import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CustomButton({
  title,
  buttonStyle,
  titleStyle,
  icon,
  iconStyle,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonView, buttonStyle]}>
        {title ? (
          <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
        ) : null}
        {icon ? (
          <Image source={icon} style={[styles.iconImage, iconStyle]} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: 'lightblue',
    padding: 15,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'bold',
    fontSize: 20,
  },
  iconImage: {
    height: 24,
    width: 24,
    backgroundColor: 'red',
  },
});
