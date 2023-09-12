import { View, Pressable, StyleSheet, Dimensions, Text } from "react-native";
import { router } from 'expo-router';

export default function ConstAndVariable() {

    const styles = StyleSheet.create({
        constAndVariable: {
            flex: 2,
            width: Dimensions.get('window').width - 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 3,
            borderColor: '#7a8186',
        },
        button: {
            backgroundColor: global.isDarkMode ? '#2d2f32' : '#b8b8b8',
            borderRadius: 5,
            height: '80%',
            width: '45%',
            margin: '2%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        name: {
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            fontSize: 24,
            fontWeight: '600'
        }
    })

    return (
        <View style={styles.constAndVariable}>
            <Pressable style={styles.button} onPress={() => {
                router.push('/pages/constants');
            }}><Text style={styles.name}>{global.isPolish ? "Stałe" : "Constants"}</Text></Pressable>
            <Pressable style={styles.button} onPress={() => {
                router.push('/pages/variables');
            }}><Text style={styles.name}>{global.isPolish ? "Zmienne" : "Variables"}</Text></Pressable>
        </View>
    );
};
