import {ReactNode, FC} from 'react';

interface InfoLinkProps {
  id: number,
  stateChange: (index: number) => void;
  children: ReactNode;
}

const InfoLink: FC<InfoLinkProps> = (props): JSX.Element => {
   return (
   <a href="#" className="link" onClick={() => {props.stateChange(props.id)}}>{props.children}</a>
   )

};

export default InfoLink;