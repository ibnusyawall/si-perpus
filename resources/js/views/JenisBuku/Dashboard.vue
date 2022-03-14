<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Data Jenis Buku</h4>
        <b-button variant="outline-primary" size="sm" @click="add_buku"
          >Tambah Jenis Buku</b-button
        >
        <h6 class="card-subtitle font-weight-normal text-muted"></h6>
      </b-card-body>
      <JenisBukuList @editJenisBuku="edit_jenis_buku"/>
    </b-card>
    <template v-if="jenis_buku">
      <JenisBukuAdd @closeAddJenisBuku="close_add" />
    </template>
    <template v-if="jenis_buku_edit">
      <JenisBukuEdit
        :id_jenis_buku="id_jenis_buku"
        @closeEditJenisBuku="close_edit"
        @editFormJenisBuku="updateJenisBuku"
      />
    </template>
  </div>
</template>
<script>
import JenisBukuList from "./../jenis-buku-components/JenisBukuList";
import JenisBukuAdd from "./../jenis-buku-components/JenisBukuAdd";
import JenisBukuEdit from "./../jenis-buku-components/JenisBukuEdit";

export default {
  data() {
    return {
      jenis_buku: false,
      jenis_buku_edit: false,
      id_jenis_buku: null,
    };
  },
  methods: {
      reRender(){
        this.$forceUpdate()
     },
    add_buku() {
      this.jenis_buku = !this.jenis_buku;
    },
    edit_jenis_buku({ id }) {
      this.id_jenis_buku = id;
      this.jenis_buku_edit = !this.jenis_buku_edit;

      console.log("id buku:", id);
    },
    updateJenisBuku({ id, nama_jenis }) {
      console.log("id buku", id);
      axios
        .put(`/api/v1/jenis-buku/${id}`, {
          nama_jenis
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
      this.jenis_buku = false;
    },
    close_edit() {
      this.jenis_buku_edit = false;
    },
  },
  components: { JenisBukuList, JenisBukuAdd, JenisBukuEdit },
};
</script>
