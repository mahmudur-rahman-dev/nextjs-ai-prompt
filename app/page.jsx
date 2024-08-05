import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-mid:hidden"/>
            <span className="orange_gradient text-center">
            AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is a prompt generator for writers and artists. It uses AI to generate unique prompts for you to use in your creative projects.
        </p>

        <Feed/>

    </section>
)
}

export default Home