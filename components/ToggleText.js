import { View, Text, Button } from "react-native";
import { useState } from "react";

function ToggleText () {

    const [isvisible, setIsvisible] = useState(true);

    const changeVisible = () => {
        setIsvisible(!isvisible);
    }

    return (
        <View>
            <Button title={ isvisible ? 'esconde texto' : 'ver texto'} onPress={changeVisible} />
            { isvisible && <Text> texto prueba </Text> }
        </View>
    );
}

export default ToggleText;