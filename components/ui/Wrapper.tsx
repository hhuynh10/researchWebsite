import { ReactNode } from 'react';

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        {children}
    </main>
  );
};

export default Wrapper;
