import React from 'react'
import { Link } from './Link'
import links from '../theme/assets/links'


export class Footer extends React.Component {
    render() {
		const linksJSX = links.map( (link) => {
			return (
				<Link
					key = {link.id}
					message = {link.message}
				/>
			)
		})

        return (
        	<div className = 'footer'>
				<ul >
					{linksJSX}
				</ul>
			</div>
        )
    }
}