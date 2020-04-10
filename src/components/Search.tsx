import React, { useState } from 'react';

export default function Search(): JSX.Element {
  const [value, setValue] = useState<string>("");
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    console.log(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={value}/>
      <button type="submit">Search</button>
    </form>
  );
}
