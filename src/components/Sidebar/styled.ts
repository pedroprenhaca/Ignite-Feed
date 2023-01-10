import styled from 'styled-components'

export const Sidebaar = styled.div`
    background: #202024;
    border-radius: 8px;
    overflow: hidden;

    img{
        width: 100%;
        height: 72px;
        object-fit:cover;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem; 

    

    strong{
        margin-top: 1rem;
        color: #e1e1e6;
        line-height: 1.6;
    }

    span{
        font-size:0.875rem;
        color: #8d8d99;
        line-height: 1.6;
    }
`

export const Footer = styled.footer`
    border-top:1px solid #323238;
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    
    a{
        
        background: transparent;
        color: #00875f;
        border:1px solid #00875f;
        border-radius: 8px;
        height: 50px;
        padding: 0 1.5rem;
        font-weight: bold;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;
        gap:0.5rem;

        transition: all 0.2s;

        &:hover{
            background: #00875f;
            color: #e1e1e6;
        }
    }
`