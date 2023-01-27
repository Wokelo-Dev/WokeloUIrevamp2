import { ClassNameType } from '../types/ClassNameType';
import './DotsLoader.css';

const DotsLoader = ({ className }: ClassNameType) => {
	return <span className={`loader ${className}`}></span>;
};

export default DotsLoader;
