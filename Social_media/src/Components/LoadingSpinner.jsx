function LoadingSpinner(){
    return(
        <>
      <div className="d-flex justify-content-center spinner" >
  <div className="spinner-border" role="status"style={{height: "50px",
  width: "50px"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        </>
    );

}
export default LoadingSpinner;