<template>
  <div>
    <b-modal
      id="modalHapusDataKelas"
      ref="hapus-data"
      title="Hapus Data User"
      :header-bg-variant="'danger'"
      :header-text-variant="'white'"
      :ok-title="'Hapus'"
      :okVariant="'danger'"
      @ok="handleHapus"
    >
      <p>
        <b>{{ hapus.nama_kelas }}</b> akan di hapus, apakah yakin ingin
        menghapusnya?
      </p>
    </b-modal>
    <div class="table-responsive">
      <table class="table v-middle text-nowrap bg-transparent">
        <thead class="bg-light">
          <tr class>
            <th class="border-0">Kelas</th>
            <th class="border-0 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in data.kelas" :key="v.id">
            <td>{{ v.nama_kelas }}</td>
            <td class="text-center">
              <b-button
                variant="success"
                size="sm"
                class="mr-1"
                @click="edit_kelas(v.id)"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                class="mr-1"
                @click="hapus_kelas(v.id, v.nama_kelas)"
              >
                <i class="fas fa-trash"></i>
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      data: {
        kelas: null,
      },
      length: {
        kelas: null,
      },
      hapus: {
        id: null,
        nama_kelas: null,
      },
    };
  },
  beforeMount() {
    this.loadKelas();
  },
  methods: {
    loadKelas() {
      this.$store
        .dispatch("kelas/kelas_")
        .then((result) => {
          this.data.kelas = [];
          console.log("kelass:", result);
          this.data.kelas = result;
        })
        .catch((e) => console.log(e));
    },
    edit_kelas(id) {
      this.$emit("editKelas", { id: id });
    },
    hapus_kelas(id, nama_kelas) {
      this.hapus.id = id;
      this.hapus.nama_kelas = nama_kelas;
      this.$bvModal.show("modalHapusDataKelas");
    },
    async handleHapus(e) {
      e.preventDefault();
      try {
        let hapus_data = await axios.delete(`/api/v1/kelas/${this.hapus.id}`);
      } catch (e) {
        this.$nextTick(() => {
          this.$bvModal.hide("modalHapusDataKelas");
          this._alert("Hapus Data User", "Data gagal dihapus.");
        });
      } finally {
        this.$nextTick(() => {
          this.loadKelas();
          this.$bvModal.hide("modalHapusDataKelas");
          this._alert("Hapus Data User", "Data berhasil dihapus.");
        });
      }
    },
    _alert(title, msg) {
      this.$bvModal.msgBoxConfirm(msg, {
        title: title,
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "OK",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true,
      });
    },
  },
};
</script>
