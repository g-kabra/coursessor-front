import React from 'react'
import Layout from '../../../components/layout/Layout'
import Title from '../../../components/atoms/Title'
import BlogList from '../../../components/organisms/BlogList'

function Blogs() {
  return (
    <Layout>
      <div className="w-[90%] mx-auto mt-10">
        <Title>Blog</Title>
        <BlogList className='grid-cols-1 md:grid-cols-3 lg:grid-cols-4' />
      </div>
    </Layout>
  )
}

export default Blogs