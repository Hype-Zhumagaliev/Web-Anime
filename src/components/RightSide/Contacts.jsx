import React from 'react'
import { MenuOutlined } from '@ant-design/icons'

const menu = [
	{
		img: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612612510_19-p-skachat-naruto-na-zelenom-fone-25.png',
		title: 'Naruto Uzumaki',
	},
	{
		img: 'https://www.kindpng.com/picc/m/638-6389141_naruto-blazing-sasuke-itachi-hd-png-download.png',
		title: 'Sasuke Uchiha',
	},
	{
		img: 'https://avatarfiles.alphacoders.com/107/107057.jpg',
		title: 'Boruto Uzumaki',
	},
	{
		img: 'https://cdn141.picsart.com/270759141042211.png',
		title: 'Momoshiki Ootsutsuki',
	},
	{
		img: 'https://pbs.twimg.com/profile_images/920547695714033664/rCaDWCpT.jpg',
		title: 'Madara Uchiha',
	},
	{
		img: 'https://yt3.ggpht.com/a/AATXAJw7RXcEuvfuh0X2y9qOElSbzoDeKMeJzM9LU5pCDg=s900-c-k-c0xffffffff-no-rj-mo',
		title: 'Obito Uchiha',
	},
	{
		img: 'https://sun1-99.userapi.com/s/v1/ig2/D0FFNzKegC7IZepzXrMYFPdUWiHOvxNx1vw24ZjZ3cZjUUz8MhZ8YyouarqtVKueB-d0AaUog2CAvqUTMIp1UXW3.jpg?size=400x400&quality=96&crop=270,527,1330,1330&ava=1',
		title: 'Hype Kudaisaktasyn',
	},
	{
		img: 'https://pbs.twimg.com/media/Ec_7W8QWkAUSJVF.jpg:large',
		title: 'Mitsuki',
	},
]

const Contacts = () => {
	return (
		<div className='shadow-lg p-4 w-1/4'>
			<div className='flex items-center justify-between mb-2'>
				<h2 className='text-2xl font-bold'>Contacts</h2>
				<MenuOutlined className='text-gray-600 text-lg' />
			</div>
			<ul className='list-none'>
				{menu.map((item, idx) => (
					<li key={'menu ' + idx}>
						<a href='/' className='flex items-center py-2'>
							<div className='h-9 w-9 mr-2 rounded-full overflow-hidden'>
								<img src={item.img} alt='' />
							</div>
							<span>{item.title}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Contacts
