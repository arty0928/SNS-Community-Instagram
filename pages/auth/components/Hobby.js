
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed6 from '../../../components/Feed6'
import Modal6 from '../../../components/Modal6'
import Header from '../../../components/Header'
export default function Card6() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed6 />

            <Modal6 />


        </div>
    )
}