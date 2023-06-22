import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Syntax = (props) => {
	const { language, children } = props;
	const [copy, setCopy] = useState(false);
	return (
		<div className='code-preview'>
			<SyntaxHighlighter
				language={language}
				style={atomOneDark}
				wrapLines={false}
			>
				{children}
			</SyntaxHighlighter>

			{!copy ? (
				<button
					className='copy'
					onClick={() => {
						navigator.clipboard.writeText(children);
						setCopy(true);
						setTimeout(() => {
							setCopy(false);
						}, 3000);
					}}
				>
					Copy
				</button>
			) : (
				<button className='copy'>Copied</button>
			)}
		</div>
	);
};
