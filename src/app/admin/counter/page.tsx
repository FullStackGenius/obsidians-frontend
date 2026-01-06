// src/app/counter/page.tsx
'use client'

import { useAppSelector, useAppDispatch } from '../../../lib/redux/hooks'
import { increment, decrement, incrementByAmount } from '../../../lib/redux/features/counter/counterSlice'

export default function CounterPage() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}> +1 </button>
      <button onClick={() => dispatch(decrement())}> -1 </button>
      <button onClick={() => dispatch(incrementByAmount(5))}> +5 </button>
    </div>
  )
}