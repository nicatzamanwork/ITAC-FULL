export default function Post({ createdAt,title, summary, cover, content }) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://i.pinimg.com/564x/dc/85/22/dc8522c4286f342853ebcf4aaf1d098e.jpg"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Plaza</a>
          
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
