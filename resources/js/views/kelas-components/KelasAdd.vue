<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Tambah Data Kelas</h4>
        <form ref="form">
          <b-row>
            <b-col>
              <b-form-group label="Nama Kelas" label-for="nama_kelas">
                <input
                  id="nama_kelas"
                  v-model="form.nama_kelas"
                  type="text"
                  :class="'form-control'"
                  autofocus
                  required
                />
              </b-form-group>
            </b-col>

          </b-row>
          <b-button variant="outline-primary" size="sm" @click="addKelas"
            >Tambah Kelas</b-button
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
        nama_kelas: null,
      },
      data: {
        nama_kelas: null,
      },
    };
  },
  beforeMount() {
      //
  },
  methods: {
    addKelas() {
      console.log("oke", this.form);
      axios
        .post("/api/v1/kelas", this.form)
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
      this.$emit("closeAddKelas");
    },
  },
  components: {
    //
  },
};
</script>
