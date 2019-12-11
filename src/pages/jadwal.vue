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
            <h5 class="modal-title" id="exampleModalLabel">Input Data Jadwal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Origin</label>
                <select class="form-control" style="color: black;" v-model="kirim.origin">
                  <option v-for="(wil,indek) in wilayah" :key="indek" :value="wil.id">{{wil.text}}</option>
                </select>
                <!-- <input
                  v-model="kirim.origin"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />-->
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Destination</label>
                <select class="form-control" style="color: black;" v-model="kirim.destination">
                  <option v-for="(wil,indek) in wilayah" :key="indek" :value="wil.id">{{wil.text}}</option>
                </select>
                <!-- <input
                  v-model="kirim.destination"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />-->
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
                 <p style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; color:red;" >Penulisan input hh:mm:ss</p>
                <input
                  v-model="kirim.jam_berangkat"
                  placeholder="00:00:00"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              
              <div class="form-group">
                <label for="exampleInputPassword1">Estimasi waktu</label>
                <p style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; color:red;" >Penulisan input yyyy:mm:dd hh:mm:ss</p>
                <input
                  placeholder="0000-00-00 00:00:00"
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
            <button type="submit" class="btn btn-primary" @click="input()">Tambah Jadwal</button>
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
          <th scope="col">Destination</th>
          <th scope="col">Origin</th>
          <th scope="col">jam Berangkat</th>
          <th scope="col">estimasi durasi perjalanan</th>
          <th scope="col">Kelas</th>
          <th scope="col">harga</th>
          <th scope="col">hapus</th>
        </tr>
      </thead>
      <tbody v-for="(sch,index) in Jadwal" :key="index">
        <tr v-if="sch.trash == 0">
          <th scope="row">{{sch.id}}</th>
          <td>{{sch.nama_destination}}</td>
          <td>{{sch.nama_origin}}</td>
          <td>{{sch.jam_berangkat}}</td>
          <td>{{sch.estimasi_durasi_perjalanan}}</td>
          <td>{{sch.kelas}}</td>
          <td>{{sch.harga}}</td>
          <td>
            <button type="button" class="btn btn-danger btn-sm"  @click="hapus(sch.id)">hapus</button>
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
      wilayah: [],
      kirim: {
        id: "",
        origin: 5171,
        destination: 3471,
        harga: "",
        kelas: "",
        jam_berangkat: "",
        estimasi_durasi_perjalanan: "",
        trash: 1
      }
    };
  },
  mounted() {
    this.getjadwal();
    this.getwilayah();
  },
  methods: {
    getjadwal() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.Jadwal = body;
        });
    },
    getwilayah() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/wilayah_min")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.wilayah = body;
        });
    },

    hapus(id) {
     {
        let form = new FormData();
        form.append("id", id);
        form.append("trash", "1");
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal_delete", {
          method: "POST",
          body: form
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            this.getjadwal();
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
      if (
        this.kirim.origin == "" &&
        this.kirim.destination == "" &&
        this.kirim.kelas == "" &&
        this.kirim.jam_berangkat == "" &&
        this.kirim.estimasi_durasi_perjalanan == ""
      ) {
        console.log("Maaf Mohon di lengkapi");
        alert("maaf mohon di lengkapi");
      } else {
        let form = new FormData();
        form.append("origin", this.kirim.origin);
        form.append("destination", this.kirim.destination);
        form.append("harga", this.kirim.harga);
        form.append("kelas", this.kirim.kelas);
        form.append("jam_berangkat", this.kirim.jam_berangkat);
        form.append(
          "estimasi_durasi_perjalanan",
          this.kirim.estimasi_durasi_perjalanan
        );
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal", {
          method: "POST",
          body: form
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            console.log(this.kirim.jam_berangkat);
            // localStorage.setItem("origin", body.tiket[0].nama);
            // localStorage.setItem("destination", body.tiket[0].nomor_kursi);
            // localStorage.setItem("harga", this.user.tujuan);
            // localStorage.setItem("kelas", this.user.asal);
            // localStorage.setItem("jam_berangkat", this.user.tanggal);
            this.status = true;
            this.loading = false;
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