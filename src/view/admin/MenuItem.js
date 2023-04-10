import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminNav from '../../components/AdminNav'
import { getMenuItems, getIngredients, getCategories, deleteMenuItemById, deleteIngredientById } from '../../store/menu/action'
import './admin.css'

class MenuItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ingredient: {} //ingredient to be edited
		}
		this.deleteMenuItem = this.deleteMenuItem.bind(this)
	}

	static propTypes = {
		menu: PropTypes.array.isRequired,
		getMenuItems: PropTypes.func.isRequired,
		deleteMenuItemById: PropTypes.func.isRequired
	}

	deleteMenuItem (id, image) {
		if (window.confirm('Are you sure you wish to delete this item?')) {
			this.props.deleteMenuItemById(id, image)
		}
	}
	
	componentDidMount () {
		this.props.getMenuItems()
		this.props.getIngredients()
  	}

	render() {
		return (
			<div>
			<AdminNav />
				<div className="dashboardContainer">
					
					<h2 className="mt-4 mb-4 text-center">Menu Management</h2>
					<div style={{margin: '8px'}}>
						<Link to={'/admin/menuitem/add'}><button type="button" className="btn btn-primary">Add Menu Item</button></Link>
					</div>
					<hr/>
					{/* menu item table */}
					<div >
						<div className="mb-4 adminTableContainer">
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
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  menu: state.Menu.menu
})

const mapDispatchToProps = {
	getMenuItems,
	getIngredients,
	getCategories,
	deleteMenuItemById,
	deleteIngredientById
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
