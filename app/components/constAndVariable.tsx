import { View, Pressable, StyleSheet, Dimensions } from "react-native";

export default function ConstAndVariable({
    isDarkMode = true
}) {

    const styles = StyleSheet.create({
        constAndVariable: {
            flex: 2,
            width: Dimensions.get('window').width - 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 3,
            borderColor: isDarkMode ? '#35373a' : '#c4c4c4',
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
    })

    return (
        <View style={styles.constAndVariable}>
            <Pressable style={styles.const} onPress={() => { console.log("open const"); }}></Pressable>
            <Pressable style={styles.variable} onPress={() => { console.log("open variable"); }}></Pressable>
        </View>
    )
}


