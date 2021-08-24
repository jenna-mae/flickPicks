import * as React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Stars = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
`;

function Popularity(props) {
  if (props.stars <= '1000') {
    return (
      <Stars>
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
      </Stars>
    );
  } else if (props.stars <= '2000') {
    return (
      <Stars>
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
      </Stars>
    );
  } else if (props.stars <= '3000') {
    return (
      <Stars>
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
      </Stars>
    );
  } else if (props.stars <= '4000') {
    return (
      <Stars>
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'grey'} size={14} />
      </Stars>
    );
  } else {
    return (
      <Stars>
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
        <FontAwesomeIcon icon={faStar} color={'yellow'} size={14} />
      </Stars>
    );
  }
}

export default Popularity;
