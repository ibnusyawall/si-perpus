<template>
  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent">
      <thead class="bg-light">
        <tr class>
          <th class="border-0">Nama Peminjam</th>
          <th class="border-0">Kelas</th>
          <th class="border-0">Buku</th>
          <th class="border-0">Rentang Pinjam</th>
          <th class="border-0">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in data.pinjam" :key="v.id">
            <td>{{ v.nama_peminjam }}</td>
            <td>{{ v.nama_kelas }}</td>
            <td>{{ v.nama_buku }}</td>
            <td>{{ v.rentang_pinjam }} Hari</td>
            <td>
                <b-badge :variant="v.status == 'pinjam' ? 'warning' : v.status == 'kembali' ? 'success' : 'danger'">{{ v.status }}</b-badge>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
    data() {
        return {
            data: {
                pinjam: null
            },
            length: {
                pinjam: null
            }
        }
    },
    beforeMount() {
        this.loadPinjams()
    },
    methods: {
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
    }
}
</script>
