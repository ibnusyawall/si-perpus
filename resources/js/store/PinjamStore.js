import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {
        id: null,
    },
    mutations: {},
    actions: {
        pinjams({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/peminjam')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },

        pinjam({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/peminjam/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
