import { clearItem, useAppDispatch, useAppSelector } from "@react-workspace/placeholder-lib";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../constants/routes";
import PageHeader from "../components/PageHeader";

const PlaceholderDetailScreen = () => {

    const { data } = useAppSelector(s => s.placeholder);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const back = () => {
        dispatch(clearItem());
        navigate(ROUTE_PATH.ROOT);
    }

    if (!data) {
        return <View>
            Loading
        </View>;
    }

    return <PageHeader
        title="Detail Page"
    >
        <ScrollView
            style={styles.container}
        >
            <Pressable
                style={styles.backButton}
                onPress={back}
            >
                <Text
                    style={styles.buttonText}
                >Back</Text>
            </Pressable>
            <View style={styles.spacing} />
            <Text style={styles.title}>
                ({data.id}) {data.title}
            </Text>
            <View style={styles.spacing} />
            <Text style={styles.caption}>
                Created by {data.userId}
            </Text>
            <View style={styles.spacing} />
            <Text style={styles.body}>
                {data.body}
                {data.body}
                {data.body}
                {data.body}
                {data.body}
            </Text>
        </ScrollView>
    </PageHeader>
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    backButton: {
        width: 90,
        backgroundColor: '#0099FF',
        borderRadius: 10,
        borderColor: '#00000088',
        borderWidth: 2,
        padding: 15
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center'
    },
    spacing: {
        height: 5
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: '600'
    },
    body: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '200'
    },
    caption: {
        fontSize: 14,
        fontWeight: '400',
        color: '#727272'
    }
})

export default PlaceholderDetailScreen;