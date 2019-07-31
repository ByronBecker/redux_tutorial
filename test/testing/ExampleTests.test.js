import * as React from 'react'
import App from '../../src/App'
import {shallow} from 'enzyme'

//Test Values
test('basic laws of human understanding should still be pertinent', () => {
    expect(1 + 1).not.toEqual(1)
    expect(1 + 1).toEqual(2)
})

//Test a component
test('rolling one die should never produce this outcome', () => {
    const app = shallow(<App/>).instance()
    expect(app.shouldAlwaysReturnALuckyNumber()).not.toEqual(13)
    expect(app.shouldAlwaysReturnALuckyNumber()).toEqual(7)
})