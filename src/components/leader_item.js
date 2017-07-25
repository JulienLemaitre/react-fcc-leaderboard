import React from 'react';
import PropTypes from 'prop-types';

const LeaderItem = ({ user, order, index }) => {
  return (
    <tr>
      <td className="rank">{index + 1}</td>
      <td className="name"><a href={"https://forum.freecodecamp.org/u/" + user.username} target="_blank" alt={user.username + " profil"}><img className="avatar" src={user.img} alt={user.username} /> {user.username}</a></td>
      <td className={order === 'month' ? 'count selected' : 'count'}>{user.recent}</td>
      <td className={order === 'allTime' ? 'count selected' : 'count'}>{user.alltime}</td>
    </tr>
  )
};

LeaderItem.propTypes = {
  user: PropTypes.object,
  order: PropTypes.string,
  index: PropTypes.number
};

export default LeaderItem;