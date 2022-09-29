
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed2 from '../../components/Feed2'
import Modal2 from '../../components/Modal2'
import Header from '../../components/Header'
export default function Card2() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed2 />

            <Modal2 />


        </div>
    )
}