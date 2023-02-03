import Post from "./Post"

const PostContainer = ({posts}) => {
    return (
        <div className="post-container">
            {posts.map((post) => {
                return <Post info={post} key={post.id}/>
            })}
        </div>
    )
}

export default PostContainer