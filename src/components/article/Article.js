import {wrapper} from './article.module.scss';
import {SubHeader, Parag} from '../typography/Typography';

const Article = (props) => {
    const {title, bodytext, img, alt} = props;
    return (
        <div className={wrapper}>
            <SubHeader>{title}</SubHeader>
            <div>
            <img src={img} alt={alt}/>
            <Parag>{bodytext}</Parag>
            </div>
        </div>
    )
}

export default Article
