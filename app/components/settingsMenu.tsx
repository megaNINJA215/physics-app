import { Animated, Pressable, View, StyleSheet, Image, Text } from "react-native";
import Constants from 'expo-constants';
import { router } from 'expo-router';
const statusBarHeight = Constants.statusBarHeight;

export default function SettingsMenu({
    toggle = (x: boolean) => { },
    animationValue = new Animated.Value(-200),
    setDarkMode = (x: boolean) => { },
    setPolishLanguage = (x: boolean) => { }
}) {

    const styles = StyleSheet.create({
        settingsMenu: {
            display: 'flex',
            width: 200,
            height: 200,
            position: 'absolute',
            zIndex: 1,
            top: statusBarHeight + 5,
            left: -200,
            opacity: 1,
            borderRadius: 16,
            backgroundColor: global.isDarkMode ? '#35373a' : '#cdcdcd',
            borderColor: global.isDarkMode ? '#2d2f32' : '#b8b8b8',
            borderWidth: 2
        },
        element: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderTopWidth: 1,
            borderColor: '#7a8186',
        },
        text: {
            fontSize: 20,
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
        },
        darkModeCircle: {
            backgroundColor: global.isDarkMode ? '#1f1f1f' : '#f1f1f1',
            width: 30,
            height: 30,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: global.isDarkMode ? '#f1f1f1' : '#1f1f1f'
        },
        close: {
            flex: 1,
            borderTopLeftRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: { flex: 3, alignItems: 'center', justifyContent: 'center' },
        titleText: { fontSize: 20, color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f' }
    });

    return (
        <Animated.View style={[styles.settingsMenu, { left: animationValue }]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Pressable onPress={() => {
                    toggle(false);
                }} style={styles.close}>
                    <Image style={{ width: 25, height: 25 }} source={require('../icons/left.png')} />
                </Pressable>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{global.isPolish ? "Ustawienia" : "Settings"}</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            <Pressable
                style={styles.element}
                onPress={() => {
                    setDarkMode(!global.isDarkMode);
                }}>
                <View style={{ flex: 8, alignItems: 'center' }}>
                    <Text style={styles.text}>{global.isPolish ? "Tryb Ciemny" : "Dark Mode"}:</Text>
                </View>
                <View style={{ flex: 3, alignItems: 'center' }}>
                    <View style={styles.darkModeCircle}></View>
                </View>
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => {
                    setPolishLanguage(!global.isPolish);
                }}>
                <Text style={styles.text}>{global.isPolish ? "Język: Polski" : "Language: English"}</Text>
            </Pressable>
            <Pressable
                style={styles.element}
                onPress={() => {
                    router.push('/pages/informations');
                }}>
                <View style={{ flex: 4, alignItems: 'center' }}>
                    <Text style={styles.text}>{global.isPolish ? "Informacje" : "Informations"}</Text>
                </View>
            </Pressable>
        </Animated.View>
    );
};
