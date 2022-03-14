<template>
  <div>
    <b-modal
      id="modalHapusDataPeminjam"
      ref="hapus-data"
      title="Hapus Data User"
      :header-bg-variant="'danger'"
      :header-text-variant="'white'"
      :ok-title="'Hapus'"
      :okVariant="'danger'"
      @ok="handleHapus"
    >
      <p>
        <b>{{ hapus.nama_peminjam }}</b> akan di hapus, apakah yakin ingin
        menghapusnya?
      </p>
    </b-modal>
    <div class="table-responsive">
      <table class="table v-middle text-nowrap bg-transparent">
        <thead class="bg-light">
          <tr class>
            <th class="border-0">Nama Peminjam</th>
            <th class="border-0">Kelas</th>
            <th class="border-0">Buku</th>
            <th class="border-0">Rentang Pinjam</th>
            <th class="border-0">Status</th>
            <th class="border-0 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in data.pinjam" :key="v.id">
            <td>{{ v.nama_peminjam }}</td>
            <td>{{ v.nama_kelas }}</td>
            <td>{{ v.nama_buku }}</td>
            <td>{{ v.rentang_pinjam }} Hari</td>
            <td>
              <b-badge
                :variant="
                  v.status == 'pinjam'
                    ? 'warning'
                    : v.status == 'kembali'
                    ? 'success'
                    : 'danger'
                "
                >{{ v.status }}</b-badge
              >
            </td>
            <td class="text-center">
              <b-button
                variant="success"
                size="sm"
                class="mr-1"
                @click="edit_peminjam(v.id)"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                class="mr-1"
                @click="hapus_peminjam(v.id, v.nama_peminjam)"
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
      data: {
        pinjam: null,
      },
      length: {
        pinjam: null,
      },
      hapus: {
        id: null,
        nama_peminjam: null,
      },
    };
  },
  beforeMount() {
    this.loadPinjams();
  },
  methods: {
    loadPinjams() {
      this.$store
        .dispatch("pinjam/pinjams")
        .then((result) => {
          this.data.pinjam = [];
          this.length.pinjam = result.length || 0;
          console.log("pinjams:", result);
          this.data.pinjam = result;
        })
        .catch((e) => console.log(e));
    },
    edit_peminjam(id) {
      this.$emit("editPeminjam", { id: id });
    },
    hapus_peminjam(id, nama_peminjam) {
      this.hapus.id = id;
      this.hapus.nama_peminjam = nama_peminjam;
      this.$bvModal.show("modalHapusDataPeminjam");
    },
    async handleHapus(e) {
      e.preventDefault();
      try {
        let hapus_data = await axios.delete(
          `/api/v1/peminjam/${this.hapus.id}`
        );
      } catch (e) {
        this.$nextTick(() => {
          this.$bvModal.hide("modalHapusDataPeminjam");
          this._alert("Hapus Data User", "Data gagal dihapus.");
        });
      } finally {
        this.$nextTick(() => {
          this.loadPinjams();
          this.$bvModal.hide("modalHapusDataPeminjam");
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
