import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { CoinBalanceWrapper } from 'components/Balances'

const Success = props => {
  const { balance, large } = props

  const Wrapper = styled.div``

  return (
    <LinkContainer to='/eth/transactions'>
      <Wrapper data-e2e='balanceDropdown-wallet-eth'>
        <CoinBalanceWrapper coin='ETH' balance={balance} large={large} />
      </Wrapper>
    </LinkContainer>
  )
}

Success.propTypes = {
  balance: PropTypes.number.isRequired
}

export default Success
