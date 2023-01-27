function ProfileCard({ title, handle, image, description }) {
  //   const title = props.title;
  //   const handle = props.handle;
  //const { title, handle } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pdaslogo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <h2 className="title is-4">{title} </h2>
          <p className="subtitle is-6">{handle} </p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}
export default ProfileCard;
