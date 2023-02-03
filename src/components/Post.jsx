const Post = ({info}) => {
    const {title, body} = info
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post