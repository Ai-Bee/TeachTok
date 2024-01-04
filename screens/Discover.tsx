import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

export default function Discover() {
  const {height} = useWindowDimensions();
  const {container, textStyles} = styles;

  return (
    <View style={[container, {height}]}>
      <Text style={textStyles}>Discover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#097654',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 22,
    color: '#fff',
  },
});
