import React from "react";

export const IncompleteTodos=(props) => {
  const{todos,onClickComplete,onClickDelete} = props;
  return(
    <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>

        {/* 元のコード　タスク名重複warning */}
          {/* <ul>
          {todos.map((todo,index) => {
            return(
              <div key={todo}  className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul> */}

        {/* keyをindexへ変更　タスク名重複OK */}
        <ul>
          {todos.map((todo,index) => {
            return(
              <div key={index}  className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
  );
};