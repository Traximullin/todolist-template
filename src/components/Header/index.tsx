import { FC } from "react"
import { Layout } from 'antd';
import "./index.scss"
const { Header: HaederLayout } = Layout

const Header: FC = () => {
    return (
        <HaederLayout className="header">
            Список дел
        </HaederLayout>
    )
}

export default Header