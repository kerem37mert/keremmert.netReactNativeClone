import { View, Text } from "react-native";
import styles from "./Navbar.style";

function Navbar(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

export default Navbar;