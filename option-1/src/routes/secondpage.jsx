import React from 'react'
import TagManager from 'react-gtm-module'
import Layout from '../layouts/MainLayout'

const PageTwo = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'page_view',
      page: 'page-2',
    },
  })

  return <Layout>Second page</Layout>
}

export default PageTwo
