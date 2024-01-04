import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';

export default function Profile() {
  const {height} = useWindowDimensions();
  const {container, textStyles} = styles;

  return (
    <View style={[container, {height}]}>
      <Text style={textStyles}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#550981',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 22,
    color: 'gray',
  },
});
