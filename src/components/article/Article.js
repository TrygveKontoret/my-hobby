import {wrapper} from './article.module.scss';

const Article = (props) => {
    const {title, bodytext, img} = props;
    return (
        <div className={wrapper}>
            <h2>{title}</h2>
            <div>
            <img src={img}/>
            <p>{bodytext}</p>
            </div>
            
            
        </div>
    )
}

export default Article
