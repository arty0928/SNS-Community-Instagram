
//react
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Feed5 from '../../../components/Feed5'
import Modal5 from '../../../components/Modal5'
import Header from '../../../components/Header'
export default function Card5() {
    return (
        <div className='bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide'>

            <Header />

            <Feed5 />

            <Modal5 />


        </div>
    )
}