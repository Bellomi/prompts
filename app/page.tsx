import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="mas-md:hidden" />
        <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-center inline-block text-transparent bg-clip-text">
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        This is an open-source tool for modern world to discover, create and
        share creative prompts.
      </p>
      <Feed />
    </section>
  )
}

export default Home
