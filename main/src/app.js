require('./styles.styl')

import React from 'react'
import { render } from 'react-dom'
import Application from './application'
import shared from 'react-components-testbed-shared'

const { Header, Footer } = shared

render((
    <Application />
  ),
  document.getElementById('application')
)

render((
    <Header />
  ),
  document.getElementById('header')
)

render((
    <Footer />
  ),
  document.getElementById('footer')
)
