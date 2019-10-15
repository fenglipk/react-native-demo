import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import ListFooter from './list-footer';
import ListItem from './list-item';

const data = [
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
  {id: '001', name: 'test'},
];

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      refreshing: false,
      isMore: true,
    };
  }

  componentDidMount() {
    this._onInitRefresh();
  }

  _onItemClick = item => {
    alert(item.name);
  };

  _renderItem = item => (
    <ListItem item={item.item} _onItemClick={this._onItemClick} />
  );

  _renderListFooter = () =>
    this.state.list.length > 0 && <ListFooter isMore={this.state.isMore} />;

  // 刷新时候获取数据
  _onRefresh = () => {
    const that = this;
    that.setState({refreshing: true});
    setTimeout(function() {
      const list = [];
      list.push(...data);
      that.setState({list, refreshing: false});
    }, 500);
  };

  // 初始化的时候获取数据
  _onInitRefresh = () => {
    const that = this;
    const list = [];
    list.push(...data);
    that.setState({list});
  };

  // 上拉加载数据
  _onEndReached = () => {
    if (this.state.isMore) {
      const mlist = [
        {id: '001', name: 'test1', time: '2019-11-11 22:22:22'},
        {id: '001', name: 'test1', time: '2019-11-11 22:22:22'},
        {id: '001', name: 'test1', time: '2019-11-11 22:22:22'},
      ];
      this.setState((prevState, props) => {
        prevState.list.push(...mlist);
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          renderItem={this._renderItem}
          scrollEventThrottle={200}
          data={this.state.list}
          keyExtractor={(item, index) => item + index}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          onEndReachedThreshold={0.05}
          onEndReached={this._onEndReached}
          ListFooterComponent={this._renderListFooter}
          style={{width: '100%'}}
        />
      </View>
    );
  }
}

export default LoginScreen;
