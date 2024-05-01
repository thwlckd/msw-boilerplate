import { useEffect, useState } from 'react';
import { User } from '../mocks/data/user';

const Fake = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SOME_KEY}/users`);

        setUsers(await response.json());
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <section>
      <p className="text-2xl mb-4">MSW TEST</p>
      {users && (
        <ul className="flex flex-col gap-4">
          {users.map(({ id, name, email }) => {
            return (
              <li key={id}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Fake;
