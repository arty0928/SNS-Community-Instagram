
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed3 from '../../components/Feed3'
import Modal3 from '../../components/Modal3'
import Header from '../../components/Header'
export default function Card3() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed3 />

            <Modal3 />


        </div>
    )
}