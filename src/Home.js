import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import useFetch from "./hooks/useFetch";

const Home = () => {
   const {data, isLoading, isError, setData} = useFetch('http://localhost:8000/blogs')
    

    const handleDelete = (id) => {
       const newBlogs = data.filter((blog) => blog.id !== id);
       setData(newBlogs);
    }
  

  
    return(
        <div className="home">
            {isError && <div>{isError}</div>}
            {isLoading && <div>Loading...</div>}

            {data &&  <Blogs blogs={data} title='All Blogs' handleDelete={handleDelete}/>}
             
            
        </div>
    );
}

export default Home;