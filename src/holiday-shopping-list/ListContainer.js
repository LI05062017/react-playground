import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: undefined,
    nameOfGift: undefined,
    price: undefined,
    budget: 500,
    totalPriceOfGifts: undefined
  }
  componentDidMount () {
    const giftsArray = [{name: 'Apple TV', price: 300}, {name: 'Candy', price: 3}]
    this.setState({ gifts: giftsArray })
  }

  handleNameOfGiftChange = (e) => {
    this.setState({nameOfGift: e.target.value})
  }

  handlePriceChange = (e) => {
    this.setState({price: e.target.value})
  }

  addNewGift = (e) => {
    e.preventDefault()
    const newGift = { name: this.state.nameOfGift, price: this.state.price }
    const newGiftList = this.state.gifts
    newGiftList.push(newGift)
    let totalPrice = this.getTotalPrice()
    let giftPrice = Number(newGift.price)
    let budget = this.state.budget
    console.log(this.getTotalPrice(), newGift.price, this.state.budget)
    if (totalPrice + giftPrice > budget) {
      alert('Total price is greater than your budget')
      return
    } else {
      this.setState({ gifts: newGiftList })
      this.setState({ nameOfGift: '' })
      this.setState({ priceOfGift: ' ' })
    }
    this.setState({ gifts: newGiftList })
    this.setState({ gift: '' })
  }

  getTotalPrice = () => {
    const list = this.state.gifts
    let totalPrice = 0
    for (let i = 0; i < list.length; i += 1) {
      totalPrice += Number(list[i].price)
    }
    return totalPrice
  }

  render () {
    return (
      <div>
        <h4> Made it to the list! </h4>
        <GiftForm
          handleNameOfGiftChange={this.handleNameOfGiftChange}
          handlePriceChange={this.handlePriceChange}
          addNewGift={this.addNewGift}
        />

        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h1> No Gifts Yet </h1>
        }
      </div>
    )
  }
}

export default ListContainer
