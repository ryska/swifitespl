import eras from './eras.json';
import Context, { ContextType } from '../Context/Context';
import { useContext } from 'react';
import './Topbar.scss';

const Topbar = () => {

    const { checkedEras, updateCheckedEras } = useContext(Context) as ContextType;

    const handleClick = (era: string) => {
        if (checkedEras.includes(era)) {
            updateCheckedEras(checkedEras.filter((e) => e !== era));
        } else {
            updateCheckedEras([era]);
        }
    }

    return (
        <div className='topbar'>
            {eras.map(era => <span key={era.id} className={`era ${era.id} ${checkedEras.includes(era.id) ? 'selected' : ''}`} onClick={() => handleClick(era.id)} id="era">{era.name}</span>)}
        </div>
    )
}

export default Topbar;