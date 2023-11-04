describe('login test',()=>{
    beforeEach('login app', ()=>{
        console.log('open driver')
    })
    it('invalid username and valid password',()=>{
        // console.log('login failed with invalid username')
    })
    it.skip('valid username and invalid password',()=>{
        // console.log('login failed with invalid password')
    })
    it('enter valid username and valid password',()=>{
        // console.log('positive tested')
    })
    afterEach('login app', ()=>{
        console.log('close driver')
    })
})
describe('Home page test',()=>{
    before('logged in',()=>{
        console.log('logged in')
    })
    it('Home page title validation',()=>{
    })
    after('logged out',()=>{
        console.log('logged out')
    })
})