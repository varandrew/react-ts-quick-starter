import React from 'react'
import './index.scss'
import { add } from '@/utils/math'

interface IProps {
  a: number
  b: number
}

function ComputedTwo(properties: IProps) {
  const { a, b } = properties
  const sum = add(a, b)

  return <p className='computed-two'>{`Hi, I'm computed two, my sum is ${sum}.`}</p>
}

export default ComputedTwo
