import React from 'react';
import { GrView } from 'react-icons/gr';
import { MdOutdoorGrill } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { TbAirConditioning } from 'react-icons/tb';
import { LiaSwimmingPoolSolid } from 'react-icons/lia';
import { MdOutlinePool } from 'react-icons/md';
import { FaHouseChimney } from 'react-icons/fa6';
import { GiResize } from 'react-icons/gi';
import { FaParking } from 'react-icons/fa';
import { FaSmokingBan } from 'react-icons/fa';
import { FaChargingStation } from 'react-icons/fa';
import { MdHotTub } from 'react-icons/md';
import { FaHotTubPerson } from 'react-icons/fa6';

const Icons = () => {
  const icons = [
    { name: 'חדרים ללא עישון', icon: <FaSmokingBan /> },
    { name: '  חניה בחינם', icon: <FaParking /> },
    { name: '350 מ"ר גודל', icon: <GiResize /> },
    { name: 'בית פרטי', icon: <FaHouseChimney /> },
    { name: 'בריכה פרטית', icon: <MdOutlinePool /> },
    { name: 'בריכת שחייה חיצונית', icon: <LiaSwimmingPoolSolid /> },
    { name: 'נוף', icon: <GrView /> },
    { name: 'מיזוג אוויר', icon: <TbAirConditioning /> },
    { name: 'אינטרנט אלחוטי בחינם', icon: <FaWifi /> },
    { name: 'מתקני ברביקיו', icon: <MdOutdoorGrill /> },
    { name: 'טעינה חשמלית לרכב', icon: <FaChargingStation /> },
    { name: 'בריכה מחוממת', icon: <MdHotTub /> },
    { name: 'גאקוזי', icon: <FaHotTubPerson /> },
  ];

  const Icon = ({ name, icon }) => (
    <div className="icon-container">
      <p>{name}</p>
      <p style={{ fontSize: '25px' }}>{icon}</p>
    </div>
  );

  return (
    <div className="icons-row">
      {icons.map((icon) => (
        <Icon key={icon.name} name={icon.name} icon={icon.icon} />
      ))}
    </div>
  );
};

export default Icons;
