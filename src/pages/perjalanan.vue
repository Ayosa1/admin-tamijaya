<template>
  <div >
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
            <button type="submit" class="btn btn-primary" >Tambah Jadwal</button>
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
          <th scope="col">Waktu Berangkat</th>
          <th scope="col">Origin</th>
          <th scope="col">Destination</th>
          <th scope="col">Estimasi</th>
          <th scope="col">nomor polisi</th>
          <th scope="col">wisata</th>
         
        </tr>
      </thead>
      <tbody v-for="(sch,index) in Jadwal" :key="index">
        <tr v-if="sch.trash == 0">
          <th style="color: white;" scope="row">{{sch.id}}</th>
          <td>{{sch.waktu_berangkat}}</td>
          <td v-for="(idx,ind) in sch.jadwal" :key="ind" >{{idx.nama_origin}}</td>
          <td v-for="(inx,inn) in sch.jadwal" :key="inn ">{{inx.nama_destination}}</td>
          <td v-for="(no,on) in sch.jadwal" :key="on">{{no.estimasi_durasi_perjalanan}}</td>
          <td v-for="(oi,io) in sch.armada" :key="io" >{{oi.nopol1}} {{oi.nopol2}} {{oi.nopol3}}</td>
          <td>{{sch.wisata}}</td>
          <td>
            <button
              type="button"
              class="btn btn-success btn-sm"
              data-toggle="modal"
              data-target="#edit"
            >edit</button>
          </td>
          <td>
            <button type="button" @click="hapus(sch.id)" class="btn btn-danger btn-sm">hapus</button>
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
      Jadwal: [],
      kirim: {
        id:"",
        origin: 5171,
        destination: 3471,
        harga: "",
        kelas: "",
        jam_berangkat: "06:58:59",
        estimasi_durasi_perjalanan: "2019-09-26 00:00:00",
        trash: 1
      }
    };
  },
  mounted() {
    this.getperjalanan();
  },
  methods: {
    getperjalanan() {
      fetch("http://project.edwinrtoha.com/tamijaya/index.php/api/perjalanan")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.Jadwal = body;
        });
    },

     hapus(id) {
     {
        let form = new FormData();
        form.append("id", id);
        form.append("trash", "1");
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/perjalanan_delete?id&trash", {
          method: "POST",
          body: form
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            this.getperjalanan();
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
    //    if (this.kirim.origin == "" && this.kirim.destination == "" && this.kirim.kelas == "" 
    //    && this.kirim.jam_berangkat == "" && this.kirim.estimasi_durasi_perjalanan == "") {
    //     console.log(
    //       "Maaf Mohon di lengkapi"
    //     );
    //     alert("maaf mohon di lengkapi");
    //   } else {
    //     let form = new FormData();
    //     form.append("origin", "5171");
    //     form.append("destination", "3471");
    //     form.append("harga", this.kirim.harga);
    //     form.append("kelas", this.kirim.kelas);
    //     form.append("jam_berangkat", "06:58:59");
    //     form.append("estimasi_durasi_perjalanan", "2019-09-26 00:00:00");
    //     this.loading = true;
    //     fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal", {
    //       method: "POST",
    //       body: form
    //     })
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(body => {
    //         console.log(body);
    //         // localStorage.setItem("origin", body.tiket[0].nama);
    //         // localStorage.setItem("destination", body.tiket[0].nomor_kursi);
    //         // localStorage.setItem("harga", this.user.tujuan);
    //         // localStorage.setItem("kelas", this.user.asal);
    //         // localStorage.setItem("jam_berangkat", this.user.tanggal);
    //         this.status = true;
    //         this.loading = false;
    //       })
    //       .catch(error => {
    //         console.error("error:", error);
    //       });
    //   }
    // },
  }
};
</script>
<style>
</style>