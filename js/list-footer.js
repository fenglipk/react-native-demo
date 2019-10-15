import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

const tip = isMore => (isMore ? '正在加载更多...' : '没有更多数据');

export default ({isMore}) => (
  <View style={styles.container}>
    <Text style={styles.more}>{tip(isMore)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  more: {
    fontSize: 13,
    color: '#000',
  },
});
