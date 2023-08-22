import { useState } from "react";
import { StyleSheet, View, Text, Pressable, FlatList, Platform, Dimensions, StatusBar, SafeAreaView } from "react-native";

export default function Page() {

  const [isSettingSVisible, setSettingSVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const [isPolish, setPolishLanguage] = useState(true);

  return (
    <View style={[styles.main, { backgroundColor: isDarkMode ? '#555555' : '#ffffff' }]}>
      <SafeAreaView style={{ backgroundColor: isDarkMode ? '#555555' : '#ffffff' }}>
        <StatusBar translucent={true} barStyle={isDarkMode ? "light-content" : "dark-content"} animated={false} hidden={false} backgroundColor={isDarkMode ? '#555555' : '#ffffff'} />
      </SafeAreaView>
      <View style={[styles.settingsMenu, { left: isSettingSVisible ? 0 : -200 }]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Pressable onPress={() => {
            setSettingSVisible(false);
          }} style={{ flex: 1, borderTopLeftRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'red', fontSize: 40, fontWeight: '400' }}>X</Text>
          </Pressable>
          <View style={{ flex: 3, borderLeftWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>{isPolish ? "Ustawienia" : "Settings"}</Text>
          </View>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1 }}>
          <Pressable
            style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              setDarkMode(!isDarkMode);
            }}>
            <View style={{ flex: 8, alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>{isPolish ? "Tryb Ciemny" : "Dark Mode"}:</Text>
            </View>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ backgroundColor: isDarkMode ? 'black' : 'white', width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: isDarkMode ? 'white' : 'black' }}></View>
            </View>
          </Pressable>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1 }}>
          <Pressable
            style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => {
              setPolishLanguage(!isPolish);
            }}>
            <Text style={{ fontSize: 20 }}>{isPolish ? "Język" : "Language"}: {isPolish ? "Polski" : "English"}</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1 }}>
          <Pressable
            style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              console.log('open informations');
            }}>
            <View style={{ flex: 4, alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>{isPolish ? "Informacje" : "Informations"}</Text>
            </View>
          </Pressable>

        </View>
      </View>

      <View style={styles.header}>

        <View style={styles.settings}><Pressable onPress={() => {
          setSettingSVisible(true);

        }}
          style={{ width: '100%', height: '100%', borderRadius: 15 }}></Pressable>
        </View>

        <Text style={styles.title}>{isPolish ? "Fizyka" : "Physics"}</Text>
        <View style={styles.search}>
          <Pressable onPress={() => {
            console.log("open search");
          }}
            style={{ width: '100%', height: '100%', borderRadius: 15 }}></Pressable>
        </View>
      </View>

      <View style={styles.constAndVariable}>
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
    width: 30,
    height: 30,
    margin: 30,
    backgroundColor: '#4cff00',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  search: {
    width: 30,
    height: 30,
    margin: 30,
    backgroundColor: '#ffd800',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  constAndVariable: {
    flex: 2,
    width: Dimensions.get('window').width - 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: '#000000',
  },
  const: {
    backgroundColor: '#ff0000',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    height: '80%',
    width: '45%',
    margin: '2%',
  },
  variable: {
    backgroundColor: '#ff6a00',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
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
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsMenu: {
    display: 'flex',
    width: 200,
    height: 200,
    backgroundColor: '#dddddd',
    position: 'absolute',
    zIndex: 1,
    top: Dimensions.get('window').height / 32 - 15,
    left: 0,
    opacity: 1,
    borderRadius: 16,
  }
});
