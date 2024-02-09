import React from 'react'
import WizardsView from './page'

describe('<WizardsView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WizardsView />)
  })
})