import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {
        id: null,
        nama_kelas: null,
    },
    mutations: {},
    actions: {
        kelas_({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/kelas')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },

        kelas({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/kelas/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
