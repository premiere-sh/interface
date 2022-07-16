describe('The Login Page', () => {
  it('sets auth cookie when logging in via form submission', () => {
    const userData = { username: 'username', password: 'password' }

    cy.visit('/login')

    cy.get('input[name=username]').type(userData.username)

    cy.get('input[name=password]').type(`${userData.password}{enter}`)

    cy.url().should('include', '/profile')

    cy.contains(`${userData.username}`)
  })
})
