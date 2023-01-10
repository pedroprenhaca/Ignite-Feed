import styled from 'styled-components'

export const CommentStyled = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;

   img{
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius:8px;
        
   }
`
export const CommentBox = styled.div`
    flex: 1;

    footer{
        margin-top: 1rem;

        button{
            background: transparent;
            border: 0;
            color: #8d8d99;
            cursor: pointer;
            display: flex;
            align-items: center;
            border-radius: 2px;

            &:hover{
                color: #00B37E;
            }

            svg{
                margin-right: 0.5rem;
            }

            span{
                margin-left: 0.5rem;
            }
        }
    }
`
export const CommentContent = styled.div`
    background:#29292e ;
    border-radius: 8px;
    padding: 1rem;

    header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        button{
            background: transparent;
            border: 0;
            line-height: 0;
            border-radius: 2px;
            color: #8d8d99;
            cursor: pointer;

            &:hover{
                color: #f75a68;
            }
            
        }

        @media (max-width:599px){
            position: relative;
            button{
                position:absolute;
                left: 11rem;
                
            }
        }
        
    }

    p{
        margin-top: 1rem;
        color: #c4c4cc;
    }


    
`
export const AuhtorEndTime = styled.div`
    
    strong{
        display: block;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    time{
        display: block;
        font-size: 0.75rem;
        line-height: 1.6;
        color: #8d8d99

       
    }

    @media (max-width:599px){
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        time{
            position: absolute;
            left: 3.8rem;
            top: 1rem;
        }
    }

    
`