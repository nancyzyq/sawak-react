import React,{Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMenuItems } from '../../store/menu/action'
import { Carousel } from '../../components/Carousel';
import MenuCardList from './MenuCardList'
import MenuFilter from './MenuFilter';


class Menu extends Component {
  constructor(props) {
		super(props)
	}
  static propTypes = {
    menu: PropTypes.array.isRequired,
		getMenuItems: PropTypes.func.isRequired,
  }
  componentDidMount () {
		this.props.getMenuItems()
    setTimeout(() => {
      console.log(this.props.menu)
    }, 1000)
  }
  render() {
    return (
      <div>
        <Carousel/>
        <div className="container">
          <div className="text-center mb-4">
            <h1>Menu</h1>
          </div>
          
          <MenuFilter />
          <hr className="mb-5" />
            <MenuCardList menu={this.props.menu} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  menu: state.Menu.filteredMenu,
  // ingredients: state.Menu.ingredients
})

const mapDispatchToProps = {
	getMenuItems,
  // getIngredients
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)