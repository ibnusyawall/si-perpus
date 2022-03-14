<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Edit Data Kelas: {{ id_kelas }}</h4>
        <form ref="form">
          <b-row>
            <b-col>
              <b-form-group label="Nama Jenis Buku" label-for="nama_kelas">
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
          <b-button variant="outline-primary" size="sm" @click="editKelas"
            >Edit Kelas</b-button
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
    props: ['id_kelas'],
  data() {
    return {
      form: {
          nama_kelas: null,
          form: {
              nama_kelas: null,
          }
      },
    };
  },
  methods: {
      editKelas() {
          this.$emit('editFormKelas', { id: this.id_kelas, ...this.form })
      },
      loadJenisBuku() {
          this.$store.dispatch('kelas/kelas', this.id_kelas)
            .then(result => {
                this.form.nama_kelas = result.nama_kelas
                console.log('kelas::', result)
            })
            .catch(e => console.log(e))
      },
      close() {
          this.$emit('closeEditKelas')
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
