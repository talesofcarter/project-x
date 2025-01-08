function Entry(props) {
  console.log(props)
  return (
    <article>
      <div className="movie-thumbnail-container">
        <img 
          className="movie-thumbnail" 
          src={props.img.src} 
        />
        <div className="details-section">
          <div className="movie-header">
            <p className="movie-title">{props.title}</p>
            <p className="year">{props.year}</p>
            <p className="genre">{props.genre}</p>
            <p className="synopsis"><b>Plot Summary</b>: {props.plotSummary}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Entry;
