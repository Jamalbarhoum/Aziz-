import React from 'react';
import { View, StyleSheet } from 'react-native';
import MarqueeText from 'react-native-marquee';

const MarqueeExample = () => {
  return (
    <View style={styles.container}>
      <MarqueeText
         style={styles.marqueeText}
         speed={0.05} 
         marqueeOnStart={true}
         loop={true}
         delay={1000}
         marqueeDelay={1000}
      >
Available 24/7, order anytime you want                Available 24/7, order anytime you want                Available 24/7, order anytime you want             Available 24/7, order anytime you want              Available 24/7, order anytime you want               Available 24/7, order anytime you want
      </MarqueeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    left:-10,
    width:600,
    zIndex:100,
    height:30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"rgb(160,215,235)",
    display:"flex",
    alignContent:"center",
    top:80
    
  },
  marqueeText: {
    width:600,
    fontSize: 17,
    color: '#fff',
  },
});

export default MarqueeExample;
