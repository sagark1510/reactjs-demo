import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadList } from '../actions/list';
import ListItem from '../components/ListItem';

class List extends Component {
  componentDidMount() {
    this.props.loadList();
  }

  render() {
    if (this.props.loading) {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>Loading...</span>
        </div>
      )
    }

    if (this.props.error) {
      return (
        <div style={{ textAlign: 'center', color: 'red' }}>
          <span>{this.props.error}</span>
        </div>
      )
    }

    return (
      <div style={{ width: '600px', margin: '10px auto' }}>
        {this.props.data.data.map(row => <ListItem key={row.paragraph} row={row} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ list }) => {
  const { data, loading, error } = list;
  console.log(list);
  return { data, loading, error };
}

export default connect(mapStateToProps, { loadList })(List);
