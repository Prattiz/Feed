import { Header } from "../components/Header/Header";
import "../global.css";
import styles from "./App.module.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Post } from "../components/Posts/Post";


//Back-end simulation:

const post = [
 
 {
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Cooper",
      role:"UI Designer"
    },

    content: [
       {type: 'paragraph', content: "Fala galeraa 👋" },
       {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz para uma empresa. O nome do projeto é DoctorCare 🚀"},
       {type: 'link', content: "jane.design/doctorcare"},
    ],
    
    publishedAt: new Date("2023-09-28 17:00:00")

  },
  
   {
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Devon Lane",
      role:"Web Developer"
    },

    content: [
      {type: 'paragraph', content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻" },
      {type: 'paragraph', content: "Acesse e deixe seu feedback 👉" },
      {type: 'link', content: "devonlane.design"},
    ],

    publishedAt: new Date("2023-08-25 18:30:00")
  },

  
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
           return(
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            
            />
           ) 
          })}
         
        </main>
      </div>  
    </div>
  )
}


