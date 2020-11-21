import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Content from '@/components/Content.vue'
import tw from './../../src/plugins/langs/tw.json'
import VueI18n from 'vue-i18n'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueI18n)

describe('Content.vue', () => {
  let getters
  let store
  const i18n = new VueI18n({
    locale: 'tw',
    messages: {
      tw
    }
  })
  it('When currentContent is "about" will show about content', async () => {
    getters = {
      currentContent: () => 'about'
    }
    store = new Vuex.Store({
      getters
    })
    const wrapper = mount(Content, {
      store,
      localVue,
      i18n
    })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('關於我')

  })
  it('When currentContent is "skill" will show about content', async () => {
    getters = {
      currentContent: () => 'skill'
    }
    store = new Vuex.Store({
      getters
    })
    const wrapper = mount(Content, {
      store,
      localVue,
      i18n
    })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('程式語言')
  })

  it('When currentContent is "about" will show about content', async () => {
    document.body.innerHTML =
    '<h1 id="ml5" class="ml5">' +
      '<span class="text-wrapper">' +
        '<span class="letters"></span>'+
      '</span>'+
    '</h1>' +
    '<div>';
    getters = {
      currentContent: () => 'exp'
    }
    store = new Vuex.Store({
      getters
    })
    const wrapper = mount(Content, {
      store,
      localVue,
      i18n
    })
    const span = wrapper.find('span')
    expect(span.text()).toBe('六書堂  2020 / 02 - 至今')
  })
})
