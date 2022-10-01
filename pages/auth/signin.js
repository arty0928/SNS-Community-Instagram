import {getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/future/image";
//Brower...
function signIn({providers}){
    return (
        <>
        <Header />

        <div className="flex flex-col items-center min-h-screen py-2 mt-56 text-center">
            <Image className="w-80" src="/img/스쿼드 로고.png" alt="" width={400} height={200}/>

            <p className="font-xs italic">
                SQUARD PROJECT - By EunSeo PARK  
            </p>
                <div className='mt-20'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
        </div>
    </>
    );
}

//Server side 
export async function getStaticProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };

}

export default signIn;