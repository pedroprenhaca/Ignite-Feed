import igniteLogo from '../../assets/Logo.svg'
import {HeaderStyle} from "./styles.js"


export function Header(){
    return(
        <HeaderStyle>
            <img src={igniteLogo}  alt="dois triangulos verdes"/>
        </HeaderStyle>
    )
}