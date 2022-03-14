import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {
        id: null,
        nama_jenis: null,
    },
    mutations: {},
    actions: {
        jenis_bukus({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/jenis-buku')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },

        jenis_buku({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/jenis-buku/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
