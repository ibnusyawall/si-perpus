import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {
        id: null,
        nama_buku: null,
        keterangan_buku: null
    },
    mutations: {},
    actions: {
        bukus({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/buku')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },

        buku({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/buku/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
