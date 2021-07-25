import StoryItem from "./StoryItem";

const StoryList = ({stories}) => {
    return (
        <>
        {stories.map(story => (
            <StoryItem story={story} />
        ))}
        </>
    );
}

export default StoryList;