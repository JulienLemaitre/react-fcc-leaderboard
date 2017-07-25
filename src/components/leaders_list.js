import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';
import LeaderItem from './leader_item';

class LeadersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.fetchList(this.props.listAllTime);
  }

  componentWillReceiveProps(newProps) {
    this.fetchList(newProps.listAllTime);
  }

  setList(list) {
    let theList = list || this.state.list;
    let order = this.props.orderBy === 'month' ? 'recent' : 'alltime';
    let displayList = _.orderBy(theList,[order],['desc']);
    this.setState({list : displayList});
  }

  fetchList(listAllTime) {
    const url = listAllTime === true ? 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime' : 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    axios.get(url)
      .then( (response) => {
        const listObj = response.data;
        let listArray = [];
        for (let user in listObj) {
          listArray.push(listObj[user]);
        }
        this.setList(listArray);
      } );
  }

  render() {

    const leaders = this.state.list.map((user, index) => {
      return (
        <LeaderItem key={user.username} user={user} index={index}/>
      )
    });

    if (this.state.list) {
      return (
        <tbody>
        {leaders}
        </tbody>
      );
    } else {
      return (
        <tbody>
          <th><td>loading...</td></th>
        </tbody>
      );
    }
  }
}

LeadersList.propTypes = {
  listAllTime: PropTypes.bool,
  orderBy: PropTypes.string
};

export default LeadersList;