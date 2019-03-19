import { expect } from 'chai'
import 'mocha'
import { RadixMessageParticle, RadixAddress } from '../../RadixAtomModel'


describe('RadixMessageParticle', () => {

    
    {
        const from = RadixAddress.generateNew()
        const data = 'abc'
        const metaData = {a: 'b'}
        const addresses = [RadixAddress.generateNew(), RadixAddress.generateNew()]

        const particle = new RadixMessageParticle(from, data, metaData, addresses)

        it(`should get data`, () => {
            expect(particle.getData().toString()).to.equal(data)
        })
    
        it(`should get addresses`, () => {
            expect(particle.getAddresses()).to.deep.equal(addresses)
        })
    }

    
})