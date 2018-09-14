import React, { Component } from 'react'
import { Story } from './Story'
import stories from '../theme/assets/stories'

export class Stories extends React.Component {
    render() {
    	const storiesJSX = stories.map( (story) => {
    		return (
    			<Story 
					key = {story.id}
					src = {story.src}
					message = {story.message}
				/>
    		)
    	})

        return (
        	<div className = 'stories'>{storiesJSX}</div>
        )
    }
}