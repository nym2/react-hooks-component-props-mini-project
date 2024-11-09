import Article from "./Article";

function ArticleLst({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article key={post.id} title={post.title} date={post.date} prever={post.preview} />
            ))}
        </main>
    );
}

export default ArticleLst;