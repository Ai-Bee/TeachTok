import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StatusBarStyle} from 'react-native';

interface GenericContainerProps {
  children: ReactNode;
  barStyle?: StatusBarStyle;
}

const GenericContainer: React.FC<GenericContainerProps> = ({
  children,
  barStyle = 'light-content',
}) => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      {children}
    </SafeAreaView>
  );
};

export default GenericContainer;
