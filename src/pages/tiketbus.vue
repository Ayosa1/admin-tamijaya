<template>
<div>    
    <h3 align="center">Data Masuk Order Tiket</h3>
      <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">NO</th>
          <th scope="col">NIK</th>
           <th scope="col">no kursi</th>
          <th scope="col">nama</th>
          <th scope="col">harga</th>
          <th scope="col">waktu pembayaran</th>
          <th scope="col">TimeStamp Transaksi</th>
          <th scope="col">destination</th>
          <th scope="col">origin</th>
          <th scope="col">kelas</th>
          <th scope="col">nopol</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody v-for="(sch,index) in tiket" :key="index">
        <tr v-if="sch.trash == 0">
          <th style="color: white" scope="row">{{sch.id}}</th>
          <td>{{sch.nik}}</td>
          <td>{{sch.nomor_kursi}}</td>
          <td>{{sch.nama}}</td>
          <td>{{sch.harga}}</td>
          <td>{{sch.waktu_pembayaran}}</td>
          <td>{{sch.timestamp_transaksi}}</td>
           <td>{{sch.destination}}</td>
           <td>{{sch.origin}}</td>
            <td>{{sch.kelas}}</td>
             <td>{{sch.nopol}}</td>
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
      tiket: []
    };
  },
   mounted() {
    // this.getjadwal();
    this.gettiket();
  },
  methods: {
    // getjadwal() {
    //   fetch("http://project.edwinrtoha.com/tamijaya/api/jadwal")
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(body => {
    //       console.log("body :", body);
    //       this.Jadwal = body;
    //     });
    // },
    gettiket() {
      fetch("http://project.edwinrtoha.com/tamijaya/api/tiket")
        .then(response => {
          return response.json();
        })
        .then(body => {
          console.log("body :", body);
          this.tiket = body;
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
  }
}
</script>
<style>

</style>