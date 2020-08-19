import React from 'react'
import './index.scss'
import { add } from '@/utils/math'

interface IProps {
  a: number
  b: number
}

function ComputedOne(properties: IProps) {
  const { a, b } = properties
  const sum = add(a, b)

  return <p className="computed-one">{`Hi, I'm computed one, my sum is ${sum}.`}</p>
}

export default ComputedOne
