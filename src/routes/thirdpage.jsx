import React from 'react'
import TagManager from 'react-gtm-module'
import Layout from '../layouts/MainLayout'

const PageThree = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'page_view',
      page: 'page-3',
    },
  })

  return <Layout>Third page</Layout>
}

export default PageThree
