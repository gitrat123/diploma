import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Context} from '../index';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const TypeBar = observer(() => {
  const {group} = useContext(Context)
  return (
    <div className="sidebar">
      <ListGroup className="mt-3">
        {group.types.map(type =>
          <ListGroup.Item
            style={{cursor: 'pointer', fontSize: '20px'}}
            active={type.id === group.selectedType.id}
            onClick={() => group.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
