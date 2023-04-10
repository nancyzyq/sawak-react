import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminNav from '../../components/AdminNav'
import { withRouterParams } from '../../utility/utility'
import { getMenuItem, getIngredients, getCategories, editMenuItem } from '../../store/menu/action'

class MenuItemEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			type: '',
			active: false,
			number: '',
			ingredients: [],
			id: '',
			ingredientList: [],
			categories: [],
			price: '',
			image: '',
			imageToUpload: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handleTypeChange = this.handleTypeChange.bind(this)
		this.handleNumberChange = this.handleNumberChange.bind(this)
		this.handleIngredientChange = this.handleIngredientChange.bind(this)
		this.handlePriceChange = this.handlePriceChange.bind(this)
		this.cancel = this.cancel.bind(this)
	}

	static propTypes = {
		menuItem: PropTypes.object.isRequired,
		getMenuItem: PropTypes.func.isRequired,
		getIngredients: PropTypes.func.isRequired,
		ingredients: PropTypes.array.isRequired,
		getCategories: PropTypes.func.isRequired,
		categories: PropTypes.array.isRequired,
		editMenuItem: PropTypes.func.isRequired
	}
	handleNameChange (event) {
    	this.setState({name: event.target.value})
	}

	handleTypeChange (event) {
		let type1 = this.state.categories.find(i => i.name === event.target.value)
		this.setState({type: type1})
	}

	handleNumberChange (event) {
    	this.setState({number: event.target.value})
	}

	handlePriceChange (event) {
    	this.setState({price: event.target.value})
	}

	handleImageChange (event) {
		// console.log(event.target.files[0])
		this.setState({imageToUpload: event.target.files[0]})
	}

	handleIngredientChange (event) {
		let name = event.target.name
		let checked = event.target.checked
		let ingredientList = this.state.ingredientList
		let ingredients = []
		ingredientList.map((i) => {
			if (i.text === name) i.selected = checked
		})
		this.setState({ingredientList: ingredientList})
	}

	handleSubmit(event) {
		event.preventDefault()
		let menuItemToSave = {
			id: this.state.id,
			name: this.state.name,
			type: this.state.type._id,
			number: this.state.number,
			price: this.state.price,
			// image: this.state.image,
			ingredients: []
		}
		this.state.ingredientList.map((i) => {
			if (i.selected) {
				menuItemToSave.ingredients.push(i._id)
			}
		})
		if (this.state.imageToUpload) {
			const formData = new FormData() 
			// console.log(formData, this.state.imageToUpload)
			formData.append('file', this.state.imageToUpload)
			// console.log(formData)
			this.props.editMenuItem(menuItemToSave, formData)
		} else {
			this.props.editMenuItem(menuItemToSave)
		}
	}

	cancel() {
		window.location.href = '/admin/menuitem'
	}

	componentDidMount () {
		let id = this.props.params.id
		this.props.getMenuItem(id)
		this.props.getIngredients()
		this.props.getCategories()
		setTimeout(() => {
			this.setState({ 
				name: this.props.menuItem.name,
				id: this.props.menuItem.id,
				type: this.props.menuItem.type,
				categories: this.props.categories,
				price: this.props.menuItem.price || '',
				number: this.props.menuItem.number || ''
			})
			let ingredients = []
			this.props.ingredients.map((i) =>{
				let ingredient = {
					text: i.name,
					_id: i._id
				}
                // select ingredients in menu item from ingredient list
				if (this.props.menuItem.ingredients.length > 0) {
					if (this.props.menuItem.ingredients.findIndex((x) => x.name === i.name) !== -1) {
						ingredient.selected = true
					} else {
						ingredient.selected = false
					}
				} else {
					ingredient.selected = false
				}
				
				ingredients.push(ingredient)
			})
			this.setState({ingredientList: ingredients})
		}, 2000)
  }

	render() {
		return (
			<div>
			<AdminNav />
			<div className="dashboardContainer">
				<div>
                <h2 className="mt-4 mb-4 text-center">Edit Menu Item</h2>
				<form className="row mt-5" onSubmit={this.handleSubmit}>
						<div className="col-sm-12 col-md-5">
							<div className="mb-3">
								<label className="form-label">Number</label>
								<input className="form-control" id="menuItemNumber" value={this.state.number} onChange={this.handleNumberChange}/>
							</div>
							<div className="mb-3">
								<label className="form-label">Name</label>
								<input className="form-control" id="menuItemName" value={this.state.name} onChange={this.handleNameChange}/>
							</div>
							<div className="mb-3">
								<label className="form-label">Price</label>
								<input className="form-control" id="menuItemPrice" value={this.state.price} onChange={this.handlePriceChange}/>
							</div>
							<div className="mb-3">
								<label className="form-label">Type</label>
								<select className="form-select" value={this.state.type.name} onChange={this.handleTypeChange}>
									{this.state.categories.map((i, index) => {
										return <option key={index} value={i.name}>{i.name}</option>
									})}
								</select>
							</div>
						</div>
						<div className="col-sm-12 col-md-7">
						<label className="form-label">Ingredients</label>
						<div className="row">
							{this.state.ingredientList.map((f, index) => {
								return  <div className="col-sm-12 col-md-6 col-xxl-4 mb-3" key={index}>
									<input
										className="form-check-input m-2"
										name={f.text}
										type="checkbox"
										checked={f.selected}
										onChange={this.handleIngredientChange} />
									<label className="form-check-label mt-1">
										{f.text}
									</label>
								</div>
							})}
						</div>
						</div>
						<button type="submit" className="btn btn-primary mx-1" style={{width: 'fit-content'}}>Save</button>
						<button className="btn btn-primary mx-1" style={{width: 'fit-content'}} onClick={this.cancel}>Cancel</button>
					</form>





					{/* <form onSubmit={this.handleSubmit}>
						<div className="editdiv">
							<label>
								<span className="editLabel">ID:</span>
								<span>{this.state.id}</span>
							</label>
						</div>

						<div className="editdiv">
							<label>
								<span className="editLabel">Number:</span>
								<input className="editInput" type="text" value={this.state.number} onChange={this.handleNumberChange} />
							</label>
						</div>

						<div className="editdiv">
							<label>
								<span className="editLabel">Name:</span>
								<input className="editInput" type="text" value={this.state.name} onChange={this.handleNameChange} />
							</label>
						</div>

						<div className="editdiv">
							<label>
								<span className="editLabel">Active</span>
								<input
									className="editInput editCheckbox"
									name="Active"
									type="checkbox"
									checked={this.state.active}
									onChange={this.handleActiveChange} />
							</label>
						</div>

						<div className="editdiv">
							<label>
								<span className="editLabel">Type:</span>
								<select className="editInput" value={this.state.type.name} onChange={this.handleTypeChange}>
									{this.state.categories.map((i, index) => {
										return <option key={index} value={i.name}>{i.name}</option>
									})}
								</select>
							</label>
						</div>

						<div className="editdiv">
							<label>
								<span className="editLabel">Price:</span>
								<input className="editInput" type="text" value={this.state.price} onChange={this.handlePriceChange} />
							</label>
						</div>

						<div className="editdiv">
							<label>
								<span className="editLabel">Image:</span>
							</label>
							{this.state.image ? <img src={this.state.image} className="foodImg" /> : ''}
						</div>

						<div className="editdiv">
							<input type="file" name="file" onChange={this.handleImageChange}/>
						</div>

						<div className="editdiv">
							<span className="editLabel">Ingredients:</span>
							<div className="ingreientSelectList">
								{this.state.ingredientList.map((f, index) => {
									return  <div key={index}>
												<input
													className="editInput editCheckbox"
													name={f.text}
													type="checkbox"
													checked={f.selected}
													onChange={this.handleIngredientChange} />
													<span>{f.text}</span>
											</div>
								})}
							</div>
						</div>
						<input type="submit" value="Save" />
					</form> */}
				</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    menuItem: state.Menu.menuItem,
    ingredients: state.Menu.ingredients,
    categories: state.Menu.categories,
//   toastMes: state.Home.toastMes,
//   toastShow: state.Home.toastShow
})

const mapDispatchToProps = {
	getMenuItem,
	getIngredients,
	getCategories,
	editMenuItem
}

export default withRouterParams(connect(mapStateToProps, mapDispatchToProps)(MenuItemEdit))
