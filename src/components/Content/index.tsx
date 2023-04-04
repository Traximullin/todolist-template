import { FC, ReactNode } from "react"
import { Layout } from 'antd';
import "./index.scss"
import { IContent } from "./interface";

const { Content: ContentLayout } = Layout

const Content: FC<IContent> = (props) => {
    const { children } = props
    
    return (
        <ContentLayout className="content">
            {children}
        </ContentLayout>
    )
}

export default Content