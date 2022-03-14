<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Tambah Data Jenis Buku</h4>
        <form ref="form">
          <b-row>
            <b-col>
              <b-form-group label="Nama Jenis Buku" label-for="nama_jenis_buku">
                <input
                  id="nama_jenis_buku"
                  v-model="form.nama_jenis"
                  type="text"
                  :class="'form-control'"
                  autofocus
                  required
                />
              </b-form-group>
            </b-col>

          </b-row>
          <b-button variant="outline-primary" size="sm" @click="addBuku"
            >Tambah Jenis Buku</b-button
          >
          <b-button variant="outline-danger" size="sm" @click="close"
            >Close</b-button
          >
        </form>
        <h6 class="card-subtitle font-weight-normal text-muted"></h6>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        nama_jenis: null,
      },
      data: {
        jenis_buku: null,
      },
    };
  },
  beforeMount() {
      //
  },
  methods: {
    addBuku() {
      console.log("oke", this.form);
      axios
        .post("/api/v1/jenis-buku", this.form)
        .then(() => {
          this.modalSuccess();
        })
        .catch((e) => {
          console.log("e:", e);
          this.modalFailed();
        });
    },
    modalSuccess() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk("Data berhasil di tambah", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          this.$router.go(0);
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
    close() {
      this.$emit("closeAddJenisBuku");
    },
  },
  components: {
    //
  },
};
</script>
