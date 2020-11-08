import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Content from '@/components/Content.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Content.vue', () => {
  let getters
  let store

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
    })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('About')

  })
})
