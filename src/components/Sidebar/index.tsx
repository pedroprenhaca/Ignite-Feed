import { Footer, Profile, Sidebaar } from "./styled";
import { PencilLine } from 'phosphor-react'
import { Avatar } from "../Avatar/index"

export function Sidebar() {
    return (
        <Sidebaar>
            <img src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="" />

            <Profile>

                <Avatar src="https://github.com/pedroprenhaca.png"/>

                <strong>Pedro Prenhaca</strong>
                <span>Web Developer</span>
            </Profile>

            <Footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>

            </Footer>
        </Sidebaar>
    )
}