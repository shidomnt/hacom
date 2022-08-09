import React, { PropsWithChildren, useState } from 'react';
import { User, UserContextInterface } from '../../interfaces';

const UserContext = React.createContext<UserContextInterface | null>(null);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
