import React from 'react';
import { CardMood, ButtonBlock} from './style';

import { useHistory } from 'react-router-dom';

import Emoji from '../../components/Emoji';

import happy from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import neutral from '../../assets/neutral.svg';



const Mood = () => {
    const history = useHistory();

	const handleOnClick = (value) => {
		history.push(`/${value}`);
    }
    
    return (
            <CardMood>
            <h3>Como está o seu humor hoje?</h3>
			<ButtonBlock>
				{/* <Emoji OnClick={handleOnClick} img={happy} label={'Feliz'} value={'happy'}/>
				<Emoji OnClick={handleOnClick} img={neutral} label={'Neutro'} value={'neutral'}/> */}

                <Emoji OnClick={handleOnClick} img={happy} label={'Feliz'} value={''} />
				<Emoji OnClick={handleOnClick} img={neutral} label={'Neutro'} value={''} />

				<Emoji OnClick={handleOnClick} img={sad} label={'Triste'} value={'sad'}/>
			</ButtonBlock>
            </CardMood>        
    )
}

export default Mood;