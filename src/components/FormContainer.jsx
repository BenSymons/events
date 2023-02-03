import { useState } from "react"

const FormContainer = ({setPosts}) => {
    const [newPost, setNewPost] = useState({title: "", body: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting...")
        setPosts((prev) => [newPost, ...prev])
    }

    const handleChange = (e) => {
        // console.log(e.target.id, "<-- e")
        const value = e.target.value
        const key = e.target.id
        setNewPost((prev) => {
            return {...prev, [key]: value}
        })
    }

    return (
        <div className="form-container">
            <h2>Post a new comment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title</label>
                <input 
                    id="title" 
                    placeholder="title"
                    onChange={handleChange}
                />
                <label htmlFor="body">body</label>
                <textarea 
                    id="body"
                    onChange={handleChange}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default FormContainer