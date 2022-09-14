import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import Icon from 'react-native-vector-icons/FontAwesome';

const HumariApplication = () => {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={styles.docker}>
      <Button
        color="#db0d17"
        onPress={toggleBottomNavigationView}
        title="Let's Call it"
      />

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <ImageBackground
          style={styles.bottomstyling}
          source={{
            uri: 'https://images.pexels.com/photos/1390433/pexels-photo-1390433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 20,
              fontSize: 20,
              color: '#f5f6f7',
            }}>
            Heyoo!
          </Text>
          <Text
            style={{
              textAlign: 'center',
              padding: 20,
              fontSize: 20,
              color: '#f5f6f7',
            }}>
            EDUCBA
          </Text>
          <Text
            style={{
              textAlign: 'center',
              padding: 20,
              fontSize: 20,
              color: '#f5f6f7',
            }}>
            Visit us on: www.EDUCBA.com
          </Text>
        </ImageBackground>
      </BottomSheet>
    </SafeAreaView>
  );
};
export default HumariApplication;

const styles = StyleSheet.create({
  docker: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomstyling: {
    backgroundColor: '#fff',
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
