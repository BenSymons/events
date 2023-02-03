const FormContainer = () => {

    return (
        <div className="form-container">
            <h2>Post a new comment</h2>
            <form>
                <label htmlFor="title">title</label>
                <input 
                    id="title" 
                    placeholder="title"
                />
                <label htmlFor="body">body</label>
                <textarea 
                    id="body"
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default FormContainer