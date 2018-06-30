import React from 'react'
import PropTypes from 'prop-types'

import Down from 'grommet/components/icons/base/Down'
import Box from 'grommet/components/Box'

export default function StartButton(props) {
  return (
    <Box align="center">
      {props.text}
      <div>
        <Down a11yTitle={'Start Button'} />
      </div>
    </Box>
  )
}

StartButton.propTypes = {
  text: PropTypes.string.isRequired
}
