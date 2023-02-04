import { TouchableOpacity, Text } from "react-native";
import styles from "./ShortContent.style";

function ShortContent(props){
    return(
        <TouchableOpacity style={styles.container}  onPress={props.click()}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default ShortContent;