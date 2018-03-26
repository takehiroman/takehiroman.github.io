import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './zakimoto.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
          }}
        />
        <p>
          ここはざきもとの個人サイトです。{' '}
          <a href="https://twitter.com/zakimot0">
            Twitter
          </a>{' '}
          <a href="https://github.com/takehiroman">
            Github
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
