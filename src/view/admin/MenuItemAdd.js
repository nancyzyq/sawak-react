import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getIngredients, getCategories, createMenuItem } from '../../store/menu/action'

class MenuItemAdd extends Component {
    constructor(props) {
		super(props)
		this.state = {
			name: '',
			type: '',
			// active: false,
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
		this.handleImageChange = this.handleImageChange.bind(this)
		this.cancel = this.cancel.bind(this)
		// this.handleActiveChange = this.handleActiveChange.bind(this)
    }
    static propTypes = {
		// menuItemToEdit: PropTypes.object.isRequired,
		// getMenuToEdit: PropTypes.func.isRequired,
		getIngredients: PropTypes.func.isRequired,
		ingredients: PropTypes.array.isRequired,
		getCategories: PropTypes.func.isRequired,
		categories: PropTypes.array.isRequired,
		createMenuItem: PropTypes.func.isRequired
		// toastMes:PropTypes.string.isRequired,
		// toastShow:PropTypes.bool.isRequired
	}

	handleNameChange (event) {
    	this.setState({name: event.target.value})
	}

	handleTypeChange (event) {
		let type1 = this.state.categories.find(i => i.name === event.target.value)
		this.setState({type: type1})
	}

	// handleActiveChange (event) {
	// 	this.setState({active: event.target.checked})
	// }

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
		// let ingredients = []
		ingredientList.map((i) => {
			if (i.text === name) i.selected = checked
		})
		this.setState({ingredientList: ingredientList})
	}

	handleSubmit(event) {
		event.preventDefault()
		let menuItem = {
			id: this.state.id,
			name: this.state.name,
			type: this.state.type._id,
			// active: this.state.active,
			price: this.state.price,
			number: this.state.number,
			// image: this.state.image,
			ingredients: []
		}
		this.state.ingredientList.map((i) => {
			if (i.selected) {
				menuItem.ingredients.push(i._id)
			}
		})
        this.props.createMenuItem(menuItem)
	}

	cancel() {
		window.location.href = '/admin/menuitem'
	}
    
    componentDidMount () {
		this.props.getIngredients()
		this.props.getCategories()
		setTimeout(() => {
			let ingredients = []
			// console.log(this.props.menuItemToEdit)
			this.props.ingredients.map((i) =>{
				let ingredient = {
					text: i.name,
					_id: i._id,
					selected: false
				}
				ingredients.push(ingredient)
			})
			this.setState({
				ingredientList: ingredients,
				categories: this.props.categories,
				type: this.props.categories[0]
			})
		}, 1500)
    }

    render () {
        return (
            <div className="dashboardContainer">
				<div>
                	<h2 className="mt-4 mb-4 text-center">Add Menu Item</h2>

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
						<button type="button" className="btn btn-primary mx-1" style={{width: 'fit-content'}} onClick={this.cancel}>Cancel</button>
					</form>
				</div>

				{/* <form onSubmit={this.handleSubmit} className="text-left">
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
				{/* <Toast mes={this.props.toastMes} show={this.props.toastShow} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // menuItemToEdit: state.Menu.menuItemToEdit,
    ingredients: state.Menu.ingredients,
    categories: state.Menu.categories
    // toastMes: state.Home.toastMes,
    // toastShow: state.Home.toastShow
  })
  
const mapDispatchToProps = {
    //   getMenuToEdit,
      getIngredients,
	  getCategories,
	  createMenuItem
    //   updateMenu
  }
export default connect(mapStateToProps, mapDispatchToProps)(MenuItemAdd)
