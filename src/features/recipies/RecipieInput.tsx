import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { 
	createOrUpdateRecipie,
	selectActiveRecipie,
	selectActiveRecipieName
} from './recipiesSlice';
import './RecipieInput.css';
import { useEffect } from 'react';

export function RecipieInput() {
	const recipieName = useAppSelector(selectActiveRecipieName);
	const activeRecipie = useAppSelector(selectActiveRecipie);

	const [name, setName] = useState(recipieName || '');
	const [ingredients, setIngredients] = useState(activeRecipie?.ingredients?.join('\n') || '');
	const [description, setDescription] = useState(activeRecipie?.description || '');

	useEffect(() => {
		setName(recipieName || '');
		setIngredients(activeRecipie?.ingredients?.join('\n') || '');
		setDescription(activeRecipie?.description || '');
	}, [recipieName, activeRecipie?.ingredients, activeRecipie?.description])

	const dispatch = useAppDispatch();
	const addToRecipies = () => {
		if (name && ingredients && description) {
			dispatch(createOrUpdateRecipie({
				name,
				recipie: {
					description,
					ingredients: ingredients.split('\n')
				}
			}));
			setName('');
			setIngredients('');
			setDescription('');
		}
	};

	return (
		<div>
			<div className="RecipieInput__inputBlock">
				<label htmlFor="name">
					Rezeptname
				</label>
				<input
					name="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</div>	
			<div className="RecipieInput__inputBlock">
				<label htmlFor="ingredients">
					Zutaten
				</label>
				<textarea
					className="RecipieInput__textArea"
					name="ingredients"
					value={ingredients}
					onChange={(event) => setIngredients(event.target.value)}
				/>
			</div>
			<div className="RecipieInput__inputBlock">
				<label htmlFor="description">
					Anleitung
				</label>
				<textarea
					className="RecipieInput__textArea"
					name="description"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
				<div>
				<button onClick={addToRecipies}>
					Speichern
				</button>
			</div>
		</div>
	);
}