import {Link} from 'react-router-dom';

const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <div className="blog-list">
      <h2> { title } </h2>
      {blogs.map((blog)=> (
        <div className="blog-preview" key={blog.id}>
          <Link to = {`blogs/${blog.id}`}>
            <h2>Title: { blog.title}</h2>
            <div>Blog Description: {blog.body }</div>
            <p style={{'float': 'right'}}> - Written by { blog.author}</p><br/>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
