<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Tambah Data Buku</h4>
        <form ref="form" enctype="multipart/form-data">
          <b-row>
            <b-col>
              <b-form-group label="Nama Buku" label-for="nama_buku">
                <input
                  id="nama_buku"
                  v-model="form.nama_buku"
                  type="text"
                  :class="'form-control'"
                  autofocus
                  required
                />
              </b-form-group>
            </b-col>

            <b-col>
              <b-form-group label="Jenis Buku" label-for="jenis_buku">
                <select id="jenis_buku" class="form-control selectric" v-model="form.jenis_id">
                  <option v-for="v in data.jenis_buku" :key="v.id" :value="v.id">
                    {{ v.nama_jenis }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Keterangan Buku" label-for="keterangan_buku">
                <input
                  id="keterangan_buku"
                  v-model="form.keterangan_buku"
                  type="text"
                  :class="'form-control'"
                  required
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="addBuku"
            >Tambah Buku</b-button
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
        nama_buku: null,
        keterangan_buku: null,
        jenis_id: null,
      },
      data: {
        jenis_buku: null,
      },
    };
  },
  beforeMount() {
      this.loadJenisBukus()
  },
  methods: {
    loadJenisBukus() {
      this.$store
        .dispatch("jenisBuku/jenis_bukus")
        .then((result) => {
          this.data.jenis_buku = [];
          console.log("jenis_bukus:", result);
          this.data.jenis_buku = result;
        })
        .catch((e) => console.log(e));
    },
    addBuku() {
      console.log("oke", this.form);
      axios
        .post("/api/v1/buku", this.form)
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
      this.$emit("closeAddBuku");
    },
  },
  components: {
    //
  },
};
</script>
