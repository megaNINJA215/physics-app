import { useState } from "react";
import { StyleSheet, View, Text, Pressable, FlatList, Dimensions, StatusBar, SafeAreaView, Image } from "react-native";

export default function Page() {

  const [isSettingSVisible, setSettingSVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const [isPolish, setPolishLanguage] = useState(true);

  return (
    <View style={[styles.main, { backgroundColor: isDarkMode ? '#1f1f1f' : '#f1f1f1' }]}>
      <SafeAreaView style={{ backgroundColor: isDarkMode ? '#1f1f1f' : '#f1f1f1' }}>
        <StatusBar
          translucent={true}
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          animated={false} hidden={false}
          backgroundColor={isDarkMode ? '#1f1f1f' : '#f1f1f1'}
        />
      </SafeAreaView>
      <View style={[styles.settingsMenu, { left: isSettingSVisible ? 0 : -200, backgroundColor: isDarkMode ? '#35373a' : '#cdcdcd' }]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Pressable onPress={() => {
            setSettingSVisible(false);
          }} style={{ flex: 1, borderTopLeftRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 25, height: 25 }} source={require('./icons/left.png')} />
          </Pressable>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: isDarkMode ? '#f1f1f1' : '#1f1f1f' }}>{isPolish ? "Ustawienia" : "Settings"}</Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1, borderColor: '#7a8186' }}>
          <Pressable
            style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              setDarkMode(!isDarkMode);
            }}>
            <View style={{ flex: 8, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: isDarkMode ? '#f1f1f1' : '#1f1f1f' }}>{isPolish ? "Tryb Ciemny" : "Dark Mode"}:</Text>
            </View>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ backgroundColor: isDarkMode ? '#1f1f1f' : '#f1f1f1', width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: isDarkMode ? '#f1f1f1' : '#1f1f1f' }}></View>
            </View>
          </Pressable>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1, borderColor: '#7a8186' }}>
          <Pressable
            style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => {
              setPolishLanguage(!isPolish);
            }}>
            <Text style={{ fontSize: 20, color: isDarkMode ? '#f1f1f1' : '#1f1f1f' }}>{isPolish ? "Język: Polski" : "Language: English"}</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1, borderColor: '#7a8186' }}>
          <Pressable
            style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              console.log('open informations');
            }}>
            <View style={{ flex: 4, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: isDarkMode ? '#f1f1f1' : '#1f1f1f' }}>{isPolish ? "Informacje" : "Informations"}</Text>
            </View>
          </Pressable>

        </View>
      </View>

      <View style={styles.header}>

        <View style={[styles.settings, { backgroundColor: isDarkMode ? '#35373a' : '#cdcdcd' }]}>
          <Pressable onPress={() => {
            setSettingSVisible(true);

          }}
            style={{ width: '100%', height: '100%', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 30, height: 30 }} source={require('./icons/settings.png') /*isDarkMode ? require('./icons/light/settings.png') : require('./icons/dark/settings.png') */} />
          </Pressable>
        </View>

        <Text style={[styles.title, { color: isDarkMode ? '#f1f1f1' : '#1f1f1f' }]}>{isPolish ? "Fizyka" : "Physics"}</Text>
        <View style={[styles.search, { backgroundColor: isDarkMode ? '#35373a' : '#cdcdcd' }]}>
          <Pressable onPress={() => {
            console.log("open search");
          }}
            style={{ width: '100%', height: '100%', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 25, height: 25 }} source={require('./icons/search.png') /* isDarkMode ? require('./icons/light/search.png') : require('./icons/dark/search.png')*/} />
          </Pressable>
        </View>
      </View>

      <View style={[styles.constAndVariable, , { borderColor: isDarkMode ? '#35373a' : '#c4c4c4' }]}>
        <Pressable style={styles.const} onPress={() => { console.log("open const"); }}></Pressable>
        <Pressable style={styles.variable} onPress={() => { console.log("open variable"); }}></Pressable>
      </View>

      <View style={{ flex: 13 }}>
        <FlatList
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
          renderItem={({ item }) => {
            return (
              <Pressable style={styles.subject} onPress={() => {
                console.log("open subject: " + item);
              }}>
                <Text>{item}</Text>
              </Pressable>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settings: {
    width: 40,
    height: 40,
    margin: 25,
    borderRadius: 20,
  },
  search: {
    width: 40,
    height: 40,
    margin: 25,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  constAndVariable: {
    flex: 2,
    width: Dimensions.get('window').width - 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 3,
  },
  const: {
    backgroundColor: '#ff0000',
    borderRadius: 5,
    height: '80%',
    width: '45%',
    margin: '2%',
  },
  variable: {
    backgroundColor: '#ff6a00',
    borderRadius: 5,
    height: '80%',
    width: '45%',
    margin: '2%',
  },
  subject: {
    backgroundColor: '#00ffff',
    width: Dimensions.get('window').width - 30,
    height: (Dimensions.get('window').width - 30) / 4.5,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsMenu: {
    display: 'flex',
    width: 200,
    height: 200,
    position: 'absolute',
    zIndex: 1,
    top: Dimensions.get('window').height / 32 - 20,
    left: 0,
    opacity: 1,
    borderRadius: 16,
  }
});
