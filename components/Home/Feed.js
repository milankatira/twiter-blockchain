import React from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
import Post from '../Post';
const tweets = [

  {
    displayName: 'mk',
    userName: '8989898990999',
    avatar:
      'https://images.unsplash.com/photo-1645670533175-d7a1c1df849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80',
    text: 'gm',
    isProfileImageNft: false,
    timestamp:"545655"
  },
  {
    displayName: 'mk',
    userName: '8989898990999',
    avatar:
      'https://images.unsplash.com/photo-1645670533175-d7a1c1df849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80',
    text: 'gm',
    isProfileImageNft: false,
    timestamp:"545655"
  },

  {
    displayName: 'mk',
    userName: '8989898990999',
    avatar:
      'https://images.unsplash.com/photo-1645670533175-d7a1c1df849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80',
    text: 'gm',
    isProfileImageNft: false,
    timestamp:"545655"
  },

  {
    displayName: 'mk',
    userName: '8989898990999',
    avatar:
      'https://images.unsplash.com/photo-1645670533175-d7a1c1df849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80',
    text: 'gm',
    isProfileImageNft: false,
    timestamp:"545655"
  },

  {
    displayName: 'mk',
    userName: '8989898990999',
    avatar:
      'https://images.unsplash.com/photo-1645670533175-d7a1c1df849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80',
    text: 'gm',
    isProfileImageNft: false,
    timestamp:"545655"
  },
  
]
const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet,index)=>{
        return (

          <Post
          key={index}
          displayName={tweet.displayName}
          userName={tweet.userName}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
          />
          )
      })}
    </div>
  )
}

export default Feed
