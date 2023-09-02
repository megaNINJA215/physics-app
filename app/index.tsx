import { useState } from "react";
import { StyleSheet, View, Dimensions, StatusBar, SafeAreaView, Animated, Platform } from "react-native";
import Header from './components/header';
import SettingsMenu from './components/settingsMenu';
import ConstAndVariable from './components/constAndVariable';
import SubjectList from './components/subjectList';

export default function Page() {

  const [isDarkMode, setDarkMode] = useState(true);
  const [isPolish, setPolishLanguage] = useState(true);
  const [settingsAnimationValue] = useState(new Animated.Value(-200));

  function settingsToggle(isSettingsVisible: boolean) {
    Animated.timing(settingsAnimationValue, {
      toValue: isSettingsVisible ? 0 : -200,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }

  const styles = StyleSheet.create({
    main: {
      position: "absolute",
      width: "100%",
      height: Dimensions.get('window').height + (Platform.OS === 'ios' ? 0 : StatusBar.currentHeight),
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isDarkMode ? '#1f1f1f' : '#f1f1f1',
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
  });

  return (
    /* wzięcie wszystkiego w SafeAreaView zamiast View pozostawia pasek na dole IOS*/
    <View style={styles.main}>
      <SafeAreaView>
        <StatusBar
          translucent={true}
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          animated={false} hidden={false}
          backgroundColor={isDarkMode ? '#1f1f1f' : '#f1f1f1'}
        />
      </SafeAreaView>

      <SettingsMenu
        toggle={settingsToggle}
        animationValue={settingsAnimationValue}
        isDarkMode={isDarkMode}
        isPolish={isPolish}
        setDarkMode={setDarkMode}
        setPolishLanguage={setPolishLanguage}
      />
      <Header settingsToggle={settingsToggle} isDarkMode={isDarkMode} isPolish={isPolish} />
      <ConstAndVariable isDarkMode={isDarkMode} />
      <SubjectList />
    </View>
  );
}


