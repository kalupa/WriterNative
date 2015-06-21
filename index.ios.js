/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  // Image,
  // ListView,
  ScrollView,
  StyleSheet,
  Text,
  View
} = React;

var WriterNative = React.createClass({

  getInitialState: function() {
    return {
    };
    // return {
    //   dataSource: new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1 !== row2
    //   }),
    //   loaded: false
    // };
  },

  componentDidMount: function() {
    // this.fetchData();
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text> Loading ... </Text>
      </View>
    );
  },

  render: function() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.writingText}>{THUMBS.map(createThumbRow)}</Text>
      </ScrollView>
    );
  }

});

// var Thumb = React.createClass({
//   shouldComponentUpdate: function(nextProps, nextState) {
//     return false;
//   },
//   render: function() {
//     return (
//       <View style={styles.button}>
//         <Image source={{uri:this.props.uri}} style={styles.img} />
//       </View>
//     );
//   }
// });

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  scrollView: {
    backgroundColor: '#F5FCFF',
    // backgroundColor: '#6A85B1',
    height: 300,
    padding: 16
  },
  writingText: {
    fontFamily: 'Inconsolata-dz'
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64
  },
  img: {
    width: 64,
    height: 64
  }
});

var THUMBS = [
 '/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png',
 '/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png',
 '/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png',
 '/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'
].map(path => 'https://fbcdn-dragon-a.akamaihd.net' + path);

THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS

// var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;
var createThumbRow = (uri, i) => uri;

AppRegistry.registerComponent('WriterNative', () => WriterNative);

