import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        margin: Dimensions.get("window").width / 50,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
    ,title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        marginTop: 20
    }
});