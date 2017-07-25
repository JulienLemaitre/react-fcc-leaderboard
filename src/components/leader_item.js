import React from 'react';

const LeaderItem = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td className="name"><img className="avatar" src={props.user.img} alt={props.user.username} /> {props.user.username}</td>
      <td>{props.user.recent}</td>
      <td>{props.user.alltime}</td>
    </tr>
  )
};

export default LeaderItem;