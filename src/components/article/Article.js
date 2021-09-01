import {wrapper} from './article.module.scss';

const Article = (props) => {
    const {title, bodytext, img, alt, quote} = props;
    return (
        <div className={wrapper}>
            <h2>{title}</h2>
            <p>{quote}</p>
            <div>
            <img src={img} alt={alt}/>
            <p>{bodytext}</p>
            </div>
        </div>
    )
}

export default Article
