import { useEffect, useMemo, useState } from 'react';
import { User } from '../mocks/data/user';

const Delay = () => {
  const [users, setUsers] = useState<User[]>();
  const abortController = useMemo(() => new AbortController(), []);

  const handleAbortRequest = () => {
    abortController.abort();
  };

  useEffect(() => {
    const fetchDelayedUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/delay-users`, {
          signal: abortController.signal,
        });

        setUsers(await response.json());
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    };

    fetchDelayedUser();

    return () => {
      abortController.abort();
    };
  }, [abortController]);

  return (
    <section>
      <div className="flex gap-4">
        <p className="text-2xl mb-4">API DELAY(5s) TEST</p>
        <button className="p-2 bg-red-100" onClick={handleAbortRequest}>
          Abort Request
        </button>
      </div>
      {users ? (
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
      ) : (
        <p>loading...</p>
      )}
    </section>
  );
};

export default Delay;
