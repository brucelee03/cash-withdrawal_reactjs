import './index.css'

const DenominationItem = props => {
  const {item, onSumAmount} = props
  const {value, id} = item
  const onSumWithrawalAmount = () => {
    onSumAmount(id, value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onSumWithrawalAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
