import React from 'react'
import {connect} from 'react-redux'
import { changeFilter } from '../redux/phoneBook/phoneBookActions'

const Filter = (props) => {
    window.props = props
    return (
        <label htmlFor="">
          <input
            name='filter'
            type='text'
            placeholder='Search contacts'
            value={props.value}
            onChange={props.handleFilterChange}
          />
        </label>
    )
}

const mapStateToProps = (state) => ({
  value: state.phoneBook.filter
})

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (e) => dispatch(changeFilter(e.currentTarget.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);