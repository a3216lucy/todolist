import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faFile,
  faCommentDots,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare, faPen } from '@fortawesome/free-solid-svg-icons';
// import { addTodo, updateTodo } from '../slices/todoSlice';
import { v4 as uuid } from 'uuid';
import { addTodo, updateTodo } from "../redux/actions";

function AddTodo({ type, addTodoModal, setAddTodoModal, todo }) {

  const [title, setTitle] = useState('');
  const [deadline_date, setDate] = useState();
  const [deadline_time, setTime] = useState();
  const [file, setFile] = useState([]);
  const [status, setStatus] = useState('in progress');
  const [stared, setStared] = useState(false);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setDate(todo.deadline_date);
      setTime(todo.deadline_time);
      setFile(todo.file);
      setComment(todo.comment);
      setStatus(todo.status);
    } else {
      setTitle('');
      setDate();
      setTime();
      setFile([]);
      setComment('');
      setStatus('in progress');
    }
  }, [type, todo, addTodoModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   title,
    //   deadline_date,
    //   deadline_time,
    //   status,
    //   file,
    //   comment,
    //   stared,
    // });
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title) {
      if (type === 'add') {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          deadline_date,
          deadline_time,
          file,
          comment,
          stared,
          time: new Date().toLocaleString(),
        })
      );
      toast.success('Task added successfully');
      }
      if (type === 'update') {
        if (todo.title !== title) {
          dispatch(updateTodo({ ...todo, title,
            status,
            deadline_date,
            deadline_time,
            file,
            comment }));
          toast.success('Task Updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setAddTodoModal(false);
    }
  };

  return (
    <div>
    {addTodoModal && (
    <div class="w-96 max-w-screen-xl mx-auto">
      <div class="header w-96 flex flex-col justify-center bg-gray-lighter shadow-md rounded-sm h-14 border-b border-gray">
        <div class="flex flex-row mx-3.5 my-1 ">
          <input type="checkbox" id="checkbox" class="mx-2"/>
          <input
            type="text"
            id="todo"
            class="mx-0.5 bg-transparent"
            placeholder="Type Something Here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <div class="ml-10 mx-2 cursor-pointer">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div class="pen mx-2 cursor-pointer">
              <FontAwesomeIcon icon={faPen} />
            </div>
        </div>
      </div>
      <div class="w-96 body flex-col float-left bg-gray-lighter shadow-md rounded-sm h-80 mb-5">
        <div class="mt-5 mx-12">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <label
            htmlFor="deadline"
            class="text-dark text-sm font-medium mx-1.5"
          >
            Deadline
          </label>
        </div>
        <div class="my-2">
          <input
            type="date"
            id="date"
            class="ml-68 rounded-sm"
            placeholder="yyyy/mm/dd"
            value={deadline_date}
            onChange={(e) => setDate(e.target.value)}
          ></input>

          <input
            type="time"
            id="time"
            class="mx-1.5 rounded-sm"
            placeholder="hh:mm"
            value={deadline_time}
            onChange={(e) => setTime(e.target.value)}
          ></input>
        </div>
        <div class="mt-3 mx-12">
          <FontAwesomeIcon icon={faFile} />
          <label htmlFor="file" class="text-dark text-sm font-medium mx-2">
            File
          </label>
        </div>
        <div class="ml-68 font-normal text-xl text-gray">
          <input
            type="file"
            id="file"
            class="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
          <label for="file">
            <FontAwesomeIcon icon={faPlusSquare} />
          </label>
        </div>
        <div class="mt-2 mb-1.5 mx-12">
          <FontAwesomeIcon icon={faCommentDots} />
          <label htmlFor="comment" class="text-dark text-sm font-medium mx-1">
            Comment
          </label>
        </div>
        <textarea
          rows="3"
          id="comment"
          class="ml-68 px-2 pt-1 w-64 outline-none rounded-sm focus:outline-1 focus:outline-blue"
          placeholder="Type your memo here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div class="mt-6 shadow-md">
          <button class="w-1/2 btn-cancel" onClick={() => setAddTodoModal(false)} onKeyDown={() => setAddTodoModal(false)} tabIndex={0}>✕ Cancel</button>
          <button class="w-1/2 btn-submit" type="submit" onClick={(e) => handleSubmit(e)}>
            ＋ {type === "add" ? 'Add Task' : 'Save'}
          </button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}

export default AddTodo;
