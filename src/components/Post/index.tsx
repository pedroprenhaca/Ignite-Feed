import {format,formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {Content, PostStyle, Author, AuthorInfo, CommentStyled, CommentList, } from "./styles.js"
import { Comment } from "../Comment/index"
import {Avatar} from "../Avatar/index"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: string;
}


export function Post({author,content,publishedAt}: PostProps) {

    const [comments, setComments] = useState([
        'Muito Bom o post kkkkk'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow=formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })
    
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault() 
        
        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete:string){
        const commentsWithoutDeleteone = comments.filter(comment => {
            return comment!== commentToDelete
        })
        setComments(commentsWithoutDeleteone)

    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <PostStyle>
            <header>
                <Author>
                    <Avatar  src={author.avatarUrl} />
                    <AuthorInfo>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </AuthorInfo>
                </Author>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <Content>
                <p>
                   {content}
                </p>
            </Content>

            <CommentStyled onSubmit={handleCreateNewComment}>
                
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                    <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>

                     
            </CommentStyled>

            <CommentList>
                {comments.map(comment =>{
                    return(
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    )
                })}
            </CommentList>
        </PostStyle>
    )
}