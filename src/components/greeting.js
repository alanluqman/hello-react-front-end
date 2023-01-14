/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../Redux/messeges';

export default function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="line-1 anim-typewriter">
      {greetings.greet}
    </div>
  );
}
