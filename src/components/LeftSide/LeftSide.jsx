import React from 'react'
import Copyrights from './Copyrights'

const menu = [
	{
		img: 'https://e7.pngegg.com/pngimages/765/97/png-clipart-otaku-otaku-logo-anime-beach-vapor-lg-text-manga.png',
		title: 'Catalog',
	},
	{
		img: 'https://papik.pro/uploads/posts/2021-11/1636160107_1-papik-pro-p-logotip-anime-foto-1.png',
		title: 'Forum',
	},
	{
		img: 'https://yt3.ggpht.com/a/AATXAJwQzzP5WVSze3M2GG1KkV0UZk-4jcfQ-_4UdA=s900-c-k-c0xffffffff-no-rj-mo',
		title: 'Watch Anime',
	},
	{
		img: 'https://yt3.ggpht.com/a/AGF-l78Dmk5SwTwYsDBuK1vsE9yHPb1rzzcbZLO-1Q=s900-c-k-c0xffffffff-no-rj-mo',
		title: 'Manga',
	},
	{
		img: 'https://www.mykassa.org/product_logos.php?id=5844',
		title: 'Novella',
	},
	{
		img: 'https://www.clipartmax.com/png/full/64-648900_icon-of-a-video-game-controller-game-circle-icon.png',
		title: 'Games',
	},
	{
		img: 'https://i.pinimg.com/originals/be/01/e1/be01e1d41ec8cd1094dcc578aa7ac45e.png',
		title: 'Movies',
	},
	{
		img: 'https://yt3.ggpht.com/a/AATXAJzAvAc0D0skxghvF83powXBD6jGFy5J_PgecpGp=s900-c-k-c0xffffffff-no-rj-mo',
		title: 'Help & Support',
	},
	{
		img: 'https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png',
		title: 'Settings & Privacy',
	},
	{
		img: 'https://cdn.pixabay.com/photo/2012/04/12/13/26/question-30028_1280.png',
		title: 'See More',
	},
]

const LeftSide = () => {
	return (
		<div className='shadow-lg p-4 w-1/4 h-screen'>
			<div className='flex items-center justify-between mb-2'>
				<h2 className='text-2xl font-bold'>Anime Production</h2>
			</div>
			<ul className='list-none'>
				{menu.map((item, idx) => (
					<li key={'menu ' + idx}>
						<a href='/' className='flex items-center py-2'>
							<img src={item.img} alt='' className='h-9 w-9 mr-2' />
							<span>{item.title}</span>
						</a>
					</li>
				))}
			</ul>
			<Copyrights />
		</div>
	)
}

export default LeftSide
