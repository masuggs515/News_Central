import { useRouter } from "next/dist/client/router";
import StoryList from "../../context/StoryList";
import NEWS_API from "../../secret";
import newsStyles from "../../styles/News.module.css"

const Category = ({ stories }) => {

    const router = useRouter();

    let { category } = router.query;

    category = category.charAt(0).toUpperCase() + category.slice(1)


    return (
        <div>
            <h1 className={newsStyles.catTitle}>{category} News</h1>
            <div className={newsStyles.category}>
                <StoryList stories={stories} />
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const pathCats = ['business', 'entertainment', 'general', 'health', 'science', 'technology', 'sports']



    const paths = pathCats.map(category => ({
        params: { category }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { category } = params;
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API}&category=${category}&pageSize=30`);

    const stories = await res.json();

    return {
        props: {
            stories: stories.articles
        }
    }
}

export default Category;