import { clearHistory, useAppDispatch, useAppSelector } from "@react-workspace/placeholder-lib";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const FloatingHistory = () => {

    const history = useAppSelector(s => s.history);
    const dispatch = useAppDispatch();

    const onPress = () => {
        dispatch(clearHistory());
    }

    return <Pressable 
        style={styles.floatingView}
        onPress={onPress}
    >
        <Text style={styles.text}>
            {history.ids.length}
        </Text>
    </Pressable>
};

const styles = StyleSheet.create({
    floatingView: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',                                     
        bottom: 70,                                                    
        right: 10, 
        width: 50,
        height: 50,                                                                                            
        borderRadius: 30,
        backgroundColor: '#FFF',
        elevation: 5
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default FloatingHistory;