import React from 'react'
import Avatar from '../Avatar'
import { MenuOutlined } from '@ant-design/icons'

const Post = () => {
	return (
		<div className='shadow-lg rounded'>
			<div className='p-3'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center'>
						<Avatar />
						<div className='ml-2'>
							<div className='text-gray-800 text-sm font-medium'>Serzhan Zhumagaliyev</div>
							<div className='text-xs'>5 year ago</div>
						</div>
					</div>
					<MenuOutlined className='text-gray-600 text-lg' />
				</div>
				<div className='mt-4 mb-2'>Have a nice day 😍</div>
			</div>
			<img
				src='https://avatars.mds.yandex.net/get-zen_doc/4395091/pub_60cccdcd1ecc344c6795e259_60ccce55fab4fe56d76ad2db/scale_1200'
				alt=''
			/>
		</div>
	)
}

export default Post
