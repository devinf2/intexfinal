import React from 'react'
import { Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'
function Left() {
  //const categories = {}
  const context = React.useContext(AppContext)

  if (!context.categories) {
    return <div>Loading...</div>
  }
  return (
    <Col>
      <h3>Menu</h3>

    </Col>
  )
}
export default Left;