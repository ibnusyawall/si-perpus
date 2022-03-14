<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Data Buku</h4>
        <b-button variant="outline-primary" size="sm" @click="add_buku"
          >Tambah Buku</b-button
        >
        <h6 class="card-subtitle font-weight-normal text-muted"></h6>
      </b-card-body>
      <BukuList @editBuku="edit_buku" @click="reRender()"/>
    </b-card>
    <template v-if="buku_show">
      <BukuAdd @closeAddBuku="close_add" />
    </template>
    <template v-if="buku_show_edit">
      <BukuEdit
        :id_buku="id_buku"
        @closeEditBuku="close_edit"
        @editFormBuku="updateBuku"
      />
    </template>
  </div>
</template>
<script>
import BukuList from "./../buku-components/BukuList";
import BukuAdd from "./../buku-components/BukuAdd";
import BukuEdit from "./../buku-components/BukuEdit";

export default {
  data() {
    return {
      buku_show: false,
      buku_show_edit: false,
      id_buku: null,
    };
  },
  methods: {
      reRender(){
        this.$forceUpdate()
     },
    add_buku() {
      this.buku_show = !this.buku_show;
    },
    edit_buku({ id }) {
      this.id_buku = id;
      this.buku_show_edit = !this.buku_show_edit;

      console.log("id buku:", id);
    },
    updateBuku({ nama_buku, keterangan_buku, id }) {
      console.log("nama_buku:", nama_buku);
      console.log("keterangan buku:", keterangan_buku);
      console.log("id buku", id);
      axios
        .put(`/api/v1/buku/${id}`, {
          nama_buku,
          keterangan_buku,
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
      this.buku_show = false;
    },
    close_edit() {
      this.buku_show_edit = false;
    },
  },
  components: { BukuList, BukuAdd, BukuEdit },
};
</script>
