import { SafeAreaView, Text } from "react-native";
import styles from "./Body.style";

function Body(props){
    return(
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    );
}

export default Body;