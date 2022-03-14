<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Data Kelas</h4>
        <b-button variant="outline-primary" size="sm" @click="add_kelas"
          >Tambah Data Kelas</b-button
        >
        <h6 class="card-subtitle font-weight-normal text-muted"></h6>
      </b-card-body>
      <KelasList @editKelas="edit_kelas"/>
    </b-card>
    <template v-if="kelas_add">
      <KelasAdd @closeAddKelas="close_add" />
    </template>
    <template v-if="kelas_edit">
      <KelasEdit
        :id_kelas="id_kelas"
        @closeEditKelas="close_edit"
        @editFormKelas="updateKelas"
      />
    </template>
  </div>
</template>
<script>
import KelasList from "./../kelas-components/KelasList";
import KelasAdd from "./../kelas-components/KelasAdd";
import KelasEdit from "./../kelas-components/KelasEdit";

export default {
  data() {
    return {
      kelas_add: false,
      kelas_edit: false,
      id_kelas: null,
    };
  },
  methods: {
      reRender(){
        this.$forceUpdate()
     },
    add_kelas() {
      this.kelas_add = !this.kelas_add;
    },
    edit_kelas({ id }) {
      this.id_kelas = id;
      this.kelas_edit = !this.kelas_edit;

      console.log("id buku:", id);
    },
    updateKelas({ id, nama_kelas }) {
      console.log("id buku", id);
      axios
        .put(`/api/v1/kelas/${id}`, {
          nama_kelas
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
      this.kelas_add = false;
    },
    close_edit() {
      this.kelas_edit = false;
    },
  },
  components: { KelasList, KelasAdd, KelasEdit },
};
</script>
