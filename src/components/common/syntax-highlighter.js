import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Syntax = (props) => {
	const { language } = props;
	return (
		<SyntaxHighlighter language={language === undefined ? "html" : language} style={atomOneDark} wrapLines={false}>
			{props.children}
		</SyntaxHighlighter>
	);
};
