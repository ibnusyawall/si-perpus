<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Data Peminjam</h4>
        <b-button variant="outline-primary" size="sm" @click="add_kelas"
          >Tambah Data Peminjam</b-button
        >
        <h6 class="card-subtitle font-weight-normal text-muted"></h6>
      </b-card-body>
      <PeminjamList @editPeminjam="edit_peminjam"/>
    </b-card>
    <template v-if="pinjam_add">
      <PeminjamAdd @closeAddKelas="close_add" />
    </template>
    <template v-if="pinjam_edit">
      <PeminjamEdit
        :id_pinjam="id_pinjam"
        @closeEditPeminjam="close_edit"
        @editFormPeminjam="updatePeminjam"
      />
    </template>
  </div>
</template>
<script>
import PeminjamList from "./../peminjam-components/PeminjamList";
import PeminjamAdd from "./../peminjam-components/PeminjamAdd";
import PeminjamEdit from "./../peminjam-components/PeminjamEdit";

export default {
  data() {
    return {
      pinjam_add: false,
      pinjam_edit: false,
      id_pinjam: null,
    };
  },
  methods: {
      reRender(){
        this.$forceUpdate()
     },
    add_kelas() {
      this.pinjam_add = !this.pinjam_add;
    },
    edit_peminjam({ id }) {
      this.id_pinjam = id;
      this.pinjam_edit = !this.pinjam_edit;

      console.log("id buku hhh:", id);
    },
    updatePeminjam({ id, form }) {
      console.log("id buku", id);
      axios
        .put(`/api/v1/peminjam/${id}`, {
          ...form
        })
        .then((result) => {
            console.log('updated success', result)
            this.modalSuccess()
        }).catch(e => {
            this.modalFailed()
            console.log('error:', e)
        })
    },
    modalSuccess() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk("Data berhasil di update", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          this.$router.go(0)
        })
        .catch((err) => {
          // An error occurred
        });
    },
    modalFailed() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk("Data gagal di update", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          //
        })
        .catch((err) => {
          // An error occurred
        });
    },
    close_add() {
      this.pinjam_add = false;
    },
    close_edit() {
      this.pinjam_edit = false;
    },
  },
  components: { PeminjamList, PeminjamAdd, PeminjamEdit },
};
</script>
