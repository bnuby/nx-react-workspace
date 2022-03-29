import { PlaceholderDataType, setItem, useAppDispatch } from "@react-workspace/placeholder-lib";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../constants/routes";

type PlaceholderViewProps = {
    data: PlaceholderDataType;
}

const PlaceholderView = ({data}: PlaceholderViewProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onPress = () => {
        dispatch(setItem(data));
        navigate(ROUTE_PATH.DETAIL);
    }

    return <Pressable 
        style={styles.container} 
        onPress={onPress}
    >
        <Text
            style={styles.title}
        >
            {`(${data.id}) ${data.title}`}
        </Text>
        <Text style={styles.desc}>
            {data.body}
        </Text>
        <Text
            style={styles.subtitle}
        >
            Created By {data.userId}
        </Text>
    </Pressable>
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 5
    },
    desc: {
        fontSize: 15,
        fontWeight: '800'
    },
    title: {
        fontSize: 18,
        fontWeight: "900"
    },
    subtitle: {
        fontSize: 10,
        fontWeight: "200"
    }
})

export default PlaceholderView;