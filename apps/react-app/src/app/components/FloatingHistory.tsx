import React from 'react';
import styled from "styled-components";
import { clearHistory, useAppDispatch, useAppSelector } from "@react-workspace/placeholder-lib";

const Pressable = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1000;
    bottom: 70px;
    right: 30px;
    width: 50px;
    height: 50px;                                                                                            
    border-radius: 50%;
    background-color: #FFF;
    box-shadow: 2px 2px 5px black;


    text-align: center;
    color: #000;
    font-weight: bold;
    font-size: 20px;
`;


const FloatingHistory = () => {

    const history = useAppSelector(s => s.history);
    const dispatch = useAppDispatch();

    const onPress = () => {
        dispatch(clearHistory());
    }

    return <Pressable 
        onClick={onPress}
    >
        {history.ids.length}
    </Pressable>
};

export default FloatingHistory;