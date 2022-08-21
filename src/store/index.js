import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      menuDlg: false,
      menuColor: 'white',
      selectMenu: 'home',
      colorList: {
        home: 'white',
        ximalayaMusic: 'black',
        ximalayaAi: 'blue',
        amazon: 'white',
        gameLive: 'black',
        planetarium: 'black',
        solarterm: 'black',
        audioLibrary: 'white',
      }
    }
  },
  mutations: {
    setMenuDlg(state, payload) {
      state.menuDlg = payload
    },
    setMenuColor(state, payload) {
      state.menuColor = payload
    },
    setSelectMenu(state, payload) {
      state.selectMenu = payload
    }
  }
})
export default store;