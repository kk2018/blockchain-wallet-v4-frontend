import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon, Text } from 'blockchain-info-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const FiatText = styled(Text)`
  font-size: ${props => props.mobileSize};
  @media (min-width: 480px) {
    font-size: ${props => props.size};
  }
`

const FiatDisplay = props => {
  const {
    showIcon,
    coin,
    children,
    size,
    weight,
    color,
    cursor,
    mobileSize,
    ...rest
  } = props

  return (
    <Wrapper {...rest}>
      {showIcon &&
        coin === 'BTC' && (
          <Icon name='btc' size={size} weight={weight} color={color} />
        )}
      {showIcon &&
        coin === 'ETH' && (
          <Icon name='eth' size={size} weight={weight} color={color} />
        )}
      {showIcon &&
        coin === 'BCH' && (
          <Icon name='bch' size={size} weight={weight} color={color} />
        )}
      <FiatText
        mobileSize={mobileSize}
        size={size}
        weight={weight}
        color={color}
        cursor={cursor}
        data-e2e={coin + 'FiatAmt'}
      >
        {children}
      </FiatText>
    </Wrapper>
  )
}

FiatDisplay.propTypes = {
  coin: PropTypes.oneOf(['BTC', 'ETH', 'BCH']).isRequired,
  children: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  size: PropTypes.string,
  weight: PropTypes.number,
  color: PropTypes.string,
  cursor: PropTypes.string,
  mobileSize: PropTypes.string
}

FiatDisplay.defaultProps = {
  showIcon: false,
  size: '16px',
  weight: 300,
  color: 'gray-5',
  cursor: 'auto'
}

export default FiatDisplay
