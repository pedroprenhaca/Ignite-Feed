import styled from 'styled-components'

export const AvatarStyled = styled.div`
    img{
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius:8px;
        border: ${({hasBorder}) => hasBorder ? "4px solid #202024" : "none"};
        outline: ${({hasBorder}) => hasBorder ? "2px solid #00875f" : "none"};
    }

     
`
