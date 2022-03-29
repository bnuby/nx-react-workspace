import { ReactNode } from "react";
import styled from "styled-components";

type PageHeaderProps = {
    title: string;
    children?: ReactNode
}

const View = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;

    .header-text {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

const PageHeader = ({title, children}: PageHeaderProps) => {
    return (<View>
        <span className="header-text">
            {title}
        </span>
        {children}
    </View>);
};

export default PageHeader;