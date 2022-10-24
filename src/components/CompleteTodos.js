import React from "react";

// export const CompleteTodos = (props) => {
//   const { todos, onClickBack} = props;
//   return (
//     <div className='complete-area'>
//     <p className='title'>完了のTODO</p>

//       {/* 元のコード　タスク名重複warning */}
//      {/* <ul>
//        {todos.map((todo,index) => {
//          return(
//            <div key={todo} className='list-row'>
//            <li>{todo}</li>
//            <button onClick={() => onClickBack(index)}>戻る</button>
//            </div>
//          );
//        })}            
//      </ul> */}

//       {/* keyをindexへ変更　タスク名重複OK */}
//      <ul>
//        {todos.map((todo,index) => {
//          return(
//            <div key={index} className='list-row'>
//            <li>{todo}</li>
//            <button onClick={() => onClickBack(index)}>戻る</button>
//            </div>
//          );
//        })}            
//      </ul>
//  </div>
//   );
// };




export const CompleteTodos = (props) => {
  const {todos,onClickBack,onClickDelete} = props;
  return (
    <div className='complete-area'>
      <p className='title'>完了のTODO</p>
      <ul>
       {todos.map((todo,index) => {
         return(          
           <div key={index} className='list-row'>
           <li>{todo}</li>
           <button onClick={() => onClickBack(index)}>戻る</button>
           <button onClick={() => onClickDelete(index)}>削除</button>
           </div>
         );
       })}
      </ul> 
   </div>
  );
};