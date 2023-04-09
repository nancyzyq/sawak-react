import React,{Component} from 'react'
import PropTypes from 'prop-types'
// import Select from 'react-select';
import { connect } from 'react-redux'
import { getMenuItemsByType } from '../../store/menu/action'

class MenuFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			types: [
				{value: 'noodle', label: 'Noodle', class: 'typeChipUnselected'},
				{value: 'rice', label: 'Rice', class: 'typeChipUnselected'},
				{value: 'soup', label: 'Soup', class: 'typeChipUnselected'}
			]
        }
        this.handleChipClick = this.handleChipClick.bind(this)
	}

	static propTypes = {
		getMenuItemsByType: PropTypes.func.isRequired
    }
    
    handleChipClick (event) {
        let types = this.state.types
        // console.log(types, event.currentTarget.textContent)
        types.map((i) => {
			if (i.label === event.currentTarget.textContent) {
                // if (i.class === 'typeChip') {
                //     i.class = 'typeChipSelected'
                // } else {
                //     i.class = 'typeChip'
                // }
                i.class = i.class === 'typeChipUnselected' ? 'typeChipSelected' : 'typeChipUnselected'
            }
        })
		this.setState({types: types})
		let selectedTypes = types.filter((i) => i.class === 'typeChipSelected')
		this.props.getMenuItemsByType(selectedTypes)
    }

	render () {
		return (
			<div>
				<div className="filterChips">
					{this.state.types.map((i, index) => {
					    return <div className={'px-4 mx-3 typeChip ' + i.class} key={index} value={i.value} onClick={this.handleChipClick}>{i.label}</div>
					})}
				</div>
			</div>
		)
	}
}

// const mapStateToProps = (state) => ({
	// foodList: state.Food.menu
// })
  
  const mapDispatchToProps = {
    getMenuItemsByType
  }

  export default connect(null, mapDispatchToProps)(MenuFilter)
