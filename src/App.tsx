
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { MainStyled, Wrapper } from "./styles";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedroprenhaca.png',
      name: 'Pedro Prenhaca',
      role: 'Developer',
    },
    content: 'Primeiro post para testar a plataforma!!!',
    publishedAt: new Date('2023-01-01 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat',
    },
    content: 'Acabei de me cadastrar, muito massa esse projeto',
    publishedAt: new Date('2023-01-02 17:00:00'),
  }
]


export function App() {


  return (
    <>
      <Header />

      <Wrapper>
        <Sidebar />
        <MainStyled>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )

          })}
        </MainStyled>
      </Wrapper>
    </>



  )
}