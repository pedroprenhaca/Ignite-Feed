import { AvatarStyled,  } from "./styles";

interface AvatarProps{
    src:string
    alt?:string
}

export function Avatar({src,alt}:AvatarProps){

    return(
        <AvatarStyled>
            <img  src={src} alt={alt} />
        </AvatarStyled>
    )
}