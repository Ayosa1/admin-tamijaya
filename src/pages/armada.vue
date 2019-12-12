<template>
  <div id="jadwal">
    <!-- Button trigger modal -->
    <div align="right">
      <button
        type="button"
        class="btn btn-sm btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >Masukan data</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Input Data Armada</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">nopol1</label>
                <input
                  v-model="kirim.nopol1"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">nopol2</label>
                <input
                  v-model="kirim.nopol2"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">nopol3</label>
                <input
                  v-model="kirim.nopol3"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">layout</label>
                <p style="color: red">Masukan Sesuai format [0,0];[0,0];</p>
                <input
                  v-model="kirim.layout"
                  placeholder="[0,0];[0,0];"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" @click="input()" >Tambah armada</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Jadwal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Origin</label>
                <input
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Destination</label>
                <input
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Destination</label>
                <input
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Harga</label>
                <input
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Kelas</label>
                <input
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Jam Berangkat</label>
                <input
                  style="color: black;"
                  type="time"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Estimasi waktu</label>
                <input
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Tambah Jadwal</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>

    </div>-->
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">NO</th>
          <th scope="col">Nomor Polisi</th>
          <th scope="col">Layout</th>
          <th scope="col">hapus</th>
        </tr>
      </thead>
      <tbody v-for="(sch,index) in armada" :key="index">
        <tr>
          <th style="color: white;" scope="row">{{sch.id}}</th>
          <td>{{sch.nopol}}</td>
           <td>{{sch.layout}}</td>
          <td>
            <button 
            type="button" 
            class="btn btn-danger btn-sm"
            @click="hapus(sch.id)"
            >hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      armada: [],
      kirim: {
        id: "",
        nopol1: "",
        nopol2: "",
        nopol3: "",
        layout: "",
        trash: 1
      }
    };
  },
  mounted() {
    this.getarmada();
  },
  methods: {
    getarmada() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/armada?id&nopol&trash")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.armada = body;
        });
    },  

   hapus(id) {
     {
        let form = new FormData();
        form.append("id", id);
        form.append("trash", "1");
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/armada_delete", {
          method: "POST",
          body: form
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            this.getarmada();
            // console.log(this.kirim.jam_berangkat);
            // localStorage.setItem("origin", body.tiket[0].nama);
            // localStorage.setItem("destination", body.tiket[0].nomor_kursi);
            // localStorage.setItem("harga", this.user.tujuan);
            // localStorage.setItem("kelas", this.user.asal);
            // localStorage.setItem("jam_berangkat", this.user.tanggal);
            // this.status = true;
            // this.loading = false;
          })
          .catch(error => {
            console.error("error:", error);
          });
      }
    },

    input() {
       if (this.kirim.nopol1 == "" && this.kirim.nopol2 == "" && this.kirim.nopol3 == "" ) {
        console.log(
          "Maaf Mohon di lengkapi"
        );
        alert("maaf mohon di lengkapi");
      } else {
        let form = new FormData();
        form.append("nopol1", this.kirim.nopol1);
        form.append("nopol2", this.kirim.nopol2);
        form.append("nopol3", this.kirim.nopol3);
        form.append("layout", this.kirim.layout);
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api//armada", {
          method: "POST",
          body: form
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            // localStorage.setItem("origin", body.tiket[0].nama);
            // localStorage.setItem("destination", body.tiket[0].nomor_kursi);
            // localStorage.setItem("harga", this.user.tujuan);
            // localStorage.setItem("kelas", this.user.asal);
            // localStorage.setItem("jam_berangkat", this.user.tanggal);
            this.status = true;
            this.loading = false;
            alert("Data Berhasil Di input");
            this.getarmada();
          })
          .catch(error => {
            console.error("error:", error);
            
          });
      }
    }
  }
};
</script>
<style>
</style>
