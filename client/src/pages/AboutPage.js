import React, { useState } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap';
import AboutUs from '../components/AboutUs';
import OurTeam from '../components/OurTeam';
import Documents from '../components/Documents';

const items = [
  { label: 'О нас', component: AboutUs },
  { label: 'Наш коллектив', component: OurTeam },
  { label: 'Документы', component: Documents },
];


const AboutPage = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (item) => {
    if (openItem === item) {
      setOpenItem(null);
    } else {
      setOpenItem(item);
      setActiveItem({ ...item, props: item.subItems ? { type: item.subItems[0].type } : undefined });
    }
  };

  const renderContent = () => {
    const Component = activeItem.component;
    return activeItem.props && activeItem.props.type ? <Component {...activeItem.props} /> : <Component />;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <ListGroup>
            {items.map((item, index) => (
              <>
                <ListGroup.Item
                  active={activeItem === item}
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </ListGroup.Item>
                {openItem === item && item.subItems && item.subItems.length > 0 && (
                  <Collapse in={openItem === item}>
                    <div>
                      {item.subItems.map((subItem, index) => (
                        <ListGroup.Item
                          key={index}
                          active={activeItem.props.type === subItem.type}
                          onClick={() => handleItemClick({ ...item, props: { type: subItem.type } })}>
                          {subItem.label}
                        </ListGroup.Item>
                      ))}
                    </div>
                  </Collapse>
                )}
              </>
            ))}
          </ListGroup>
        </div>
        <div className="col-md-9">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AboutPage;