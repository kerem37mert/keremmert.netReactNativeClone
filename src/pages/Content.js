import React from "react";
import { Text } from "react-native";
import Body from "../components/Body";
import Navbar from "../components/Navbar";

const Content = (props) => {
    return(
        <Body>
            <Navbar title="Kerem Mert" />
            <Text>{props.route.params.data}</Text>
        </Body>
    );
}

export default Content;