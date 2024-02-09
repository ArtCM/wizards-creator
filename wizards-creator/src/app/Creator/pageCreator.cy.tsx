import React from 'react'
import Creator from './page'

describe('<Creator />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Creator />)
  })
})