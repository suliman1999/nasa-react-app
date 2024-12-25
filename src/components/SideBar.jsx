const SideBar = (props) => {
  const{handleTaggleModel, data} = props
  return (
    <div className="sideBar">
      <div onClick={handleTaggleModel} className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleTaggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
