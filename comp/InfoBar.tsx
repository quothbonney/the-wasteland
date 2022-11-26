import { useState, FC, useEffect } from "react"
import cx from "classnames";
import { FontAwesomeIcon, Props } from "@fortawesome/react-fontawesome";
import anns from '../public/annotations.json'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from "react-transition-group";
import connectMongo from '../utils/connect'
import AnnotationModel from '../models/annotationModel'
const ObjectId = require('mongo-objectid');

interface id {
  infoID: string | null;
}

interface annotation {
  title: string,
  text: string,
}

const InfoBar: FC<id> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [annot, setAnnot] = useState<annotation>();

  const fetchData = async () => {
    let str: string = `localhost:3000/api/${ props.infoID }`;
    try {
      const response = await fetch('https://randomuser.me/api/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setAnnot(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {fetchData()});
  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
      <div className={"sidebar-body"}>
        {annot ? <>
        <h3 className="info-title">{annot.title}</h3>
        <hr />
        <p className={"info-text"} dangerouslySetInnerHTML={{__html: annot.text}}></p>
        </> : <></>
        }
      </div>
      </CSSTransition>
    </div>
  )
}

export default InfoBar;