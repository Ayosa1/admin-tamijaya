<template>
  <div style="margin-top: 200px; margin-left: 200px;" class="container">
    <div class="row">
      <div class="col-6">
          <form>
            <H1>Login</H1>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
      <div class="col-6 mt-5"><img src="../dashboard/logo.png" alt="">
      <h4 style="margin-left: 60px; margin-top: 10px;">Register</h4></div>
   </div></div>
</template>

<script>
export default {

}
</script>

<style>

</style>