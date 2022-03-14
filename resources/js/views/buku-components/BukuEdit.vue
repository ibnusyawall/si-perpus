<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Edit Data Buku: {{ id_buku }}</h4>
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
          <b-button variant="outline-primary" size="sm" @click="editBuku"
            >Edit Buku</b-button
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
    props: ['id_buku'],
  data() {
    return {
      form: {
          nama_buku: null,
          keterangan_buku: null,
          form: {
              nama_buku: null,
              keterangan_buku: null
          }
      },
    };
  },
  methods: {
      editBuku() {
          this.$emit('editFormBuku', { id: this.id_buku, ...this.form })
      },
      loadBuku() {
          this.$store.dispatch('buku/buku', this.id_buku)
            .then(result => {
                this.form.nama_buku = result.nama_buku
                this.form.keterangan_buku = result.keterangan_buku
                console.log('buku::', result)
                this.data.buku = result
            })
            .catch(e => console.log(e))
      },
      close() {
          this.$emit('closeEditBuku')
      }
  },
  beforeMount() {
      this.loadBuku()
  },
  components: {
    //
  },
};
</script>
