import React from 'react'
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar
} from 'react-native'
// import Reactotron from 'reactotron-react-native'
// import './ReactotronConfig'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri)
    }
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={styles.hover}>
          <View style={styles.container}>
            <View style={styles.overlay}>

              <View style={styles.close}>
                <TouchableOpacity>
                  <Icon name="ios-close" size={40} color="#FFF" />
                </TouchableOpacity>
              </View>

              <View  style={styles.actionSide}>
                <TouchableOpacity style={styles.button}>
                  <Icon name="ios-sync" size={24} color="#FFF" />
                  <Text style={styles.ActionName}>Turn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="ios-timer" size={24} color="#FFF" />
                  <Text style={styles.ActionName}>Time</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="ios-color-filter" size={24} color="#FFF" />
                  <Text style={styles.ActionName}>Filter</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.shootPicture}>
              <TouchableOpacity style={styles.actionBottom}>
                <Image style={styles.imgSide} source={require('./Upload.png')}/>
                <Text style={styles.actionText}>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBottom}>
                <Image style={styles.imgShoot} source={require('./Shoot.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBottom}>
                <Image style={styles.imgSide} source={require('./Sounds.png')}/>
                <Text style={styles.actionText}>Sounds</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </React.Fragment>
    )
  }
}

// const AppIntegration = Reactotron.overlay(App)
//
// export default AppIntegration


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  hover: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    // marginTop: -(height - 20),
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '1.5%',
    marginTop: '10%'
  },
  actionSide: {
    marginTop: '6%'
  },
  button: {
    marginBottom: '100%',
    paddingLeft: '2%',
    textAlign: 'center'
  },
  ActionName: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'left',
    opacity: .5
  },
  close: {
    marginLeft: '2.5%',
    paddingTop: '5%',
    opacity: .5
  },
  shootPicture: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: '4%',
    marginBottom: '2%'
  },
  actionText: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    opacity: .5
  },
  imgShoot: {
    width: 52,
    height: 52,
    marginBottom: '10%',
    opacity: .8
  },
  imgSide: {
    width: 38,
    height: 38
  },
})
