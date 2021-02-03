import React, { Component, useState } from 'react';
import styled from 'styled-components';
import OtherCodyPhoto from './components/OtherCodyPhoto';
import Statistics from './components/Statistics';
import Button from './components/Button';
import { Link } from 'react-router-dom';

const data = [
	{
		date: '1월 17일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 3일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 4일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 5일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 7일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 8일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 13일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 15일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 16일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 18일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '3월 1일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '3월 3일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
];

const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const CodyContainer = styled.a`
	margin: 20px;
	border-radius: 7px;
	border-top-left-radius: 7px;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	border-bottom-left-radius: 7px;
	// background: yellow;
	transition: transform 0.3s ease;
	box-shadow: 8px 8px 17px #d9d9d9, -8px -8px 17px #ffffff;

	display: flex;
	flex-direction: column;
	img {
		width: 300px;
		height: 375px;
		object-fit: cover;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
	}
	p {
		padding-left: 20px;
	}

	&:hover {
		transform: scale(1.02);
	}
	text-decoration: none;
	color: black;
`;

class MyCodyRoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: false,
		};
	}

	render() {
		return (
			<ListContainer>
				{data.reverse().map((value, index) => {
					return (
						<Link to={`${this.props.match.url}/${index}`} style={{ textDecoration: 'none' }}>
							<CodyContainer
								onClick={() => {
									this.setState({ detail: true });
									document.body.style.overflowY = 'scroll';
								}}
								// href={`https://lookylooks/mycody/${index}`}
								key={index}
							>
								<img src={value.img} />
								<p>{value.date}</p>
							</CodyContainer>
						</Link>
					);
				})}
			</ListContainer>
		);
	}
}

export default MyCodyRoomList;
