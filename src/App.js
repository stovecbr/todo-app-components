import React, { useState } from 'react';  //useStateの読み込み
import './styles.css';

import { InputTodo } from './components/InputTodo'; //テキストボックス用コンポーネントファイル
import { IncompleteTodos } from './components/IncompleteTodos'; //未完了リスト用コンポーネントファイル
import { CompleteTodos } from './components/CompleteTodos'; //完了リスト用コンポーネントファイル

export const App =  () =>  {
  const [todoText, setTodoText] = useState("");
  
  const [incompleteTodos, setIncompleteTodos] = useState([1,2,]);
  const [completeTodos, setCompleteTodos] = useState([3,4]);
  
  // 値を取得
  const onChangeTodoText = (event) => setTodoText(event.target.value );

  // 追加ボタンクリック
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタンクリック　未完了リスト用
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンクリック
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);  
  };

  // 戻るボタンクリック
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  // onClickDeleteComplete追加
  // 削除ボタンクリック　完了リスト用
  const onClickDeleteComplete = (index) => {
    const newTodos = [...completeTodos];  //CompleteTodos -> completeTodosへ修正しエラー解消
    newTodos.splice(index,1);
    setCompleteTodos(newTodos);
  };

  return (
    <>  
      {/* テキストボックス用コンポーネント呼び出し*/}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* コンポーネント化前 */}
      {/* <div className='input-area'>
        <input
         placeholder='TODOを入力'
         value={todoText}
         onChange={onChangeTodoText}     
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}

      {/* 未完了リスト用コンポーネント呼び出し */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* コンポーネント化前 未完了のTODO*/}
      {/* <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index) => {
            return(
              <div key={todo}  className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}        
        </ul>
      </div> */}

      {/* コンポーネント化前　完了のTODO */}
      {/* <div className='complete-area'>
         <p className='title'>完了のTODO</p>
          <ul>
            {completeTodos.map((todo,index) => {
              return(
                <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
                </div>
              );
            })}            
          </ul>
      </div> */}
      {/* 完了リスト用コンポーネント呼び出し */}
      {/* 元のコード */}
      {/* <CompleteTodos todos={completeTodos} onClickBack={onClickBack} /> */}


      {/* {/* onClickDeleteComplete追加 */}
      <CompleteTodos
         todos={completeTodos}
         onClickBack={onClickBack}
         onClickDelete={onClickDeleteComplete}
       />
    </>
  );
};