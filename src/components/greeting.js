import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { HashLoader } from 'react-spinners';

export default function Greeting() {
  const { data, isLoading } = useQuery(
    ['getGreetings'],
    async () => {
      const res = await axios.get('http://127.0.0.1:3000');
      return res.data;
    },
  );
  if (isLoading) {
    return <HashLoader color="lightblue" />;
  }
  const random = Math.floor(Math.random() * data.length);
  return (
    <div className="line-1 anim-typewriter">
      {data[random].greet}
    </div>
  );
}
