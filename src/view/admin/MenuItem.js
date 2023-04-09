import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { getMenuItems, getIngredients, getCategories, deleteMenuItemById, deleteIngredientById } from '../../store/menu/action'
import './admin.css'
// import Menu from '../Menu';
// import { adminSignOut } from '../../Store/User/action'
// import AdminTopBar from './AdminTopBar'
// import Toast from '../../Components/Toast'

class MenuItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ingredient: {}, //ingredient to be edited
			// newIngredientName: '',
			// newIngredientType: 'noodle',
			// ingredientEditPopupShow: false,
			// ingredientCreatePopupShow: false,
			// ingredientTypes: ['noodle', 'rice', 'meat', 'seafood', 'vege', 'sauce']
		}
		this.deleteMenuItem = this.deleteMenuItem.bind(this)
		// this.deleteIngredient = this.deleteIngredient.bind(this)
		// this.selectIngredientToEdit = this.selectIngredientToEdit.bind(this)
		// this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this)
		// this.handleIngredientTypeChange = this.handleIngredientTypeChange.bind(this)
		// this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this)
		// this.cancelIngredientSubmit = this.cancelIngredientSubmit.bind(this)
		// this.handleNewIngredientNameChange = this.handleNewIngredientNameChange.bind(this)
		// this.handleNewIngredientTypeChange = this.handleNewIngredientTypeChange.bind(this)
		// this.handleNewIngredientSubmit = this.handleNewIngredientSubmit.bind(this)
		// this.cancelNewIngredientSubmit = this.cancelNewIngredientSubmit.bind(this)
		// this.openIngredientCreatPopup = this.openIngredientCreatPopup.bind(this)
	}

	static propTypes = {
		menu: PropTypes.array.isRequired,
		getMenuItems: PropTypes.func.isRequired,
		// getIngredients: PropTypes.func.isRequired,
		// ingredients: PropTypes.array.isRequired,
		// getCategories: PropTypes.func.isRequired,
		// categories: PropTypes.array.isRequired,
		// editIngredient: PropTypes.func.isRequired,
		// toastMes: PropTypes.string.isRequired,
		// toastShow: PropTypes.bool.isRequired,
		// createIngredient: PropTypes.func.isRequired,
		deleteMenuItemById: PropTypes.func.isRequired,
		// deleteIngredientById: PropTypes.func.isRequired
		// adminSignOut: PropTypes.func.isRequired
	}

	deleteMenuItem (id, image) {
		// console.log(id, image)
		if (window.confirm('Are you sure you wish to delete this item?')) {
			this.props.deleteMenuItemById(id, image)
		}
	}

	// deleteIngredient (id) {
	// 	if (window.confirm('Are you sure you wish to delete this item?')) {
	// 		// console.log(id)
	// 		this.props.deleteIngredientById(id)
	// 	}
	// }

	// selectIngredientToEdit (ingredient) {
	// 	// console.log(ingredient)
	// 	if (ingredient.type === null) ingredient.type = 'noodle'
	// 	this.setState({ingredient: ingredient})
	// 	setTimeout(() => {
	// 		// console.log(this.state.ingredient)
	// 		this.setState({ingredientEditPopupShow: true})
	// 	}, 200)
	// }

	// handleIngredientNameChange (event) {
	// 	let ingredient = {
	// 		_id: this.state.ingredient._id,
	// 		name: event.target.value,
	// 		type: this.state.ingredient.type
	// 	}
	// 	this.setState({ingredient: ingredient})
	// 	setTimeout(() => {
	// 		// console.log(this.state.ingredient)
	// 	}, 200)
	// }

	// handleIngredientTypeChange (event) {
	// 	let ingredient = {
	// 		_id: this.state.ingredient._id,
	// 		name: this.state.ingredient.name,
	// 		type: event.target.value
	// 	}
	// 	this.setState({ingredient: ingredient})
	// 	setTimeout(() => {
	// 		// console.log(this.state.ingredient)
	// 	}, 200)
	// }

	// handleIngredientSubmit () {
	// 	let ingredient = this.state.ingredient
	// 	this.props.editIngredient(ingredient)
	// 	setTimeout(() => {
	// 		this.setState({ingredientEditPopupShow: false})
	// 		this.setState({ingredient: {}})
	// 	}, 200)
	// }

	// cancelIngredientSubmit () {
	// 	this.setState({ingredientEditPopupShow: false})
	// 	this.setState({ingredient: {}})
	// }

	// openIngredientCreatPopup () {
	// 	this.setState({ingredientCreatePopupShow: true})
	// 	console.log(this.state.ingredientCreatePopupShow)
	// }

	// handleNewIngredientNameChange (event) {
	// 	this.setState({newIngredientName: event.target.value})
	// 	setTimeout(() => {
	// 		// console.log(this.state.ingredient)
	// 	}, 200)
	// }

	// handleNewIngredientTypeChange (event) {
	// 	this.setState({newIngredientType: event.target.value})
	// 	setTimeout(() => {
	// 		console.log(this.state.newIngredientType)
	// 	}, 200)
	// }

	// handleNewIngredientSubmit () {
	// 	// let ingredientName = this.state.newIngredientName
	// 	// console.log(ingredientName)
	// 	let ingredient = {
	// 		name: this.state.newIngredientName,
	// 		type: this.state.newIngredientType
	// 	}
	// 	this.props.createIngredient(ingredient)
	// 	setTimeout(() => {
	// 		this.setState({ingredientCreatePopupShow: false})
	// 		this.setState({newIngredientName: ''})
	// 	}, 200)
	// }

	// cancelNewIngredientSubmit () {
	// 	this.setState({ingredientCreatePopupShow: false})
	// 	this.setState({newIngredientName: ''})
	// }
	
	componentDidMount () {
		this.props.getMenuItems()
		this.props.getIngredients()
		// this.props.getCategories()
        // setTimeout(() => {
        //     console.log(this.props.menu)
        //     console.log(this.props.ingredients)
        // }, 1000)
		
  }

	render() {
		return (
			<div className="dashboardContainer">
				<h2 className="mt-4 mb-4 text-center">Menu Management</h2>
				<div style={{margin: '8px'}}>
					<Link to={'/admin/menuitem/add'}><button type="button" className="btn btn-primary">Add Menu Item</button></Link>
				</div>
				<hr/>
				{/* menu item table */}
				<div >
					<div className="mb-4">
						<table>
							<thead>
								<tr>
									<th className="px-4">Number</th>
									<th className="px-4">Name</th>
									<th className="px-4">Type</th>
									<th className="px-4">Action</th>
								</tr>
							</thead>
							<tbody>
								{this.props.menu.map((f, index) => {
									return <tr key={index} className="py-3 adminTableRow">
												<td className="px-4">{f.number}</td>
												<td className="px-4">{f.name}</td>
												<td className="px-4">{f.type.name}</td>
												<td className="px-4">
													<Link to={`/admin/menuitem/edit/${f.id}`}><button type="button" className="btn btn-outline-primary btn-sm mx-1" >Edit</button></Link>
													<button type="button" className="btn btn-outline-primary btn-sm mx-1" onClick={() => this.deleteMenuItem(f.id, f.image)}>Delete</button>
												</td>
											</tr>
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  menu: state.Menu.menu,
//   ingredients: state.Menu.ingredients,
//   categories: state.Menu.categories
})

const mapDispatchToProps = {
	getMenuItems,
	getIngredients,
	getCategories,
	// editIngredient,
	// createIngredient,
	deleteMenuItemById,
	deleteIngredientById
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
