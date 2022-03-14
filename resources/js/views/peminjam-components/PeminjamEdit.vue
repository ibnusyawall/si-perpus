<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Edit Data Peminjam: {{ id_pinjam }}</h4>
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
            <b-col>
              <b-form-group label="Status" label-for="status">
                <select
                  id="status"
                  class="form-control selectric"
                  v-model="form.status"
                >
                  <option v-for="v in data.status" :key="v.id" :value="v.value">
                    {{ v.value }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Deskripsi" label-for="deskripsi">
                <input
                  id="deskripsi"
                  v-model="form.deskripsi"
                  type="text"
                  :class="'form-control'"
                  autofocus
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Denda" label-for="denda">
                <input
                  id="denda"
                  v-model="form.denda"
                  type="number"
                  :class="'form-control'"
                  required
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-button variant="outline-primary" size="sm" @click="editFormPeminjam"
            >Edit Peminjam</b-button
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
    props: ['id_pinjam'],
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
        status: [
            {
                id: 1,
                value: 'pinjam'
            },
            {
                id: 2,
                value: 'kembali'
            },
            {
                id: 3,
                value: 'telat'
            }
        ],
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
    this.loadPeminjam()
  },
  methods: {
    editFormPeminjam() {
      console.log("oke", this.form);
      this.$emit('editFormPeminjam', { id: this.id_pinjam, form: {...this.form} })
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
    loadPeminjam() {
        this.$store.dispatch('pinjam/pinjam', this.id_pinjam)
        .then(response => {
          this.form.buku_id = response.buku_id
          this.form.kelas_id = response.kelas_id
          this.form.nama_peminjam = response.nama_peminjam
          this.form.rentang_pinjam = response.rentang_pinjam
    this.form.status = response.status
    this.form.denda = response.denda
    this.form.deskripsi = response.deskripsi
    
            console.log('edit peminjam:', response)
        })
    },
    loadBukus() {
      this.$store
        .dispatch("buku/bukus",)
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
      this.$emit("closeEditPeminjam");
    },
  },
  components: {
    //
  },
};
</script>
