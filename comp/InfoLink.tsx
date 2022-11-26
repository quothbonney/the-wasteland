import {ReactNode, FC} from 'react';

interface InfoLinkProps {
  id: string,
  stateChange: (index: string) => void;
  children: ReactNode;
}

const InfoLink: FC<InfoLinkProps> = (props): JSX.Element => {
   return (
   <a href="javascript:void(0);" className="link" onClick={() => {props.stateChange(props.id)}}>{props.children}</a>
   )

};

export default InfoLink;