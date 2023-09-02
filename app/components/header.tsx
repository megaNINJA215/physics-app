import { View, StyleSheet, Pressable, Image, Text } from "react-native";

export default function Header({
    settingsToggle = (x: boolean) => { },
    isDarkMode = true,
    isPolish = true
}) {

    const styles = StyleSheet.create({
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
            backgroundColor: isDarkMode ? '#35373a' : '#cdcdcd',
            justifyContent: 'center',
            alignItems: 'center',
        },
        search: {
            width: 40,
            height: 40,
            margin: 25,
            borderRadius: 20,
            backgroundColor: isDarkMode ? '#35373a' : '#cdcdcd',
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: isDarkMode ? '#f1f1f1' : '#1f1f1f'
        },
    });


    return (
        <View style={styles.header}>
            <Pressable onPress={() => {
                settingsToggle(true);
            }}
                style={styles.settings}>
                <Image style={{ width: 30, height: 30 }} source={require('../icons/settings.png')} />
            </Pressable>

            <Text style={styles.title}>{isPolish ? "Fizyka" : "Physics"}</Text>

            <Pressable onPress={() => {
                console.log("open search");
            }}
                style={styles.search}>
                <Image style={{ width: 25, height: 25 }} source={require('../icons/search.png')} />
            </Pressable>
        </View>
    );
};