import styled from 'styled-components'

export const PostStyle = styled.article`
    background:#202024;
    border-radius: 8px;
    padding: 2.5rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

    
        time{
            font-size: 0.875rem;
            color: #8d8d99;
        }
    }

    @media (max-width:599px){
        header{
            display: flex;
            flex-direction: column;
            
            time{
                margin-left: -3.8rem;
            }
        }
    }

    `

export const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width:599px){
        margin-left: -7.5rem;
    }

  
`

export const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;

    strong{
        color: #e1e1e6;
        line-height: 1.6;
    }

    span{
        font-size: 0.875rem;
        color: #8d8d99;
        line-height: 1.6rem;
    }

    @media (max-width:599px) {
        strong{
            font-size: 0.9rem;
        }
        
    }
`

export const Content = styled.div`
    line-height: 1.6;
    color:#c4c4cc;
    margin-top:1.5rem;


    p{
        margin-top:1rem;
    }
`

export const CommentStyled = styled.form`
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #323238

    strong{
        line-height: 1.6;
        color: #e1e1e6;
    }

    textarea{
        width: 100%;
        background: #121214;
        border: 0;
        resize: none;
        height: 6rem;
        padding: 1rem;
        border-radius:8px;
        color: #e1e1e6;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        line-height: 1.4;
        margin-top: 1rem;
    }

    button{
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius:8px;
        border:0;
        background: #00875f;
        color: #ffffff;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.1s;

        &:disabled{
            opacity: 0.7;
            cursor: not-allowed;
;
        }
        
        
        &:not(:disabled):hover{
            background: #00b37e;
        }
    }
`

export const CommentList = styled.div`
    margin-top: 2rem;
`

