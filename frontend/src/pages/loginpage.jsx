import React from 'react'
import { useClerk } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Loginpage = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Loginpage