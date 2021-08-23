import React, {Component} from 'react';
import { View, Text, Image, Pressable, FlatList, StyleSheet, ImageBackground, TextInput } from 'react-native'
import background from '../../assets/LiveStream/background.png'
import avatar2 from '../../assets/LiveStream/avatar2.png'
import avatar3 from '../../assets/LiveStream/avatar3.png'
import colors from '../../res/colors';

class LiveStream extends Component {
  state = {
    comments: [
    {
      id: "1",
      name: "Jean Walton",
      comment: "Awesome. Love it 💛",
      image: avatar2
    },
    {
      id: "2",
      name: "Willie Singleton",
      comment: "Wow... so pretty!",
      image: avatar3
    },
  ]
  }
  navigateHome = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <ImageBackground source={background} resizeMode="cover" style={style.container}>
        <View style={style.header}>
          <View style={style.headerLeft}>
            <Image source={require('../../assets/LiveStream/avatar1.png')} />
            <View style={style.headerLeftText}>
              <Text style={style.headerLeftTextContent}>Russell Lee</Text>
              <Text style={style.headerLeftTextContent}>01:08:30</Text>
            </View>
          </View>
          <Pressable onPress={this.navigateHome}><Image source={require('../../assets/LiveStream/closeIcon.png')} /></Pressable>
        </View>
        <View style={style.footer}>
          <View style={style.share}>
            <Image style={style.shareImg} source={require('../../assets/LiveStream/shareIcon.png')}/>
            <Text style={style.shareText}>Share with friends</Text>
          </View>
          <View style={style.comments}>
            <FlatList
            style = {style.commentsList}
            data={this.state.comments}
            renderItem={({item}) =>
              <View style={style.comment} key={item.id}>
                <Image source={item.image}/>
                <View style={style.commentText}>
                  <Text style={style.commentTextName}>{item.name}</Text>
                  <Text style={style.commentTextComment}>{item.comment}</Text>
                </View>
              </View>}
            ></FlatList>
            <Image style={style.commentsHearts} source={require('../../assets/LiveStream/hearts.png')}/>
          </View>
          <View style={style.commetsInput}>
            <TextInput style={style.commetsInputInput} placeholder={"Write a comment ..."} />
            <Pressable><Image source={require("../../assets/LiveStream/sendIcon.png")} /></Pressable>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row"
  },
  headerLeftText: {
    marginLeft: 10
  },
  headerLeftTextContent: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff"
  },
  footer: {
    width: "100%",
    paddingLeft: 20,
    position: "absolute",
    bottom: 20
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 172,
    padding: 6,
    marginBottom: 12,
    backgroundColor: "rgba(255, 149, 0, 0.9)",
    borderRadius: 17
  },
  shareText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 7
  },
  comments: {
    width: "100%"
  },
  commentsList: {
    width: "70%"
  },
  comment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingRight: 25,
    backgroundColor: colors.commentColor,
    borderRadius: 27,
    marginBottom: 5
  },
  commentsHearts: {
    position: "absolute",
    right: -20,
    bottom: 0,
  },
  commentText: {
    marginLeft: 8,
  },
  commentTextName: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "bold"
  },
  commentTextComment: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  },
  commetsInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  commetsInputInput: {
    width: "90%",
    padding: 8,
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 18
  }
})

export default LiveStream;