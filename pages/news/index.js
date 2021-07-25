import NEWS_API from "../../secret";
import Head from 'next/head'

import newsStyles from '../../styles/News.module.css'
import StoryList from "../../context/StoryList";

const NewsHome = ({ stories, sportsStories }) => {

    return (
        <>
            <Head>
                <title>NewsCentral || Worldwide News</title>
            </Head>

            <div className={newsStyles.showcase}>
                <h1>Welcome to News Central</h1>
                <p>One central location for up to date news in the world.</p>
            </div>
            <div className='container'>
                <h1 className='title'>Top Stories</h1>
                <div className={newsStyles.main}>
                    <StoryList stories={stories}/>
                </div>
                <div className={newsStyles.sidePanel}>
                    <h1>Sports</h1>
                    <StoryList stories={sportsStories}/>
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async () => {

    const [topRes, sportRes] = await Promise.all([
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API}`),
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API}&category=sports&pageSize=10`)
    ])

    const [stories, sports] = await Promise.all([
        topRes.json(),
        sportRes.json()
    ]);

    return {
        props: {
            stories: stories.articles,
            sportsStories: sports.articles
        }
    }
}

export default NewsHome;