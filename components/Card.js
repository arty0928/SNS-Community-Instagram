import { useRouter } from "next/router";
import Link  from "next/link";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"
import Image from "next/future/image";

function Card() {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                {/* <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1> */}

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <Link href="/auth/components/Introduce">
                        <div className="lg:flex rounded-lg hover:bg-gray-200 " >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" width={500} height={224} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6 ">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2 ">
                                    안녕하세요! 우리 친해져요!
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">자유로운 친목방입니다</span>
                            </div>
                        </div>
                    </Link>


                    


                    <Link href="/auth/components/Study">
                        <div className="lg:flex rounded-lg hover:bg-gray-200" >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" width={500} height={224} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2">
                                    A+ 스터디 클럽
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">시험,자격증, 취업준비 같이 공부해요~!</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/auth/components/Reading">
                        <div className="lg:flex rounded-lg hover:bg-gray-200" >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" width={500} height={224} />
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2">
                                    하루 독서 한스푼
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">하루 독서 한페이지씩</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/auth/components/Exercise">
                        <div className="lg:flex rounded-lg hover:bg-gray-200" >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhlcmNpc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" width={500} height={224} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2">
                                    Exercise with me!!
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">나도 운동해서 바디프로필 찍어보자</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/auth/components/News">
                        <div className="lg:flex rounded-lg hover:bg-gray-200" >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width={500} height={224} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2">
                                    시사 쌓고 교양 읽기
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">시사 읽고 교양 쌓고 일석이조</span>
                            </div>
                        </div>
                    </Link>


                    <Link href="/auth/components/Hobby">
                        <div className="lg:flex rounded-lg hover:bg-gray-200" >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9iYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" width={500} height={224} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2">
                                    다재다능의 신: 멋쟁이가 될거야
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">요리 잘</span>
                            </div>
                        </div>
                    </Link>


                    <Link href="/auth/components/Invest">
                        <div className="lg:flex rounded-lg hover:bg-gray-200" >
                            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" width={500} height={224} />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <div className="text-xl font-semibold text-gray-800 hover:underline dark:text-white pl-2">
                                    부자되기 프로젝트: 투자 제태크 창업
                                </div>

                                <span className="text-sm text-gray-500 dark:text-gray-300 pl-2 mt-3">야금야금 돈을 굴려 돈덩이를 만들자!!</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>

    )

}

export default Card