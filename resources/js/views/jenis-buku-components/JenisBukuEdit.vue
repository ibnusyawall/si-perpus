<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Edit Data Jenis Buku: {{ id_jenis_buku }}</h4>
        <form ref="form">
          <b-row>
            <b-col>
              <b-form-group label="Nama Jenis Buku" label-for="nama_jenis">
                <input
                  id="nama_jenis"
                  v-model="form.nama_jenis"
                  type="text"
                  :class="'form-control'"
                  autofocus
                  required
                />
              </b-form-group>
            </b-col>

          </b-row>
          <b-button variant="outline-primary" size="sm" @click="editJenisBuku"
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
    props: ['id_jenis_buku'],
  data() {
    return {
      form: {
          nama_jenis: null,
          form: {
              nama_jenis: null,
          }
      },
    };
  },
  methods: {
      editJenisBuku() {
          this.$emit('editFormJenisBuku', { id: this.id_jenis_buku, ...this.form })
      },
      loadJenisBuku() {
          this.$store.dispatch('jenisBuku/jenis_buku', this.id_jenis_buku)
            .then(result => {
                this.form.nama_jenis = result.nama_jenis
                console.log('buku::', result)
            })
            .catch(e => console.log(e))
      },
      close() {
          this.$emit('closeEditJenisBuku')
      }
  },
  beforeMount() {
      this.loadJenisBuku()
  },
  components: {
    //
  },
};
</script>
