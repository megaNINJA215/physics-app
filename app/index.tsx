import { StyleSheet, Text, View } from "react-native";
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

export default function Page() {
  return (
    <View style={styles.container}>
      <MathJaxSvg>
        {'$$x^2+(y-\\sqrt[3]{x^2})^2=1$$'}
      </MathJaxSvg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 960,
    padding: 24,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
});
