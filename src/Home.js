import BlogList from "./BlogList";
import useFetch from "./useFetch";

// parent Component
const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8080/blogs')


  return (
    <div className="home">
      {error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title = "All Blogs!"/>}
    </div>
  );
}

export default Home;
