import { AuhtorEndTime, CommentBox, CommentContent, CommentStyled } from "./styles";
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from "../Avatar/index"
import { useState } from "react";

interface CommentProps{
    content: string;
    onDeleteComment:(comment:string)=>void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function handlelikeComment(){
        setLikeCount(likeCount + 1)
        
    }
    return (
        <CommentStyled>
            <Avatar src="https://github.com/maykbrito.png" />

            <CommentBox>
                <CommentContent>

                    <header>
                        <AuhtorEndTime>
                            <strong>Gabriel Silva</strong>
                            <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:10:30">Cerca de 2h atrás</time>
                        </AuhtorEndTime>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </CommentContent>
                <footer>
                    <button onClick={handlelikeComment}>
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>
            </CommentBox>

        </CommentStyled>
    )
}