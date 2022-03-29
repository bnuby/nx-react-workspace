import { PlaceholderDataType, setItem, useAppDispatch } from '@react-workspace/placeholder-lib';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { ROUTE_PATH } from '../constants/routes';

const PlaceholderDiv = styled.div`
    padding: 20px 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        background-color: grey;
        color: whitesmoke;
        border-radius: 8px;
    }

    .placeholder-title {
        font-size: 18px;
        font-weight: 900;
    }

    .placeholder-desc {
        font-size: 15px;
        font-weight: 800;
    }

    .placeholder-subtitle {
        font-size: 10px;
        font-weight: 200;
    }
`;


type PlaceholderViewProps = {
    data: PlaceholderDataType;
};

const PlaceholderView =  ({ data }: PlaceholderViewProps) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onPress = () => {
        dispatch(setItem(data));
        navigate(ROUTE_PATH.DETAIL);
    };

    return <PlaceholderDiv
        onClick={onPress}
    >
        <span className="placeholder-title">
            {`(${data.id}) ${data.title}`}
        </span>
        <span className="placeholder-desc">
            {data.body}
        </span>
        <span className="placeholder-subtitle">
            Created By {`${data.userId}`}
        </span>
    </PlaceholderDiv>
};

export default PlaceholderView;