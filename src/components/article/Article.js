import {wrapper} from './article.module.scss';

const Article = (props) => {
    const {title, bodytext, img, alt} = props;
    return (
        <div className={wrapper}>
            <h2>{title}</h2>
            <div>
            <img src={img} alt={alt}/>
            <p>{bodytext}</p>
            </div>
        </div>
    )
}

export default Article
