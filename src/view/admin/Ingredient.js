import React,{Component} from 'react'
import PropTypes from 'prop-types'
import AdminNav from '../../components/AdminNav'
import { connect } from 'react-redux'
import { getMenuItems, getIngredients, getCategories, editIngredient, createIngredient, deleteMenuItemById, deleteIngredientById } from '../../store/menu/action'
import './admin.css'

class Ingredient extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ingredient: {name: '', type: ''}, //ingredient to be edited
			newIngredientName: '',
			newIngredientType: 'noodle',
			ingredientEditPopupShow: false,
			ingredientTypes: ['noodle', 'rice', 'meat', 'seafood', 'vege', 'sauce']
		}
		this.deleteFood = this.deleteFood.bind(this)
		this.deleteIngredient = this.deleteIngredient.bind(this)
		this.selectIngredientToEdit = this.selectIngredientToEdit.bind(this)
		this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this)
		this.handleIngredientTypeChange = this.handleIngredientTypeChange.bind(this)
		this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this)
		this.cancelIngredientSubmit = this.cancelIngredientSubmit.bind(this)
		this.handleNewIngredientNameChange = this.handleNewIngredientNameChange.bind(this)
		this.handleNewIngredientTypeChange = this.handleNewIngredientTypeChange.bind(this)
		this.handleNewIngredientSubmit = this.handleNewIngredientSubmit.bind(this)
	}

	static propTypes = {
		menu: PropTypes.array.isRequired,
		getMenuItems: PropTypes.func.isRequired,
		getIngredients: PropTypes.func.isRequired,
		ingredients: PropTypes.array.isRequired,
		getCategories: PropTypes.func.isRequired,
		categories: PropTypes.array.isRequired,
		editIngredient: PropTypes.func.isRequired,
		createIngredient: PropTypes.func.isRequired,
		deleteMenuItemById: PropTypes.func.isRequired,
		deleteIngredientById: PropTypes.func.isRequired
	}

	deleteFood (id, image) {
		if (window.confirm('Are you sure you wish to delete this item?')) {
			this.props.deleteFoodById(id, image)
		}
	}

	deleteIngredient (id) {
		if (window.confirm('Are you sure you wish to delete this item?')) {
			this.props.deleteIngredientById(id)
		}
	}

	selectIngredientToEdit (ingredient) {
		if (ingredient.type === null) ingredient.type = 'noodle'
		this.setState({ingredient: ingredient})
	}

	handleIngredientNameChange (event) {
		let ingredient = {
			_id: this.state.ingredient._id,
			name: event.target.value,
			type: this.state.ingredient.type
		}
		this.setState({ingredient: ingredient})
	}

	handleIngredientTypeChange (event) {
		let ingredient = {
			_id: this.state.ingredient._id,
			name: this.state.ingredient.name,
			type: event.target.value
		}
		this.setState({ingredient: ingredient})
	}

	// edit ingredient
	handleIngredientSubmit () {
		let ingredient = this.state.ingredient
		this.props.editIngredient(ingredient)
		setTimeout(() => {
			this.setState({ingredientEditPopupShow: false})
			this.setState({ingredient: {name: '', type: ''}})
		}, 200)
	}

	// cancel edit ingredient 
	cancelIngredientSubmit () {
		this.setState({ingredientEditPopupShow: false})
		this.setState({ingredient: {name: '', type: ''}})
	}


	handleNewIngredientNameChange (event) {
		this.setState({newIngredientName: event.target.value})
	}

	handleNewIngredientTypeChange (event) {
		this.setState({newIngredientType: event.target.value})
		setTimeout(() => {
			console.log(this.state.newIngredientType)
		}, 200)
	}

	handleNewIngredientSubmit () {
		let ingredient = {
			name: this.state.newIngredientName,
			type: this.state.newIngredientType
		}
		this.props.createIngredient(ingredient)
	}

	
	componentDidMount () {
		this.props.getMenuItems()
		this.props.getIngredients()
		this.props.getCategories()	
  	}

	render() {
		return (
			<div>
				<AdminNav />
				<div className="dashboardContainer">
                    {/* ingredient list */}
                    <h2 className="mt-4 mb-4 text-center">Ingredient Management</h2>
					<div style={{margin: '8px'}}>
						<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addIngredientModal">
							Add Ingredient
						</button>
						<hr/>
					</div>
                    <div className="px-4">
						<div className='row'>
							{this.props.ingredients.map((f, index) => {
								return  <div key={index} className="col-md-6 col-xl-4 px-1 py-3">
											<span className="px-2">{f.name}</span>
											<button type="button" className="btn btn-outline-primary btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#editIngredientModal" onClick={() => this.selectIngredientToEdit(f)}>Edit</button>
											<button type="button" className="btn btn-outline-primary btn-sm mx-1" onClick={() => this.deleteIngredient(f._id)}>Delete</button>
										</div>
							})}
                        </div>
                    </div>


					{/* edit ingredient modal */}
					<div className="modal fade" id="editIngredientModal" aria-labelledby="editIngredientModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header">
									<h5 className="modal-title" id="editIngredientModalLabel">Edit Ingredient</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body mx-5 mb-3">
									<div className="mb-2">
										<label className="form-label">Name</label>
										<input className="form-control"  value={this.state.ingredient.name} onChange={this.handleIngredientNameChange}/>
									</div>
									<div>
											<label className="form-label">Type</label>
											<select className="form-select" value={this.state.ingredient.type} onChange={this.handleIngredientTypeChange}>
												{this.state.ingredientTypes.map((i, index) => {
														return <option key={index} value={i}>{i}</option>
													})}
											</select>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleIngredientSubmit}>Save</button>
								</div>
							</div>
						</div>
					</div>
					
					{/* add ingredient modal  */}
					<div className="modal fade" id="addIngredientModal" aria-labelledby="addIngredientModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header">
									<h5 className="modal-title" id="addIngredientModalLabel">Add Ingredient</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body mx-5 mb-3">
									<div className="mb-2">
										<label className="form-label">Name</label>
										<input className="form-control"  value={this.state.newIngredientName} onChange={this.handleNewIngredientNameChange}/>
									</div>
									<div>
											<label className="form-label">Type</label>
											<select className="form-select" value={this.state.newIngredientType} onChange={this.handleNewIngredientTypeChange}>
												{this.state.ingredientTypes.map((i, index) => {
														return <option key={index} value={i}>{i}</option>
													})}
											</select>
											
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleNewIngredientSubmit}>Save</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
		)
	}
}

const mapStateToProps = (state) => ({
  menu: state.Menu.menu,
  ingredients: state.Menu.ingredients,
  categories: state.Menu.categories
})

const mapDispatchToProps = {
	getMenuItems,
	getIngredients,
	getCategories,
	editIngredient,
	createIngredient,
	deleteMenuItemById,
	deleteIngredientById
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient)
