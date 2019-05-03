import React from 'react'

import { Button } from 'semantic-ui-react'

const FooterButton = () => (
    <div className="footerButtons" style={{ margin: 10 }}>
        <Button circular color='facebook' icon='facebook' />
        <Button circular color='twitter' icon='twitter' />
        <Button circular color='linkedin' icon='linkedin' />
        <Button circular color='google plus' icon='google plus' />
    </div>
)

export default FooterButton
