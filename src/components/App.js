import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import { SignIn, SignOut, useAuthentication } from "../services/authService"
import { fetchArticles, createArticle, deleteArticle } from "../services/articleService"
import "./App.css"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()


  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

//This is the function to remove articles as the user
  function removeArticle(id) {
    deleteArticle(id).then(() => {
      setArticle(null);
      setArticles(articles.filter((a) => a.id !== id));
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        Will & Zanders Blog
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? (
        <p className="intro">
          Welcome to the blog! Sign in on the top right.
        </p>
      ) : (
        <Nav articles={articles} setArticle={setArticle} />
      )}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} removeArticle = {removeArticle} />
      )}
    </div>
  )
}