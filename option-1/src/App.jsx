import TagManager from 'react-gtm-module'
import Button from '../src/components/button'
import Layout from './layouts/MainLayout'

/*
  Here we have passed our dataLayer object into "TagManger.dataLayer()" This will allow us to collect where the retargeting pixel was fired. As we have this set to all pages in GTM.

  We have use the same code in the othe pages here. You can just pass different values into the 
  page key like:

  page: 'contact-page' <-- for the contact page if you have one.
*/

function App() {
  TagManager.dataLayer({
    dataLayer: {
      event: 'page_view',
      page: 'home',
    },
  })

  return (
    <Layout>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          efficitur massa, et tempor orci. Nunc vehicula leo risus, vitae
          pharetra dolor pulvinar vel. Mauris a lectus a massa iaculis mollis
          vitae eget erat. Sed eu neque nec velit rutrum cursus nec quis dolor.
          Fusce rhoncus ante eget fermentum finibus. Nunc at scelerisque nisi.
          Curabitur facilisis sem id lacus molestie bibendum. Quisque ut metus
          id orci vulputate scelerisque vitae quis nunc. Curabitur tempus dolor
          urna, sit amet luctus dui mattis ac. Maecenas aliquet nisi eget ex
          semper lacinia. Fusce vulputate condimentum placerat. Nulla gravida
          rutrum enim a ornare. Sed ac odio at tortor placerat posuere quis nec
          eros. Fusce non luctus risus, eget scelerisque urna.{' '}
        </p>

        <Button id="page-3-btn" page_url="/thirdpage">
          Fire conversion pixel...
        </Button>
        <p>
          Phasellus ex velit, ornare a pulvinar vel, pulvinar eget arcu.
          Curabitur lacinia, dui at feugiat tincidunt, urna enim laoreet arcu,
          consequat malesuada lorem enim a tellus. Fusce ut varius orci. Nunc
          non ante at risus ultrices posuere. Maecenas varius turpis orci, nec
          dictum eros aliquam sit amet. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Quisque felis
          lacus, tempor vulputate nibh eu, venenatis dictum mauris. Fusce
          consectetur nunc eget odio pharetra, vel iaculis nisl molestie.{' '}
        </p>
        <p>
          Sed maximus sodales justo, nec commodo risus feugiat vitae. Nullam non
          mauris et mi cursus dapibus. Suspendisse potenti. Aliquam maximus
          turpis at ante suscipit, ac dapibus augue sollicitudin. Sed vestibulum
          ac massa id interdum. Aliquam eget nulla urna. Mauris sed nulla
          maximus, pretium nibh vitae, varius tellus. Integer scelerisque urna
          quis urna lobortis suscipit. Donec porta blandit ex vitae convallis.{' '}
        </p>
      </div>
    </Layout>
  )
}

export default App
