import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Image from 'react-bootstrap/esm/Image';
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GROUP_ROUTE } from '../utils/consts';

const GroupItem = ({ group }) => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
  
    const handleClick = () => {
      navigate(`${GROUP_ROUTE}/${group.id}`);
    };
  
    return (
      <Col md={3} className={"mt-3"}>
        <Card
          style={{ 
            width: 150,
            cursor: "pointer",
            transform: hovered ? "scale(1.1)" : "scale(1)"
          }}
          border={"light"}
          onClick={handleClick}
          className='card-hover'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image width={200} height={200} src={process.env.REACT_APP_API_URL + group.img} />
          <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div>{group.rating}</div>
              <Image width={20} height={20} src={star} />
            </div>
          </div>
          <div>{group.name}</div>
        </Card>
      </Col>
    );
  };
  
export default GroupItem;