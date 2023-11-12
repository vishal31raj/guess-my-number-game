import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    borderWidth: Platform.select({ android: 1, ios: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: '80%',
    width: 300
  },
});
