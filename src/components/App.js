import React, { useEffect, useState } from 'react';
import '../styles/App.css'

const App = () => {
	const [markdown, setMarkdown] = useState('')
	const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
		setIsLoading(true)
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000) 
		return () => clearTimeout(timer)
	}, [markdown])

	const handleChange = (e) => {
		setMarkdown(e.target.value)
	}
  return (
	<div className="app">
			<textarea
				className="textarea"
				value={markdown}
				onChange={handleChange}
				placeholder="Write your markdown here..."
			/>
			<div className="preview">
				{isLoading ? (
					<p className="loading">Loading...</p>
				) : (
					<p>{markdown}</p>
				)}
			</div>
		</div>
  )
}

export default App
