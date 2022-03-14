<template>
  <div>
    <b-row>
      <!-- <pre>{{ data }}</pre> -->
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ length.buku }}</h4>
          <b-card-text class="mb-2">Buku</b-card-text>
          <b-progress :value="length.buku" max="50"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ length.jenis_buku }}</h4>
          <b-card-text class="mb-2">Jenis Buku</b-card-text>
          <b-progress
            variant="danger"
            :value="length.jenis_buku"
            max="50"
          ></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ length.kelas }}</h4>
          <b-card-text class="mb-2">Kelas</b-card-text>
          <b-progress
            variant="success"
            :value="length.kelas"
            max="50"
          ></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">{{ length.pinjam }}</h4>
          <b-card-text class="mb-2">Peminjam</b-card-text>
          <b-progress
            variant="warning"
            :value="length.pinjam"
            max="50"
          ></b-progress>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>

export default {
    data() {
        return {
            data: {
                kelas: null,
                buku: null,
                pinjam: null,
                jenis_buku: null
            },
            length: {
                kelas: null,
                buku: null,
                pinjam: null,
                jenis_buku: null
            }
        }
    },
    beforeMount() {
        this.loadAllData()
    },
    methods: {
        loadAllData() {
            this.loadKelas()
            this.loadBukus()
            this.loadJenisBukus()
            this.loadPinjams()
        },
        loadKelas() {
            this.$store.dispatch('kelas/kelas_')
                .then(result => {
                    this.data.kelas = []
                    this.length.kelas = result.length || 0
                    console.log('kamars:', result)
                    this.data.kelas = result
                })
                .catch(e => console.log(e))
        },
        loadBukus() {
            this.$store.dispatch('buku/bukus')
                .then(result => {
                    this.data.buku = []
                    this.length.buku = result.length || 0
                    console.log('bukus:', result)
                    this.data.buku = result
                })
                .catch(e => console.log(e))
        },
        loadJenisBukus() {
            this.$store.dispatch('jenisBuku/jenis_bukus')
                .then(result => {
                    this.data.jenis_buku = []
                    this.length.jenis_buku = result.length || 0
                    console.log('jenis_bukus:', result)
                    this.data.jenis_buku = result
                })
                .catch(e => console.log(e))
        },
        loadPinjams() {
            this.$store.dispatch('pinjam/pinjams')
                .then(result => {
                    this.data.pinjam = []
                    this.length.pinjam = result.length || 0
                    console.log('pinjams:', result)
                    this.data.pinjam = result
                })
                .catch(e => console.log(e))
        },
    },

}
</script>

