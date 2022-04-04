import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
	return (
		<div className='bg-gray-100 flex items-center rounded-full py-1 px-4'>
			<SearchOutlined className='text-lg text-gray-900' />
			<input placeholder='Search Anime' className='bg-gray-100 ml-2' />
		</div>
	)
}

export default Search
