<template>
  <div>
    <b-modal
      id="modalHapusDataJenisBuku"
      ref="hapus-data"
      title="Hapus Data User"
      :header-bg-variant="'danger'"
      :header-text-variant="'white'"
      :ok-title="'Hapus'"
      :okVariant="'danger'"
      @ok="handleHapus"
    >
      <p>
        <b>{{ hapus.nama_jenis }}</b> akan di hapus, apakah yakin ingin
        menghapusnya?
      </p>
    </b-modal>
    <div class="table-responsive">
      <table class="table v-middle text-nowrap bg-transparent">
        <thead class="bg-light">
          <tr class>
            <th class="border-0">Nama Jenis</th>
            <th class="border-0 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in data.jenis_buku" :key="v.id">
            <td>{{ v.nama_jenis }}</td>
            <td class="text-center">
              <b-button
                variant="success"
                size="sm"
                class="mr-1"
                @click="edit_jenis_buku(v.id)"
              >
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                class="mr-1"
                @click="hapus_jenis_buku(v.id, v.nama_jenis)"
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
        jenis_buku: null,
      },
      length: {
        jenis_buku: null,
      },
      hapus: {
        id: null,
        nama_jenis: null,
      },
    };
  },
  beforeMount() {
    this.loadJenisBukus();
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
    edit_jenis_buku(id) {
      this.$emit("editJenisBuku", { id: id });
    },
    hapus_jenis_buku(id, nama_jenis) {
      this.hapus.id = id;
      this.hapus.nama_jenis = nama_jenis;
      this.$bvModal.show("modalHapusDataJenisBuku");
    },
    async handleHapus(e) {
      e.preventDefault();
      try {
        let hapus_data = await axios.delete(
          `/api/v1/jenis-buku/${this.hapus.id}`
        );
      } catch (e) {
        this.$nextTick(() => {
          this.$bvModal.hide("modalHapusDataJenisBuku");
          this._alert("Hapus Data User", "Data gagal dihapus.");
        });
      } finally {
        this.$nextTick(() => {
          this.loadJenisBukus();
          this.$bvModal.hide("modalHapusDataJenisBuku");
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
