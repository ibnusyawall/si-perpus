<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Tambah Data Peminjam</h4>
        <form ref="form">
          <b-row>
            <b-col>
              <b-form-group label="Nama Peminjam" label-for="nama_peminjam">
                <input
                  id="nama_peminjam"
                  v-model="form.nama_peminjam"
                  type="text"
                  :class="'form-control'"
                  autofocus
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Kelas" label-for="kelas">
                <select
                  id="kelas"
                  class="form-control selectric"
                  v-model="form.kelas_id"
                >
                  <option v-for="v in data.kelas" :key="v.id" :value="v.id">
                    {{ v.nama_kelas }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Rentang Pinjam" label-for="rentang_pinjam">
                <select
                  id="rentang_pinjam"
                  class="form-control selectric"
                  v-model="form.rentang_pinjam"
                >
                  <option
                    v-for="v in data.rentang_pinjam"
                    :key="v.id"
                    :value="v.id"
                  >
                    {{ v.terhitung }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Buku" label-for="buku">
                <select
                  id="buku"
                  class="form-control selectric"
                  v-model="form.buku_id"
                >
                  <option v-for="v in data.buku" :key="v.id" :value="v.id">
                    {{ v.nama_buku }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="addPeminjam"
            >Tambah Peminjam</b-button
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
        nama_peminjam: null,
        deskripsi: null,
        rentang_pinjam: null,
        denda: null,
        status: "pinjam",
        kelas_id: null,
        buku_id: null,
      },
      data: {
        nama_kelas: null,
        rentang_pinjam: [
          {
            id: 1,
            terhitung: "1 Hari",
          },
          {
            id: 2,
            terhitung: "2 Hari",
          },
          {
            id: 3,
            terhitung: "3 Hari",
          },
        ],
        kelas: null,
        buku: null
      },
    };
  },
  beforeMount() {
    this.loadKelas();
    this.loadBukus();
  },
  methods: {
    addPeminjam() {
      console.log("oke", this.form);
      axios
        .post("/api/v1/peminjam", this.form)
        .then(() => {
          this.modalSuccess();
        })
        .catch((e) => {
          console.log("e:", e);
          this.modalFailed();
        });
    },
    loadKelas() {
      this.$store
        .dispatch("kelas/kelas_")
        .then((result) => {
          this.data.kelas = [];
          console.log("kelas:", result);
          this.data.kelas = result;
        })
        .catch((e) => console.log(e));
    },
    loadBukus() {
      this.$store
        .dispatch("buku/bukus")
        .then((result) => {
          this.data.buku = [];
          console.log("bukus:", result);
          this.data.buku = result;
        })
        .catch((e) => console.log(e));
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
      this.$emit("closeAddPeminjam");
    },
  },
  components: {
    //
  },
};
</script>
