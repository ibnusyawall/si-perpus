<template>
  <div>
    <b-modal
      id="modalHapusDataBuku"
      ref="hapus-data"
      title="Hapus Data User"
      :header-bg-variant="'danger'"
      :header-text-variant="'white'"
      :ok-title="'Hapus'"
      :okVariant="'danger'"
      @ok="handleHapus"
    >
      <p>
        <b>{{ hapus.nama_buku }}</b> akan di hapus, apakah yakin ingin
        menghapusnya?
      </p>
    </b-modal>

    <div class="table-responsive">
      <table class="table v-middle text-nowrap bg-transparent">
        <thead class="bg-light">
          <tr class>
            <th class="border-0">Nama Buku</th>
            <th class="border-0">ketrangan Buku</th>
            <th class="border-0">Jenis</th>
            <th class="border-0 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in data.buku" :key="v.id">
            <td>{{ v.nama_buku }}</td>
            <td>{{ v.keterangan_buku }}</td>
            <td>{{ v.nama_jenis }}</td>
            <td class="text-center">
              <b-button
                variant="success"
                size="sm"
                class="mr-1"
                @click="edit_buku(v.id)"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                class="mr-1"
                @click="hapus_buku(v.id, v.nama_buku)"
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
        buku: null,
      },
      length: {
        buku: null,
      },
      hapus: {
        id: null,
        nama_buku: null,
      },
    };
  },
  beforeMount() {
    this.loadBukus();
  },
  methods: {
    loadBukus() {
      this.$store
        .dispatch("buku/bukus")
        .then((result) => {
          this.data.buku = [];
          this.length.buku = result.length || 0;
          console.log("bukus:", result);
          this.data.buku = result;
        })
        .catch((e) => console.log(e));
    },
    edit_buku(id) {
      this.$emit("editBuku", { id: id });
    },
    hapus_buku(id, nama_buku) {
      this.hapus.id = id;
      this.hapus.nama_buku = nama_buku;
      this.$bvModal.show("modalHapusDataBuku");
    },
    async handleHapus(e) {
      e.preventDefault();
      try {
        let hapus_data = await axios.delete(`/api/v1/buku/${this.hapus.id}`);
      } catch (e) {
        this.$nextTick(() => {
          this.$bvModal.hide("modalHapusDataBuku");
          this._alert("Hapus Data User", "Data gagal dihapus.");
        });
      } finally {
        this.$nextTick(() => {
          this.loadBukus();
          this.$bvModal.hide("modalHapusDataBuku");
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
