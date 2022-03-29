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
    max-height: 100%;

    .header-text {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .content {
        flex-grow: 1;
        overflow: overlay;
    }
`;

const PageHeader = ({title, children}: PageHeaderProps) => {
    return (<View>
        <span className="header-text">
            {title}
        </span>
        <div className="content">
            {children}
        </div>
    </View>);
};

export default PageHeader;