import React from 'react'
import { compose } from 'redux'

import wizardProvider from 'providers/WizardProvider'
import modalEnhancer from 'providers/ModalEnhancer'
import RequestBtc from './template'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

class RequestBtcContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { receiveAddress: '' }
    this.setReceiveAddress = this.setReceiveAddress.bind(this)
  }

  componentWillMount () {
    this.props.resetStep()
  }

  setReceiveAddress (addr) {
    this.setState({ receiveAddress: addr })
  }

  render () {
    const { receiveAddress } = this.state
    const { step, position, total, closeAll, ...rest } = this.props

    return (
      <RequestBtc position={position} total={total} closeAll={closeAll}>
        {step === 1 && (
          <FirstStep setReceiveAddress={this.setReceiveAddress} {...rest} />
        )}
        {step === 2 && <SecondStep receiveAddress={receiveAddress} {...rest} />}
      </RequestBtc>
    )
  }
}

const enhance = compose(
  modalEnhancer('RequestBtc'),
  wizardProvider('requestBitcoin', 2)
)

export default enhance(RequestBtcContainer)
