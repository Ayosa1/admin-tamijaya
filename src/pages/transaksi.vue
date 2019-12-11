<template>
  <div id="jadwal">
    <!-- Button trigger modal -->
    <!-- <div align="right">
      <button
        type="button"
        class="btn btn-sm btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >Masukan data</button>
    </div> -->

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
            <h5 class="modal-title" id="exampleModalLabel">Input Data Jadwal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Origin</label>
                <input
                  v-model="kirim.origin"
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
                  v-model="kirim.destination"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Harga</label>
                <input
                  v-model="kirim.harga"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Kelas</label>
                <input
                  v-model="kirim.kelas"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Jam Berangkat</label>
                <input
                  v-model="kirim.jam_berangkat"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Estimasi waktu</label>
                <input
                  v-model="kirim.estimasi_durasi_perjalanan"
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
            <button type="submit" class="btn btn-primary" @click="input()" >Tambah Jadwal</button>
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
          <th scope="col">Tagihan</th>
          <th scope="col">Batas Pembayaran</th>
          <th scope="col">Timestamp transaksi</th>
          <th scope="col">hapus</th>
        </tr>
      </thead>
      <tbody v-for="(sch,index) in transaksi" :key="index">
        <tr v-if="sch.trash == 0">
          <th scope="row">{{sch.id_transaksi}}</th>
          <td>{{sch.tagihan}}</td>
          <td>{{sch.batas_pembayaran}}</td>
          <td>{{sch.timestamp_transaksi}}</td>
          <td>
            <button type="button" @click="hapus(sch.id_transaksi)" class="btn btn-danger btn-sm">hapus</button>
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
      transaksi: [],
      kirim: {
        id_transaksi: "",
        tagihan: "",
        batas_pembayaran: "",
        timestamp_pembayaran: "",
        trash: "1"
      }
    };
  },
  mounted() {
    this.gettransaksi();
  },
  methods: {
    gettransaksi() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/transaksi")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.transaksi = body;
        });
    },
 hapus(id_transaksi) {
     {
        let form = new FormData();
        form.append("id", id_transaksi);
        form.append("trash", "1");
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/transaksi_delete", {
          method: "POST",
          body: form
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            this.gettransaksi();
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
    // input() {
    //   fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json"
    //     },
    //     body: this.kirim
    //   })
    //     .then(response => {
    //       console.log(response);
    //       this.getjadwal() 
    //       alert("Anda Berhasil Menginput data");
    //       $("#exampleModal .close").click(submit)
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
<style>
</style>