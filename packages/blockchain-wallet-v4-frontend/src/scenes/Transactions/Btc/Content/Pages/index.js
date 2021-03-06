import React from 'react'

import DataError from 'components/DataError'
import Loading from './template.loading'
import Success from './template.success'

class Pages extends React.PureComponent {
  render () {
    const { data, currency, buysellPartner } = this.props

    return data.cata({
      Success: value => (
        <Success
          transactions={value}
          currency={currency}
          buysellPartner={buysellPartner}
        />
      ),
      Failure: message => (
        <DataError
          onClick={() => this.props.onRefresh()}
          message={message}
          onArchive={this.props.onArchive}
        />
      ),
      Loading: () => <Loading />,
      NotAsked: () => <Loading />
    })
  }
}

export default Pages
