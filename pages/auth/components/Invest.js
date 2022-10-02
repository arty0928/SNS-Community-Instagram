
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed7 from '../../../components/Feed7'
import Modal7 from '../../../components/Modal7'
import Header from '../../../components/Header'
export default function Card7() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed7 />

            <Modal7 />


        </div>
    )
}