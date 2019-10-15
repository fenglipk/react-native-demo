import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

class ListItem extends Component {
  render() {
    const {item, _onItemClick} = this.props;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => _onItemClick(item)}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 4,
    marginTop: 4,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  text: {
    color: '#000',
    marginBottom: 4,
    fontSize: 14,
  },
});

export default ListItem;
