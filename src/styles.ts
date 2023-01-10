import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 70rem;
    margin:2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 256px 1fr;
    gap:2rem;
    align-items: flex-start;


    @media(max-width:768px){
        
        grid-template-columns:1fr;
    }

   
`
export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

