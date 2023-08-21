import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { Dimensions } from 'react-native';

export default function Page() {


  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Pressable onPress={() => { console.log("open settings"); }}>
          <View style={styles.settings}></View>
        </Pressable>
        <Text style={styles.title}>Fizyka</Text>
        <Pressable onPress={() => { console.log("open search"); }}>
          <View style={styles.search}></View>
        </Pressable>
      </View>

      <View style={styles.constAndVariable}>
        <Pressable style={styles.const} onPress={() => { console.log("open const"); }}></Pressable>
        <Pressable style={styles.variable} onPress={() => { console.log("open variable"); }}></Pressable>
      </View>

      <View style={styles.subjects}>
        <FlatList
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
          renderItem={({ item }) => {
            return (
              <Pressable onPress={() => {
                console.log("open subject: " + item);
                console.log((Dimensions.get('window').height / 8) * 0.1);
              }}>
                <View style={styles.subject}>
                  <Text>{item}</Text>
                </View>
              </Pressable>
            )
          }}
        />
      </View>
    </View >
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
    borderRadius: 20,
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
  subjects: {
    flex: 13,
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
  }
});
