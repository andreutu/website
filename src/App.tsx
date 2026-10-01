import Link from "./components/link";

function App() {
    return (
        <main>
            <section className="text-center mt-4.5">
                <h1 className="text-4xl font-light wrap-break-word">Andrei "andreutu" Dumitru</h1>
                <p className="text-neutral-500">professional human</p>

                <div className="mt-2 flex gap-3 justify-center mx-auto">
                    <Link link="https://github.com/andreutu" display="github" />
                    <Link link="https://linkedin.com/in/andreutu" display="linkedin" />
                    <Link link="https://www.twitch.tv/andreututtv" display="twitch" />
                    <Link link="https://myanimelist.net/animelist/andreutu" display="myanimelist" />
                </div>
            </section>

            <section className="mx-auto mt-10 w-full max-w-200 min-w-0 text-sm wrap-break-word">
                <p className="text-orange-200 font-bold">hi there! :)</p>

                <p className="mt-2">
                    <span className="text-orange-400">&gt;</span> welcome to my personal website/blog/whatever this is.
                    my name is Andrei but, for the most part, people know me online under the alias "andreutu" or
                    "andreu". i am a 17 year old computer enthusiast from Romania, passionate about software, hardware,
                    and everything else in between there is to know about inner computer workings. whenever i see
                    something such as a program or a concept that catches my eye, i always sit and wonder "how does that
                    work?", or "how would i implement that with my current knowledge?". i love this way of thinking, it
                    helps me learn things faster (most of the time).
                </p>

                <p className="mt-5">
                    <span className="text-orange-400">&gt;</span> i've been programming ever since i was a kid, starting
                    out with scratch and python (duh) and working my way up the food chain with web development, C#,
                    typescript and eventually C++, which i'm still a beginner at. i had also dived in quite a bit of
                    devops and system architecture, and that knowledge has been used in building apps for my personal
                    projects and a homelab, albeit small at the moment{" "}
                    <b className="text-red-100">(thanks a lot to my mentors, lucky and kai &lt;3)</b>.
                </p>

                <p className="mt-5">
                    <span className="text-orange-400">&gt;</span> as for my other hobbies, i love playing guitarand
                    listening to metal/rock music. i also recently started watching anime again, my favourite being Blue
                    Box as of yet (waiting for s2). i've also taken a liking to playing volleyball, even though i am
                    still an absolute beginner. playing videogames is one of the other things i love doing when i am not
                    busy with life. i'm pretty good at cs2 (
                    <Link link="https://www.faceit.com/en/players/andr3ut" display="faceit" />
                    ), but i mostly enjoy story-based games, metro being my favorite series.
                </p>
            </section>

            <section className="mx-auto mt-6 w-full max-w-200 min-w-0 text-sm wrap-break-word">
                <p className="text-orange-200 font-bold">current projects & learning</p>

                <div className="mt-2">
                    <p>
                        <span className="text-neutral-200">Magical Romania Roleplay</span> - a FiveM roleplay server
                        built using typescript and react. gameplay aspects designed with complexity and realism in mind.
                    </p>

                    <p className="mt-3">
                        <span className="text-neutral-200">Just4Fun</span> - a Squad-based gaming community with a
                        shared passion for multiplayer game sessions. currently exploring other milsim spaces. this is
                        also where i've developed a lot of my programming skills
                    </p>

                    <p className="mt-3">
                        <span className="text-neutral-200">currently learning</span> - getting more into AI, learning
                        how to use it responsibly. strengthening my networking and linux knowledge through both theory
                        and practice (homelab). would also like to look more into C++ and reverse engineering (cool
                        stuff!).
                    </p>
                </div>
            </section>
        </main>
    );
}

export default App;
