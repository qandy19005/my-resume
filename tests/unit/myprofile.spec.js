import { createLocalVue, shallowMount } from '@vue/test-utils'
import MyProfile from '@/components/MyProfile.vue'
import tw from './../../src/plugins/langs/tw.json'
import VueI18n from 'vue-i18n'

const localVue = createLocalVue()
localVue.use(VueI18n)

describe('MyProfile.vue', () => {
  const i18n = new VueI18n({
      locale: 'tw',
      messages: {
        tw
      }
    })
  const wrapper = shallowMount(MyProfile,
    {
      i18n,
      localVue
    })
  it('My name is correct', () =>{
    expect(wrapper.text()).toContain('張家銓 Asa')
  })
  it('My slogan is correct', () =>{
    expect(wrapper.text()).toContain('沒有做不到的事，做就對了')
  })
})
