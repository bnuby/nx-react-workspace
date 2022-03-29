import { useEffect } from "react";
import { View } from "react-native";
import { useNavigate } from "react-router";


type RouteFallbackProps = {
    path: string;
};
const RouteFallback = ({ path }: RouteFallbackProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        // fallback to root
        navigate(path);
    }, [navigate, path]);

    return <View />
};

export default RouteFallback;