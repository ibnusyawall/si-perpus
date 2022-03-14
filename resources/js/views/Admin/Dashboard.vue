<template>
  <div>
    <CardStatistics />
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Statistik Peminjam</h4>
        <h6 class="card-subtitle font-weight-normal text-muted">
          Overview of Latest Month
        </h6>
      </b-card-body>
      <PeminjamanList/>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardStatistics from "./../admin-components/CardStatistics.vue";
import PeminjamanList from "./../admin-components/PeminjamanList.vue";

export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState({
      login_success: (state) => state.login_success,
      user: (state) => state.user,
    }),
  },
  beforeMount() {
    //
  },
  methods: {
    //
  },
  mounted() {
    console.log('oke')
  },
  components: {
    CardStatistics,
    PeminjamanList
  },
};
</script>
