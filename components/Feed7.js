import Stories from "./Stories"
import Posts7 from "./Posts7"
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"
import { useSession } from "next-auth/react"

function Feed7() {
    const { data: session } = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto 
        ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className="col-span-2">
                <Stories />
                <Posts7 />
                {/** Posts */}
            </section>

            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                    <div className="fixed">
                        <MiniProfile />
                        <Suggestions />
                    </div>
                </section>
            )}
        </main>
    );
}

export default Feed7