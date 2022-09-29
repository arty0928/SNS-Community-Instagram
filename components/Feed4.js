import Stories from "./Stories"
import Posts4 from "./Posts4"
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"
import { useSession } from "next-auth/react"

function Feed4() {
    const { data: session } = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto 
        ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className="col-span-2">
                <Stories />
                <Posts4 />
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

export default Feed4