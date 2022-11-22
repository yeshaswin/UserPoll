function PollsCard(props){
    
    return(
        <>
         <div className="card">
  <header className="card-header">
    <p className="card-header-title">
        {props.poll.label}
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
    <div className="content">

    </div>
  </div>
  <footer className="card-footer">
    <button className="card-footer-item"> Close Poll</button> 
  </footer>
</div>
        </>
    )
}
export default PollsCard;