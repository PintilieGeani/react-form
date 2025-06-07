import blogPosts from "./data.js"

function App() {
  

  return (
    <>
     <div>
      <ul>
        {blogPosts.map((curPost) => <li>{curPost.titolo}</li>)}
      </ul>
     </div>
    </>
  )
}

export default App
