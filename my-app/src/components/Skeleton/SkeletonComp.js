import React from 'react'
import { Skeleton } from '@rneui/themed';

const SkeletonComp = ({ type }) => {
  const getDimension = () => {
    switch (type) {
      case 'circle':
        return {
          width: 96,
          height: 96,
          circle: true,
        }
      case 'retangular':
        return {
          width: '100%',
          height: 60,
          circle: false,
        }
      default:
        return {
          width: '50%',
          height: 5,
          circle: true,
        }
    }
  }

  return (
    <Skeleton
      animation="wave"
      width={getDimension().width}
      height={getDimension().height}
      circle={getDimension().circle}
    />
  )
}

export default SkeletonComp