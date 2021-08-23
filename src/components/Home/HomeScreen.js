import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert, ScrollView, Platform } from 'react-native'
import colors from '../../res/colors'

class HomeScreen extends Component {
  navigateStream = () => {
    this.props.navigation.navigate('LiveStream')
  }
  navigatePost = () => {
    this.props.navigation.navigate('PostDetail')
  }
  navigateUserProfile = () => {
    this.props.navigation.navigate('UserProfile')
  }
  render() {
    return (
      <>
        <ScrollView style={style.container}>
          <View style={style.searchbar}>
            <Pressable style={style.SearchIcon}><Image source={require('../../assets/HomeScreen/Search.png')} /></Pressable>
            <TextInput
              editable
              placeholder="Buscar"
              placeholderTextColor={colors.placeholderColor}
            />
          </View>
          <View style={style.newContainer}>
            <Text style={style.newText}>What's new?</Text>
            <Pressable onPress={this.navigateUserProfile}><Image source={require('../../assets/HomeScreen/Oval.png')} style={style.newImage} /></Pressable>
          </View>
          <ScrollView horizontal={true} style={style.carousel}>
            <Pressable onPress={this.navigateStream} style={style.carouselCard}>
              <Image source={require('../../assets/HomeScreen/carousel1.png')} style={style.carouselCardImg} />
              <View style={style.carouselCardFooter}>
                <Image source={require('../../assets/HomeScreen/Avatar1.png')}/>
                <Text style={style.carouselCardFooterText}>Thomas Curtis</Text>
              </View>
            </Pressable>

            <Pressable onPress={this.navigateStream} style={style.carouselCard}>
              <Image source={require('../../assets/HomeScreen/carousel2.png')} style={style.carouselCardImg} />
              <View style={style.carouselCardFooter}>
                <Image source={require('../../assets/HomeScreen/Avatar2.png')}/>
                <Text style={style.carouselCardFooterText}>Christine Barton</Text>
              </View>
            </Pressable>

            <Pressable onPress={this.navigateStream} style={style.carouselCard}>
              <Image source={require('../../assets/HomeScreen/carousel3.png')} style={style.carouselCardImg} />
              <View style={style.carouselCardFooter}>
                <Image source={require('../../assets/HomeScreen/Avatar3.png')}/>
                <Text style={style.carouselCardFooterText}>Nathan McKinney</Text>
              </View>
            </Pressable>
          </ScrollView>
          <View>
            <Pressable onPress={this.navigatePost} style={style.post}>
              <View style={style.postHeader}>
                <Image source={require('../../assets/HomeScreen/postAvatar.png')} style={style.postHeaderImg} />
                <View>
                  <Text style={style.postHeaderTitle}>Christina Kennedy</Text>
                  <Text style={style.postHeaderText}>2 hours ago</Text>
                </View>
              </View>
              <View style={style.postImages}>
                <Image source={require('../../assets/HomeScreen/postImage1.png')} />
                <View>
                  <View style={style.postImageRow}>
                    <Image style={style.postImageRowImg} source={require('../../assets/HomeScreen/postImage2.png')} />
                    <Image style={style.postImageRowImg} source={require('../../assets/HomeScreen/postImage3.png')} />
                  </View>
                  <View style={style.postImageRow}>
                    <Image style={style.postImageRowImg} source={require('../../assets/HomeScreen/postImage4.png')} />
                    <Image style={style.postImageRowImg} source={require('../../assets/HomeScreen/postImage5.png')} />
                  </View>
                </View>
              </View>
              <View style={style.postDesc}>
                <Text style={style.postDescHash}>#relax, #travel</Text>
                <Text style={style.postDescText}>If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.</Text>
                <View style={style.postDescFooter}>
                  <View style={style.postDescFooterActions}>
                    <View style={style.postDescFooterActions}>
                      <Image style={style.postDescFooterActionsImg} source={require('../../assets/HomeScreen/likeIcon.png')}/>
                      <Text style={style.postDescFooterActionsText}>1125</Text>
                    </View>
                    <View style={style.postDescFooterActions}>
                      <Image style={style.postDescFooterActionsImg} source={require('../../assets/HomeScreen/comentIcon.png')} />
                      <Text style={style.postDescFooterActionsText}>348</Text>
                    </View>
                  </View>
                  <Image source={require('../../assets/HomeScreen/personsIcon.png')} />
                </View>
              </View>
            </Pressable>
          </View>
        </ScrollView>
        <View style={style.footer}>
          <Pressable  style={style.footerCard}>
            <Image source={require('../../assets/HomeScreen/footerIcon1.png')} />
            <Text style={style.footerText}>Home</Text>
          </Pressable>

          <Pressable  style={style.footerCard}>
            <Image source={require('../../assets/HomeScreen/footerIcon2.png')} />
            <Text style={style.footerText}>Streams</Text>
          </Pressable>

          <Pressable  style={style.footerCard}>
            <Image source={require('../../assets/HomeScreen/footerIcon2.png')} />
            <Text style={style.footerText}>Messages</Text>
          </Pressable>

          <Pressable  style={style.footerCard}>
            <Image source={require('../../assets/HomeScreen/footerIcon4.png')} />
            <Text style={style.footerText}>Notifications</Text>
          </Pressable>

          <Pressable onPress={this.navigateUserProfile} style={style.footerCard}>
            <Image source={require('../../assets/HomeScreen/footerIcon5.png')} />
            <Text style={style.footerText}>Profiles</Text>
          </Pressable>
        </View>
      </>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  searchbar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 36,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    fontSize: 15,
    backgroundColor: colors.searchBackground,
    color: "white",
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 25
  },
  SearchIcon: {
    marginRight: 10,
  },
  placeholderColor: {
    color: "#fff"
  },
  newContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25
  },
  newText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff"
  },
  newImage: {
    width: 36,
    height: 36
  },
  carousel: {
    maxHeight: 175,
    marginBottom: 20
  },
  carouselCard: {
    marginRight: 20
  },
  carouselCardFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  carouselCardImg: {
    width: 135,
    height: 135,
    marginBottom: 10,
    borderRadius: 8
  },
  carouselCardFooterText: {
    color: "#fff",
    marginLeft: 5
  },
  post: {
    width: "90%",
    marginLeft: 10,
    marginBottom: 30
  },
  postHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  postHeaderImg: {
    marginRight: 12
  },
  postHeaderTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  postHeaderText: {
    fontSize: 13,
    color: colors.subduedText,
    fontWeight: "bold"
  },
  postImages: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 18
  },
  postImageRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  postImageRowImg: {
    width: 70,
    height: 70,
    marginLeft: 12
  },
  postDescHash: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF8C00"
  },
  postDescText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20
  },
  postDescFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  postDescFooterActions: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10
  },
  postDescFooterActionsImg: {
    marginRight: 5
  },
  postDescFooterActionsText: {
    color: "#fff"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: Platform.OS === 'android' ? "center" : null,
    height: Platform.OS === 'ios' ? 83 : 60,
    paddingRight: 20,
    paddingLeft: 30,
    backgroundColor: colors.footerBackground
  },
  footerCard: {
    display: "flex",
    alignItems: "center"
  },
  footerText: {
    color: colors.subduedText
  }
})

export default HomeScreen;