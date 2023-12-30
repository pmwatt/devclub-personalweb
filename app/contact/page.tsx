'use client'
import { Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Page() {
  return (
    <>
      <h1 className='text-5xl p-5'>Contact Details</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla esse maxime quos impedit veniam hic nisi labore, voluptates ut repellat blanditiis, sequi nesciunt maiores necessitatibus enim incidunt cumque dolorem quasi.</p>
      <div className='flex gap-10 p-10 text-xl'>
        <Text>
          <Link color='teal.500' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            Twitter
          </Link>
        </Text>
      <Text>
        <Link color='teal.500' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          Youtube
        </Link>
      </Text>
      <Text>
        <Link color='teal.500' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          Instagram
        </Link>
      </Text>

      </div>
    </>
  )
}