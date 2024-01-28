import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true);
    // console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}

        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
