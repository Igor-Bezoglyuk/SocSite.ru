const Createpost = () => {
  return (
    <div id="Kontentblock" class="float-end">
    <div class="Create-Post float-start">
      <form class=" mt-4">
         <div class="t-3">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
     </div>
     </div>
  );
}

export default Createpost;