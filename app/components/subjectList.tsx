import { View, StyleSheet, Text, FlatList, Pressable, Dimensions, SafeAreaView } from "react-native";

export default function SubjectList({

}) {

    const styles = StyleSheet.create({
        subject: {
            backgroundColor: '#00ffff',
            width: Dimensions.get('window').width - 30,
            height: (Dimensions.get('window').width - 30) / 4.5,
            marginTop: 10,
            marginBottom: 5,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        }
    })

    const subjects = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

    return (

        <View style={{ flex: 13 }}>
            <SafeAreaView>
                <FlatList
                    data={subjects}
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
            </SafeAreaView>
        </View>
    );
};
