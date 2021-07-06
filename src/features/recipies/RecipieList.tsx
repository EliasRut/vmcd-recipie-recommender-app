import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectRecipieList, setActiveRecipie } from './recipiesSlice';
import { Link } from 'react-router-dom';
import './RecipieList.css'

export function RecipieList() {
	const listEntries = useAppSelector(selectRecipieList);
	const dispatch = useAppDispatch();

	return (
		<div>
			{listEntries.map((entry) => (
				<div className="RecipieList__item">
					<span className="RecipieList__itemName">
						<Link to={`/recipies/${entry}`}>
							{entry}
						</Link>
					</span>
					<span
						className="RecipieList__editButton"
						onClick={() => dispatch(setActiveRecipie(entry))}
					>
						edit
					</span>
				</div>
			))}
		</div>
	);
}