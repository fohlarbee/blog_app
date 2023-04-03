import { Link } from "react-router-dom";

const Blogs = ({blogs, title, handleDelete}) => {
    return(
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> 
                        <h1>{blog.title}</h1>
                        <p>written by {blog.author}</p>
                    </Link>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default Blogs;