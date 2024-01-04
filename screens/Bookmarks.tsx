import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

export default function Bookmarks() {
  const {height} = useWindowDimensions();
  const {container, textStyles} = styles;

  return (
    <View style={[container, {height}]}>
      <Text style={textStyles}>Bookmarks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000092',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 22,
    color: '#fff',
  },
});
