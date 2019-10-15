import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Swiper from 'react-native-swiper';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          horizontal
          showsPagination={false}
          index={1}
          loop={false}>
          <View style={styles.slide}>
            <Page1 />
          </View>
          <View style={styles.slide}>
            <Page2 />
          </View>
          <View style={styles.slide}>
            <Page3 />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
