import blogPosts from "./data.js"
import { useState } from "react"

function App() {
  const [newBlogTitle, setNewblogTitle] = useState("");
  const[blogList, setBlogList] = useState(blogPosts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const copyArray = [...blogList, {titolo: newBlogTitle}];
    setBlogList(copyArray)
    
  }

  return (
    <>
     <div>
      <ul>
        {blogList.map((curPost, index) => <li key={index}>{curPost.titolo}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titolo">Inserisci il tuo titolo</label>
        <input autoComplete="off" type="text"  id="titolo" value={newBlogTitle} onChange={(event) => setNewblogTitle(event.target.value)}/>
        <button>Aggiungi Titolo</button>
      </form>
     </div>
    </>
  )
}

export default App
