import { View, StyleSheet, Text, FlatList, Pressable, Dimensions, SafeAreaView } from "react-native";
import { router } from "expo-router";

export default function SubjectList({

}) {

    const styles = StyleSheet.create({
        subject: {
            backgroundColor: global.isDarkMode ? '#35373a' : '#cdcdcd',
            width: Dimensions.get('window').width - 30,
            height: (Dimensions.get('window').width - 30) / 4.5,
            marginTop: 10,
            marginBottom: 5,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        name: {
            color: global.isDarkMode ? '#f1f1f1' : '#1f1f1f',
            fontSize: 24,
            fontWeight: '600'
        }
    })

    const subjects = global.isPolish ? [
        { lang: "PL", page: "ast", title: "Astrofizyka" },
        { lang: "PL", page: "elm", title: "Elektromagnetyzm" },
        { lang: "PL", page: "els", title: "Elektrostatyka" },
        { lang: "PL", page: "wav", title: "Fale mechaniczne" },
        { lang: "PL", page: "nuc", title: "Fizyka jądrowa" },
        { lang: "PL", page: "qua", title: "Fizyka kwantowa" },
        { lang: "PL", page: "hyd", title: "Hydrostatyka" },
        { lang: "PL", page: "mag", title: "Magnetyzm" },
        { lang: "PL", page: "opt", title: "Optyka" },
        { lang: "PL", page: "wap", title: "Praca i moc" },
        { lang: "PL", page: "rad", title: "Promieniowanie" },
        { lang: "PL", page: "cur", title: "Prąd" },
        { lang: "PL", page: "har", title: "Ruch harmoniczny" },
        { lang: "PL", page: "rot", title: "Ruch obrotowy" },
        { lang: "PL", page: "tra", title: "Ruch postępowy" },
        { lang: "PL", page: "for", title: "Siła" },
        { lang: "PL", page: "tor", title: "Teoria względności" },
        { lang: "PL", page: "the", title: "Termodynamika" }
    ] : [
        { lang: "EN", page: "ast", title: "Astrophysics" },
        { lang: "EN", page: "cur", title: "Current" },
        { lang: "EN", page: "elm", title: "Electromagnetism" },
        { lang: "EN", page: "els", title: "Electrostatics" },
        { lang: "EN", page: "for", title: "Force" },
        { lang: "EN", page: "har", title: "Harmonic motion" },
        { lang: "EN", page: "hyd", title: "Hydrostatics" },
        { lang: "EN", page: "mag", title: "Magnetism" },
        { lang: "EN", page: "wav", title: "Mechanical waves" },
        { lang: "EN", page: "nuc", title: "Nuclear physics" },
        { lang: "EN", page: "opt", title: "Optics" },
        { lang: "EN", page: "qua", title: "Quantum physics" },
        { lang: "EN", page: "rad", title: "Radiation" },
        { lang: "EN", page: "rot", title: "Rotational motion" },
        { lang: "EN", page: "tor", title: "Theory of relativity" },
        { lang: "EN", page: "the", title: "Thermodynamics" },
        { lang: "EN", page: "tra", title: "Translational motion" },
        { lang: "EN", page: "wap", title: "Work and power" }
    ];

    return (

        <View style={{ flex: 13 }}>
            <SafeAreaView>
                <FlatList
                    data={subjects}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={styles.subject} onPress={() => {
                                router.push('/pages/subjects/' + item.lang + '/' + item.page)
                            }}>
                                <Text style={styles.name}>{item.title}</Text>
                            </Pressable>
                        )
                    }}
                />
            </SafeAreaView>
        </View>
    );
};
