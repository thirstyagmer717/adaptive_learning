import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <>
  <Navbar/>
   <div className="flex justify-center text-4xl">
     This is home go to login, signup or courses
   </div>
    </>
    )
}
