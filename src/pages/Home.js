import React from "react";
import { FlatList } from "react-native";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import ShortContent from "../components/ShortContent";
import contents from "../../contents.json";

const Home = (props) =>  {

    const getContent = () => {
        props.navigation.navigate("ContentScreen",{data:5});
    }

    return(
        <Body>
            <FlatList 
                ListHeaderComponent={<Navbar title="Kerem Mert" />}
                keyExtractor = {item => item.id}
                data={contents} 
                renderItem={
                    ({item}) => 
                        <ShortContent 
                            title={item.title} 
                            text={item.description} 
                            click={() => getContent}
                        /> 
                } 
            /> 
        </Body>
    );
}

export default Home;