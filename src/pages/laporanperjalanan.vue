<template>
  <div>
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
            <h5 class="modal-title" id="exampleModalLabel">Input Data Laporan perjalanan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">perjalanan</label>
                <select class="form-control" style="color: black;" v-model="kirim.id_perjalanan">
                  <option v-for="(wil,indek) in perjalanan" v-if="wil.trash == 0" :key="indek" :value="wil.id" >
                    <p v-for="(per,index) in wil.jadwal" v-if="per.trash == 0"  :key="index" >{{per.nama_origin}}-{{per.nama_destination}}</p>
                    </option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">deskripsi</label>
                <input
                  v-model="kirim.deskripsi"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">pengeluaran</label>
                <input
                  v-model="kirim.pengeluaran"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">pemasukan</label>
                <input
                  v-model="kirim.pemasukan"
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
            <button type="submit" class="btn btn-primary" @click="input()" >Tambah Laporan</button>
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
            <h5 class="modal-title" id="exampleModalLabel">Edit Laporan  {{kirim.id_perjalanan}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">perjalanan</label>
                <input
                  v-model="kirim.id_perjalanan  "
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">deskripsi</label>
                <input
                  v-model="kirim.deskripsi"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">pengeluaran</label>
                <input
                  v-model="kirim.pengeluaran"
                  style="color: black;"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">pemasukan</label>
                
                <input
                  v-model="kirim.pemasukan"
                  
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
            <button type="submit" class="btn btn-primary" @click="btnedit()">Edit Jadwal</button>
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
          <th scope="col">perjalanan</th>
          <th scope="col">deskripsi</th>
          <th scope="col">pengeluaran</th>
          <th scope="col">pemasukan</th>
           <th scope="col">timestamp laporan</th>
          <th scope="col">edit</th>
        </tr>
      </thead>
      <tbody v-for="(sch,index) in laporanperjalanan" :key="index">
        <tr >
          <th style="color: white;" scope="row">{{sch.id_laporan}}</th>
            <td>{{sch.id_perjalanan}}</td>
           <td><p>{{sch.deskripsi}}</p></td>
           <td>{{sch.pengeluaran}}</td>
           <td>{{sch.pemasukan}}</td>
           <td>{{sch.timestamp_laporan}}</td>
           <td>
             <button
        type="button"
        class="btn btn-sm btn-success"
        data-toggle="modal"
        @click="edit(sch.id_laporan)"
        data-target="#edit"
      >edit</button>
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
      jadwal: [],
      perjalanan: [],
      laporanperjalanan: [],
      kirim: {
        id_laporan: "",
        id_perjalanan: "",
        deskripsi: "",
        pengeluaran: "",
        pemasukan: ""
      }
    };
  },
  mounted() {
    this.getlaporanperjalanan();
    this.getperjalnan();
    this.getjadwal();
  },
  methods: {
    getlaporanperjalanan() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/laporan_perjalanan")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.laporanperjalanan = body;
        });
    },  
     getperjalnan() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/perjalanan")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.perjalanan = body;
        });
    },  
 getjadwal() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.jadwal = body;
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
      edit(id_laporan){

        let find = this.laporanperjalanan.filter(obj => obj.id_laporan == id_laporan )
        this.kirim.id_perjalanan = find[0].id_perjalanan;
        this.kirim.deskripsi = find[0].deskripsi;
        this.kirim.pengeluaran = find[0].pengeluaran;
        this.kirim.pemasukan = find[0].pemasukan;
      },
      btnedit(){
        let form = new FormData();
        form.append("id_perjalanan", this.kirim.id_perjalanan);
        form.append("deskripsi", this.kirim.deskripsi);
        form.append("pengeluaran", this.kirim.pengeluaran);
        form.append("pemasukan", this.kirim.pemasukan);
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/laporan_perjalanan="+this.kirim.id_laporan, {
          method: "PUT",
          body: form,
          
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            console.log(body);
            this.status = true;
            this.loading = false;
            alert("Data Berhasil Di Edit");
            this.getarmada();
          })
          .catch(error => {
            console.error("error:", error);
            alert("Gagal")
          });
      },
    input() {
       if (this.kirim.id_perjalanan == "" && this.kirim.deskripsi == "" && this.kirim.pengeluaran == "" && this.kirim.pemasukan == "") {
        console.log(
          "Maaf Mohon di lengkapi"
        );
        alert("maaf mohon di lengkapi");
      } else {
        let form = new FormData();
        form.append("id_laporan", this.kirim.id_perjalanan);
        form.append("id_perjalanan", this.kirim.id_perjalanan);
        form.append("deskripsi", this.kirim.deskripsi);
        form.append("pengeluaran", this.kirim.pengeluaran);
        form.append("pemasukan", this.kirim.pemasukan);
        this.loading = true;
        fetch("http://project.edwinrtoha.com/tamijaya/api/laporan_perjalanan", {
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
            this.getlaporanperjalanan();
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