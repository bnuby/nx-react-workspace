import { useEffect } from "react";
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

    return <div />
};

export default RouteFallback;