const BlogPost = ({params}) => {
    return ( 
        <>
        <div className="blogpost">
            <h2>BlogPosts</h2>
            <h3>{params.id}</h3>
        </div>
        </>
     );
}
 
export default BlogPost;