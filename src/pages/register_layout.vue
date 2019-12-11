<template>
  <div style="margin-top: 180px; margin-left: 200px;" class="container">
    <div class="row">
      <div class="col-6">
          <form>
            <H1>Register</H1>
              <div class="form-group">
                <label for="exampleInputusername">Username</label>
                <input type="text" class="form-control" v-model="admin.username" id="exampleInputusername" aria-describedby="emailHelp">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="password" class="form-control" v-model="admin.password" id="exampleInputPassword">
              </div>
              <div class="form-group">
                <label for="exampleInputnama">nama</label>
                <input type="text" class="form-control" v-model="admin.nama"  id="exampleInputnama">
              </div>
              <button type="submit" @click="daftar()" class="btn btn-primary">Submit</button>
            </form>
      </div>
      <div class="col-6 mt-5"><img src="../assets/logo.png" alt="">
      <h4 style="margin-left: 75px; margin-top: 10px;" @click="login()">Login</h4></div>
   </div></div>
</template>

<script>
export default {
  //  components: {
  //   navbar
  // },
  data() {
    return {
      admin: {
        username: "",
        password: "",
        nama: ""
      },
      token:"",
      info:"",
      ci:"",
    };
  },
 methods: {
    daftar() 
    {
      if (this.admin.username == "" && this.admin.password == "" && this.admin.nama == "" ) {
        console.log(
          "Maaf Mohon di lengkapi"
        );
        alert("maaf mohon di lengkapi");
      } else {
      let form = new FormData();
      form.append("username", this.admin.username);
      form.append("password", this.admin.password);
      form.append("nama", this.admin.nama);
      fetch("http://project.edwinrtoha.com/tamijaya/api/akun/admin", {
        method: "POST",
        body: form
      })
        .then(response => {
          return response.json();
        })
        .then(body => {
          this.info = body;
          if (this.info == "") {
            alert("Coba Ulangi Pendaftarannya Atau \nMasih Ada Yang Kosong");
          }
          console.log("info :", this.info);
          alert("Selamat Anda Berhasil mendaftar")
          // sessionStorage.setItem("id_customers")
        })
        .catch(error => {
          alert("Ceck Koneksi Yang Anda Gunakan");
          console.error("Gagal:", error);
        });
    }
    },
    login() {
      this.$router.push("/");
    }
  }
};

</script>

<style>

</style>