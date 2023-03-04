import React from 'react'
import Profile from './Profile'
import BlogContainer from './(BlogContainer)/BlogContainer'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
      <Profile />
      <BlogContainer />
    </>
  )
}