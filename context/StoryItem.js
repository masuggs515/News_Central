import newsStyles from '../styles/News.module.css'
import Link from 'next/link';

const StoryItem = ({story}) => {
    return (
        <Link key={story.title} href={story.url}>
                <div className={newsStyles.storyItem}>
                    <h4>{story.title}</h4>
                    <img src={story.urlToImage} />
                    <p>{story.description}</p>
                </div>
            </Link>
    );
}

export default StoryItem;