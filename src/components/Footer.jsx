const Footer = (props) => {
  const{showModal, handleTaggleModel, data}= props
  return (
    <footer className="footer">
      <div className="bgGradiant"></div>
        <div>
          <h1>APOD PROJECT</h1>
          <h2>{data?.title}</h2>
          
        </div>
        <button onClick={handleTaggleModel}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  );
}

export default Footer;
