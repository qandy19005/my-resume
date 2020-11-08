import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Navbar.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      setContent: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('call store action "setContent" when button is clicked', async () => {
    const wrapper = shallowMount(Navbar, {
      store, 
      localVue,
      mocks: {
        $t: () => {}
      }
    })
    wrapper.find('button').trigger('click')
    expect(actions.setContent).toHaveBeenCalled()
  })
})
