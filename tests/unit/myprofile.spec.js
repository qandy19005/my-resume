import { mount, shallowMount } from '@vue/test-utils'
import MyProfile from '@/components/MyProfile.vue'

describe('MyProfile.vue', () => {
  const wrapper = shallowMount(MyProfile)
  it('My name is correct', () =>{
    expect(wrapper.text()).toContain('張家銓 Asa')
  })
  it('My slogan is correct', () =>{
    expect(wrapper.text()).toContain('沒有做不到的事，做就對了')
  })
})
