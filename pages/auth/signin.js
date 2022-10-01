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
//export async function getServerSidedProps
export async function getStaticProps() {
    //const providers = await getProviders();
    const res = await fetch("https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1014084817011-11ilrhr1560lf3nhsv1uc3mvkj3sig13.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=Ou1_Yzwxd5BWt2pbkbmq6hKJr7iuWXQyyxEBLihQ3bU&code_challenge=IZuA9x_Qnp-mZp9nk4SKtKSMG-w9wjLZAE4WhU8kLAE&code_challenge_method=S256&flowName=GeneralOAuthFlow");
    const providers = await res.json();

    return {
        props: {
            providers,
        },
    };

}

export default signIn;