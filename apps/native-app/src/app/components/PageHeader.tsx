import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

type PageHeaderProps = {
    title: string;
    children?: ReactNode
}
const PageHeader = ({title, children}: PageHeaderProps) => (<View style={styles.container}>
    <Text style={styles.title}>
        {title}
    </Text>
    {children}
</View>);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default PageHeader;