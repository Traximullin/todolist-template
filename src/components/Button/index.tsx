import { FC } from "react"
import { Button as AntButton } from "antd"
import { IButton } from "./interface"
import "./index.scss"

const Button: FC<IButton> = (props) => {
    const { children } = props
    
    return (
        <AntButton className="button" {...props}>
            {children}
        </AntButton>
    )
}

export default Button
