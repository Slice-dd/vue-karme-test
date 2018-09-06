import { shallow } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wraper = shallow(HelloWorld)
    expect(wraper.find('.hello h1').text())
      .to.equal('Welcome to Your Vue.js App')
  })
})
