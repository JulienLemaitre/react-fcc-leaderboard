import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import SortableTh from '../components/sortable_th';
import LeadersList from '../components/leaders_list';

class MembersList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderBy: 'month'
    };

    this.sortByMonth = this.sortByMonth.bind(this);
    this.sortByAllTime = this.sortByAllTime.bind(this);
  }

  sortByMonth() {
    if (this.state.orderBy !== 'month') {
      this.setState({ orderBy: 'month'});
    }
  }

  sortByAllTime() {
    if (this.state.orderBy !== 'allTime') {
      this.setState({ orderBy: 'allTime'});
    }
  }

  render() {

    return (
      <div className="members-list">
        <Table striped bordered condensed hover>
          <thead>
            <th className="rank">#</th>
            <th className="name">Camper name</th>
            <SortableTh label="Last 30 days points" sortAction={this.sortByMonth} active={this.state.orderBy === 'month'} />
            <SortableTh label="All time points" sortAction={this.sortByAllTime} active={this.state.orderBy === 'allTime'} />
          </thead>
          <LeadersList
            listAllTime={this.props.listAllTime}
            orderBy={this.state.orderBy}
          />
        </Table>
      </div>
    );
  }
}

MembersList.propTypes = {
  listAllTime: PropTypes.bool
};

export default MembersList;