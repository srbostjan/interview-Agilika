import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../res/colors'



class UserProfile extends Component {
  navigateHome = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <ScrollView style={style.container}>
        <ImageBackground style={style.headerContainer} source={require('../../assets/UserProfile/headerBackground.png')}>
          <View style={style.header}>
            <View style={style.headerNavbar}>
              <Pressable onPress={this.navigateHome}><Image source={require('../../assets/UserProfile/backIcon.png')} /></Pressable>
              <Pressable><Image source={require('../../assets/UserProfile/menuIcon.png')}/></Pressable>
            </View>
            <View style={style.headerInfo}>
              <Image source={require('../../assets/UserProfile/headerAvatar.png')}/>
              <View style={style.headerInfoText}>
                <Text style={style.headerInfoTextName}>Jorge Curtis</Text>
                <Text style={style.headerInfoTextHash}>@jorgecutis</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={style.follow}>
          <View style={style.followSection}>
            <View style={style.followSectionCard}>
              <Text style={style.followSectionCardNum}>128</Text>
              <Text style={style.followSectionCardText}>Posts</Text>
            </View>
            <View style={style.followSectionCard}>
              <Text style={style.followSectionCardNum}>3120</Text>
              <Text style={style.followSectionCardText}>Following</Text>
            </View>
            <View style={style.followSectionCard}>
              <Text style={style.followSectionCardNum}>5024</Text>
              <Text style={style.followSectionCardText}>Follower</Text>
            </View>
          </View>
          <View style={style.followSection}>
            <Pressable style={style.followSectionButton}><Image source={require('../../assets/UserProfile/addIcon.png')}/></Pressable>
            <Pressable style={style.followSectionButton}><Image source={require('../../assets/UserProfile/btnFollow.png')}/></Pressable>
          </View>
        </View>
        <View style={style.navbar}>
          <Pressable><Image source={require('../../assets/UserProfile/navbarIcon1.png')}/></Pressable>
          <Pressable><Image source={require('../../assets/UserProfile/navbarIcon2.png')}/></Pressable>
          <Pressable><Image source={require('../../assets/UserProfile/navbarIcon3.png')}/></Pressable>
          <Pressable><Image source={require('../../assets/UserProfile/navbarIcon4.png')}/></Pressable>
        </View>
        <View style={style.postContainer}>
          <View style={style.post}>
            <View style={style.postHeader}>
              <View style={style.postHeaderLeft}>
                <Image source={require('../../assets/UserProfile/postAvatar1.png')}/>
                <View style={style.postHeaderText}>
                  <Text style={style.postHeaderTextName}>Edward Kelly</Text>
                  <Text style={style.postHeaderTextTime}>2 hours ago</Text>
                </View>
              </View>
              <Pressable><Image source={require('../../assets/UserProfile/options.png')}/></Pressable>
            </View>
            <View style={style.postContent}>
              <Text style={style.postContentHash}>#relax, #travel</Text>
              <Text style={style.postContentText}>Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy tale... Read more</Text>
            </View>
            <View style={style.postActions}>
              <View style={style.postActionsLeft}>
                <View style={style.postActionsLeftAction}>
                  <Image style={style.postActionsLeftImg} source={require('../../assets/UserProfile/likeIcon.png')}/>
                  <Text style={style.postActionsLeftNum}>1125</Text>
                </View>
                <View style={style.postActionsLeftAction}>
                  <Image style={style.postActionsLeftImg}  source={require('../../assets/UserProfile/commentIcon.png')}/>
                  <Text style={style.postActionsLeftNum}>348</Text>
                </View>
              </View>
              <Image source={require('../../assets/UserProfile/ovalPersons.png')} />
            </View>
          </View>

          <View style={style.post}>
            <View style={style.postHeader}>
              <View style={style.postHeaderLeft}>
                <Image source={require('../../assets/UserProfile/postAvatar2.png')}/>
                <View style={style.postHeaderText}>
                  <Text style={style.postHeaderTextName}>Howard Barton</Text>
                  <Text style={style.postHeaderTextTime}>2 hours ago</Text>
                </View>
              </View>
              <Pressable><Image source={require('../../assets/UserProfile/options.png')}/></Pressable>
            </View>
            <View style={style.postContent}>
              <Text style={style.postContentHash}>#relax, #travel</Text>
              <Text style={style.postContentText}>The Luxury Of Traveling With Yacht Charter Companies</Text>
              <View style={style.postContentImage}>
                <Image source={require('../../assets/UserProfile/postImage2.png')}/>
              </View>
            </View>
            <View style={style.postActions}>
              <View style={style.postActionsLeft}>
                <View style={style.postActionsLeftAction}>
                  <Image style={style.postActionsLeftImg} source={require('../../assets/UserProfile/likeIcon.png')}/>
                  <Text style={style.postActionsLeftNum}>1125</Text>
                </View>
                <View style={style.postActionsLeftAction}>
                  <Image style={style.postActionsLeftImg}  source={require('../../assets/UserProfile/commentIcon.png')}/>
                  <Text style={style.postActionsLeftNum}>348</Text>
                </View>
              </View>
              <Image source={require('../../assets/UserProfile/ovalPersons.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.background
  },
  headerContainer: {
    width: "100%",
    height: 254,
    paddingTop: 50
  },
  header: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20
  },
  headerNavbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerInfo: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20
  },
  headerInfoText: {
    marginLeft: 10
  },
  headerInfoTextName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff"
  },
  headerInfoTextHash: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff"
  },
  follow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 66,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  followSection: {
    display: "flex",
    flexDirection: "row"
  },
  followSectionCard: {
    marginRight: 25,
  },
  followSectionCardNum: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff"
  },
  followSectionCardText: {
    fontSize: 13,
    fontWeight: "bold",
    color:colors.subduedText
  },
  followSectionButton: {
    marginLeft: 10
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 42,
    backgroundColor: "#1E2432"
  },
  post: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30
  },
  postHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 18
  },
  postHeaderLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  postHeaderText: {
    marginLeft: 15
  },
  postHeaderTextName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff"
  },
  postHeaderTextTime: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.subduedText
  },
  postContent: {
    marginBottom: 28
  },
  postContentHash: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 3
  },
  postContentText: {
    marginBottom: 13,
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  },
  postContentImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  postActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  postActionsLeft: {
    display: "flex",
    flexDirection: "row"
  },
  postActionsLeftAction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 22
  },
  postActionsLeftNum: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  }
})

export default UserProfile;