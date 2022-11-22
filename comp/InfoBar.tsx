import { useState, FC } from "react"
import { AnnContext } from "../lib/context";
import cx from "classnames";
import JSXStyle from "styled-jsx/style";



interface id {
  infoID: number;
}
const InfoBar: FC<id> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
        _
      </button>
      {props.infoID}

    </div>
  )
}

export default InfoBar;