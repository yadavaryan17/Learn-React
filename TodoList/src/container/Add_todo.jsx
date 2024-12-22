function Add_todo(){
    return(
       
        <div class="row row-dg">
          <div class="col-5">
            <input type="text" placeholder="Enter your text" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button class = "btn btn-success kl-btn">Add</button>
          </div>
        </div>
    )
}
export default Add_todo;