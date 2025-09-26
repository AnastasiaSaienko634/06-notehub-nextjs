"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.error(error);

  return (
    <div>
      <p>Whoops... something went wrong!</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Error;
