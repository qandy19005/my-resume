import { createLocalVue, shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import tw from './../../src/plugins/langs/tw.json'
import VueI18n from 'vue-i18n'

const localVue = createLocalVue()
localVue.use(VueI18n)

describe('Header.vue', () => {
  it('Select tw will show 語言 content', async() => {
    document.body.innerHTML =
    '<h1 id="ml6" class="ml6">' +
      '<span class="text-wrapper">' +
        '<span class="letters"></span>'+
      '</span>'+
    '</h1>' +
    '<div>';
    const msg = '語言'
    const i18n = new VueI18n({
        locale: 'tw',
        messages: {
            tw
        }
      })
    const wrapper = shallowMount(Header, {
      propsData: { msg },
      i18n,
      localVue
    })
    const select = wrapper.find('select')
    select.element.value = 'en';
    // wrapper.find('button').trigger('click')
    await select.trigger('change');
    expect(wrapper.text()).toContain('Resume')
    // console.log(wrapper.find('select').trigger('change'))
    
  })
})
