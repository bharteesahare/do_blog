import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author};

    setIsPending(true);

    fetch('http://localhost:8080/blogs',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false);
      // history.go(-1);
      history.push('/');
    })
  }

  return (
      <div className="create">
        <h2>Add the Blog </h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input type= "text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
          <label>Blog Body:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
          <label>Blog Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Add blog loading...</button>}
          <p>Title: {title}</p>
          <p>Body: {body}</p>
          <p>Author: {author}</p>
        </form>
      </div>
    );
}

export default Create;
