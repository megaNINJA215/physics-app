import { Dimensions, Platform, StatusBar, StyleSheet, View, Text, Pressable, Image, SafeAreaView } from "react-native";
import { router } from 'expo-router';

export default function Page() {


    const styles = StyleSheet.create({
        main: {
            position: "absolute",
            width: "100%",
            height: Dimensions.get('window').height + (Platform.OS === 'ios' ? 0 : StatusBar.currentHeight),
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: global.isDarkMode ? '#1f1f1f' : '#f1f1f1',
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
        header: {
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderColor: '#7a8186',
            borderRadius: 20
        },
        body: {
            flex: 13,
            justifyContent: 'center'
        },
        headerText: {
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            fontSize: 24,
            width: Dimensions.get('window').width - 176,
            textAlign: 'center'

        }, headerButton: {
            height: 24,
            width: 24,
            marginLeft: 32,
            marginRight: 32
        },
        text: {
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            fontSize: 16
        }
    });

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
            <View style={styles.header}>
                <View>
                    <Pressable
                        onPress={() => {
                            router.push('/');
                        }}>
                        <Image source={require("../../../icons/left.png")} style={styles.headerButton}></Image>
                    </Pressable>
                </View>
                <Text style={styles.headerText}>Work and power</Text>
                <View style={styles.headerButton}></View>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Coming soon...</Text>
            </View>
        </View>
    );
}


