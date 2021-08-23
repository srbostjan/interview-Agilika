import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../res/colors'

class PostDetail extends Component {
  navigateHome = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <ImageBackground style={style.container} source={(require('../../assets/PostDetail/background.png'))}>
        <View style={style.navBar}>
          <Pressable onPress={this.navigateHome}><Image source={require('../../assets/PostDetail/backIcon.png')}/></Pressable>
          <View style={style.navBarRight} >
          <Pressable><Image style={style.navbarRightIcon} source={require('../../assets/PostDetail/shareIcon.png')}/></Pressable>
          <Pressable><Image style={style.navbarRightIcon} source={require('../../assets/PostDetail/menuIcon.png')}/></Pressable>
          </View>
        </View>
        <View style={style.post}>
          <LinearGradient colors={['#FAD961', '#F76B1C']} style={style.linearGradient}>
            <Text style={style.buttonText}>
              3/7
            </Text>
          </LinearGradient>
          <Text style={style.postTitle}>Cheap Romantic Vacations</Text>
          <Text style={style.postContent}>Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy.</Text>
          <View style={style.actions}>
            <Image source={require('../../assets/PostDetail/ovalPersons.png')}/>
            <View style={style.actionsButtons}>
              <Image source={require('../../assets/PostDetail/likeIcon.png')}/>
              <Text style={style.actionsButtonsText}>1125</Text>
            </View>
            <View style={style.actionsButtons}>
              <Image source={require('../../assets/PostDetail/commentIcon.png')}/>
              <Text style={style.actionsButtonsText}>348 </Text>
            </View>
          </View>
          <View style={style.comment}>
            <TextInput style={style.commentInput} placeholderTextColor="#fff" placeholder="Write a comment ..." />
            <Image source={require('../../assets/PostDetail/PlaneIcon.png')}/>
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
    paddingTop: 50,
    backgroundColor: colors.background
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navBarRight: {
    display: "flex",
    flexDirection: "row"
  },
  navbarRightIcon: {
    marginLeft: 20
  },
  post: {
    position: "absolute",
    bottom: 0,
    left: 20
  },
  linearGradient: {
    width: 67,
    height: 24,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  postTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 25
  },
  postContent: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 64
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  actionsButtons: {
    display: "flex",
    flexDirection: "row"
  },
  actionsButtonsText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 7,
    color: "#fff"
  },
  comment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20
  },
  commentInput: {
    width: "90%",
    height: 34,
    padding: 8,
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#485164",
    borderRadius: 17,
    color: "#fff"
  }
})
export default PostDetail;