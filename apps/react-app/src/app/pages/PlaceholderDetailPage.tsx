import { useNavigate } from "react-router";
import styled from "styled-components";
import { clearItem, useAppDispatch, useAppSelector } from "@react-workspace/placeholder-lib";

import PageHeader from "../components/PageHeader";
import { ROUTE_PATH } from "../constants/routes";

const ScrollView = styled.div`
    overflow: overlay;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
`;

const Spacing = styled.div`
    height: 5px;
`;

const View = styled.div`
    &.title {
        margin-top: 20px;
        font-size: 30px;
        font-weight: 600;
    }

    &.body {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 200;
    }

    &.caption {
        font-size: 14px;
        font-weight: 400;
        color: #727272;
    }
`;

const Pressable = styled.div`
    width: 90px;
    background-color: #0099FF;
    border-radius: 10px;
    border-color: #00000088;
    border-width: 2;
    padding: 15px;
    color: #FFF;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #0163a5;
    }
`;

const PlaceholderDetailPage = () => {

    const { data } = useAppSelector(s => s.placeholder);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const back = () => {
        dispatch(clearItem());
        navigate(ROUTE_PATH.ROOT);
    }

    if (!data) {
        return <View >
            Loading..
        </View>;
    }

    return <PageHeader
        title="Detail Page"
    >
        <ScrollView>
            <Pressable
                onClick={back}
            >
                Back
            </Pressable>
            <Spacing />
            <View className='title'>
                ({data.id}) {data.title}
            </View>
            <Spacing />
            <View className='caption'>
                Created by {data.userId}
            </View>
            <Spacing />
            <View className='body'>
                {data.body}
                {data.body}
                {data.body}
                {data.body}
                {data.body}
            </View>
        </ScrollView>
    </PageHeader>
};

export default PlaceholderDetailPage;