import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectRecipies } from './recipiesSlice';
import { 
	Link,
	useParams
} from 'react-router-dom';
import './RecipieDetails.css'

export interface RecipieDetailsProps {
	recipieName: string;
}

export function RecipieDetails() {
	const {recipieName} = useParams() as RecipieDetailsProps;
	const activeRecipie = useAppSelector(selectRecipies)[recipieName];

	if (!activeRecipie) {
		return (
			<div>
				<Link to="/">Zur Übersicht</Link>
				<div>
					404 - Rezept nicht gefunden :/
				</div>
			</div>

		);
	}
	return (
		<div className="RecipieDetails">
			<Link to="/">Zur Übersicht</Link>
			<h1 className="RecipieDetails__title">
				{recipieName}
			</h1>
			<div>
				Zutaten:
				<ul>
					{activeRecipie.ingredients.map((ingredient) => <li>{ingredient}</li>)}
				</ul>
			</div>
			<div>
				Anleitung:
				<ul>
					{activeRecipie.description}
				</ul>
			</div>
		</div>
	);
}