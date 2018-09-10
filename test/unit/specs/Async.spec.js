import { shallow } from 'vue-test-utils'
import Async from '@/components/Async'

describe('Async.vue', () => {
    it('get Data', (done) => {

        const wraper = shallow(Async);
        wraper.find('button').trigger('click');
        
        setTimeout(() => {
            console.log(wraper.vm.value);
            expect(wraper.find('div h3').text()).to.equal('get data');
            done();
            // wraper.vm.$nextTick(() => {
            //     // expect(wraper.find('div h3').text()).to.equal('get data');
            //     // done();
            // })
        })
    })
})