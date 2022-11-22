import { useContext } from 'react';
import { InfoContext } from '../lib/context';

function handleInfoChange({index}) {
  const {infoIndex} = useContext(InfoContext);
}