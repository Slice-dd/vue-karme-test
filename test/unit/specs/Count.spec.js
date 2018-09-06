import { shallow } from 'vue-test-utils'
import Counter from '@/components/Counter'


describe('Counter.vue', () => {
    it('should increment one', () => {
        const wraper = shallow(Counter)
        wraper.find('button').trigger('click')
        expect(wraper.find('div h3').text()).contains('Counters 1');
    })
})