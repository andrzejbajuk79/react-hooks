import React, { useContext, useState, useEffect } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note, removeNote }) => {
	const { dispatch } = useContext(NotesContext);
	const position = useMousePosition();
	return (
		<div>
			<h3>{note.title}</h3>
			<p>{note.body}</p>
			<p>
				x: {position.x}, y: {position.y}
			</p>
			<button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>
				x
			</button>
		</div>
	);
};

export { Note as default };
