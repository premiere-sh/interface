import { createContext, useState } from 'react'

const WaitingContext = createContext([])

export function WaitingProvider({ children }) {
  const [waiting, setWaiting] = useState(false)
  return (
    <WaitingContext.Provider value={[waiting, setWaiting]}>
      {children}
    </WaitingContext.Provider>
  )
}

export default WaitingContext
