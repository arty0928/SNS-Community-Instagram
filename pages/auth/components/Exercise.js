
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed4 from '../../../components/Feed4'
import Modal4 from '../../../components/Modal4'
import Header from '../../../components/Header'
export default function Card4() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed4 />

            <Modal4 />


        </div>
    )
}