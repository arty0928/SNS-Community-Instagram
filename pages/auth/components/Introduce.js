
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed from '../../../components/Feed'
import Modal from '../../../components/Modal'
import Header from '../../../components/Header'
export default function Card1() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed />

            <Modal />


        </div>
    )
}