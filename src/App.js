
import './App.css';
import { useState } from 'react';
import useCustomHook from './useHook';

function App() {
  const [names,printName, add, putNames] =  useCustomHook();
  const [text, setText] = useState('');


  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => {
    putNames(names);
  }

  return (
    <div>
      <p>学生一覧：[{printName}]</p> 
      <p>追加した名前を入力してください。</p>
      <input
        class="input"
        type="text"
        onChange={handleChange}
      />

      <button
        className = "button"
        onClick = {handleClick}
      >
        確定
      </button>

      <p>追加した名前：{text}</p>
      <p>新しい一覧：</p>

    </div>
  );
}

export default App;
