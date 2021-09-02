import {wrapper} from './header.module.scss';
import { MainHeader } from '../typography/Typography.js';

const Header = () => {
    return (
        <div className={wrapper}>
           <MainHeader >Great Romans</MainHeader>
            
        </div>
    )
}

export default Header
