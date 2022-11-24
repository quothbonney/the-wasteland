import { useState, FC } from "react"
import cx from "classnames";
import { FontAwesomeIcon, Props } from "@fortawesome/react-fontawesome";
import anns from '../public/annotations.json'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from "react-transition-group";
import { IndentStyle } from "typescript";

interface id {
  infoID: number;
}
const InfoBar: FC<id> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  type annot  = {
    line: string,
    word: string,
    title: string,
    annotation: string;
  }
  const annIndex: string = props.infoID.toString();

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
        <h3 className="info-title">{anns[annIndex as keyof typeof anns].title}</h3>
        <hr />
        <p className={"info-text"} dangerouslySetInnerHTML={{__html: anns[0].annotation}}></p>
      </div>
      </CSSTransition>
    </div>
  )
}

export default InfoBar;