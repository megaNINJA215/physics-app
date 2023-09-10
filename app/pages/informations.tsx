import { Pressable, StyleSheet, View, Text, Image, Platform, Linking, StatusBar, SafeAreaView, Dimensions } from "react-native";
import { router } from "expo-router";
import '../global';

export default function Page() {

    const styles = StyleSheet.create({
        main: {
            position: "absolute",
            width: "100%",
            height: Dimensions.get('window').height + (Platform.OS === 'ios' ? 0 : StatusBar.currentHeight),
            backgroundColor: global.isDarkMode ? '#1f1f1f' : '#f1f1f1',
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
        title: {
            height: 75,
            backgroundColor: global.isDarkMode ? '#1f1f1f' : '#f1f1f1',
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        titleText: {
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            fontSize: 30,
        },
        closeButton: {
            height: 32,
            width: 32,
        },
        titleSeparator: {
            backgroundColor: '#7a8186',
            alignSelf: 'center',
            borderColor: '#7a8186',
            borderWidth: 1,
            width: '95%',
        },
        separator: {
            backgroundColor: '#7a8186',
            alignSelf: 'center',
            borderColor: '#7a8186',
            borderWidth: 1,
            width: '90%',
        },
        infoPart: {
            backgroundColor: global.isDarkMode ? '#1f1f1f' : '#f1f1f1',
            height: '100%'
        },
        text: {
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            fontSize: 16,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: '7.5%',
            paddingRight: '7.5%'
        },
        githubButton: {
            width: '60%',
            marginLeft: '20%',
            height: 50,
            backgroundColor: global.isDarkMode ? '#35373a' : '#bdbdbd',
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
        },
        githubImages: {
            width: 24,
            height: 24,
        },
        githubText: {
            fontSize: 24,
            fontWeight: '500',
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            marginLeft: 5,
            marginRight: 20
        }
    })
    return (
        <View style={styles.main}>
            <SafeAreaView>
                <StatusBar
                    translucent={true}
                    barStyle={global.isDarkMode ? "light-content" : "dark-content"}
                    animated={false} hidden={false}
                    backgroundColor={global.isDarkMode ? '#1f1f1f' : '#f1f1f1'}
                />
            </SafeAreaView>
            <View
                style={styles.title}>
                <Pressable
                    onPress={() => {
                        router.back();
                    }}>
                    <Image source={require("../icons/cross.png")} style={styles.closeButton}></Image>
                </Pressable>
                <Text style={styles.titleText}>{global.isPolish ? "Informacje" : "Informations"}</Text>
                <View style={styles.closeButton}></View>
            </View>
            <View style={styles.infoPart}>
                <View style={styles.titleSeparator}></View>
                <Text style={styles.text}>{global.isPolish ?
                    "Wersja aplikacji: Pre-alpha." :
                    "App version: Pre-alpha."}</Text>
                <View style={styles.separator}></View>
                <Text style={styles.text}>{global.isPolish ?
                    "Twórczynią grafik jest utalentowana artystka Videlline." :
                    "The creator of the graphics is talented artist Videlline."}</Text>
                <View style={styles.separator}></View>
                <Text style={styles.text}>{global.isPolish ?
                    "Aby zgłosić błędy, prześlij je na GitHubie:" :
                    "To report errors, please submit them on GitHub:"}</Text>
                <Pressable
                    style={styles.githubButton}
                    onPress={async () => {
                        await Linking.openURL("https://github.com/megaNINJA215/physics-app/issues");
                    }}>
                    <Image source={global.isDarkMode ? require("../icons/github-light.png") : require("../icons/github-dark.png")} style={styles.githubImages}></Image>
                    <Text style={styles.githubText}>Github</Text>
                    <Image source={global.isDarkMode ? require("../icons/link-light.png") : require("../icons/link-dark.png")} style={styles.githubImages}></Image>
                </Pressable>
                <View style={styles.separator}></View>
            </View>
        </View>
    );
};
