describe('The Login Page', () => {
  it('sets auth cookie when logging in via form submission', () => {
    // destructuring assignment of the this.currentUser object
    const userData = { username: 'oliwier', password: 'Szafagra123!' }

    cy.visit('/login')

    cy.get('input[name=username]').type(userData.username)

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${userData.password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/profile')

    // UI should reflect this user being logged in
    cy.get().should('contain', 'oliwier')
  })
})
