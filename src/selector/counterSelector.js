import {createSelector} from "@reduxjs/toolkit"
import { createStructuredSelector} from 'reselect'


export const getCount = (state) =>  state.counterReducer.count


export const getSquare = createSelector([getCount], (a) => {
    // do something with a, b, and c, and return a result
    console.log('a',a);
    return a*a
  })

export const selectedCount = createStructuredSelector({
    countValue : getCount,
    squaredValue: getSquare
  })