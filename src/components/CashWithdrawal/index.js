import {Component} from 'react'
import DenominatonItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 2000,
      denominationsList: props.denominationsList,
    }
  }

  onSumAmount = (id, value) => {
    this.setState(prevState => {
      const newBalance = prevState.balance - value
      return {balance: newBalance}
    })
  }

  render() {
    const {balance, denominationsList} = this.state
    return (
      <div className="bg-container">
        <div className="account-card">
          <div className="username-container">
            <div className="profile-img">
              <h1 className="profile-name">S</h1>
            </div>
            <h2 className="username">Sarah Williams</h2>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div className="balance-amount">
              <p className="balance">{balance}</p>
              <p className="balance-in">In Rupees</p>
            </div>
          </div>
          <div className="withdrawal-container">
            <p className="withdrawal-title">Withdraw</p>
            <p className="withdrawal-type">CHOOSE SUM (IN RUPEES)</p>
            <ul className="amount-list">
              {denominationsList.map(item => (
                <DenominatonItem
                  item={item}
                  onSumAmount={this.onSumAmount}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
