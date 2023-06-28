import React from 'react'
import Call from './Call'

describe('<Call />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Call />)
  })
})