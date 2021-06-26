import './styles.css';

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{id} - {title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
