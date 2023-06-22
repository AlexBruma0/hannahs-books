import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Board.css";
import Editable from "../Editable/Editable";
import { SpinnerCircular } from 'spinners-react';
import { DragDropContext, Droppable, } from "react-beautiful-dnd";

export default function Board(props) {
  const [show, setShow] = useState(false);

  const local = "http://localhost:8081/";
  var uri = local;

  const reorder = async( startIndex, endIndex) => {
    const [removed] = props.card?.splice(startIndex, 1);
    props.card?.splice(endIndex, 0, removed);
    //console.log(props.card)

    const temp = props.localData
    temp[props.index].card = props.card
    props.setlocalData(temp)

    await fetch(`${uri}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.id,
        card: props.card,
      }),
    });
  };

  const onDragEnd= (result) => {
    if (!result.destination) {
      return;
    }
    reorder(
      result.source.index,
      result.destination.index
    );
  }


  useEffect(() => {
    //if(props.index == 0) console.log(props.card)
    document.addEventListener("keypress", (e) => {
      if (e.code === "Enter") setShow(false);
    });
    return () => {
      document.removeEventListener("keypress", (e) => {
        if (e.code === "Enter") setShow(false);
      });
    };
    
  });

  return (
    <div className="board" id={`board${props.index}`}>
      <div className="board__top">
        {show ? (
          <div>
            <input
              className="title__input"
              type={"text"}
              defaultValue={props.name}
              onChange={(e) => {
                props.setName(e.target.value, props.id);
              }}
            />
          </div>
        ) : (
          <div>
            <p
              onClick={() => {
                setShow(true);
              }}
              className="board__title"
            >
              {props?.name || "Name of Board"}
              <span className="total__cards">{props.card?.length}</span>
            </p>
          </div>
        )}
      </div>
        <Droppable droppableId={props.id.toString()}>
          {(provided) => (
            <div
              className="board__cards"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {props.waitingAPI && <div className="spinner-container"><SpinnerCircular color='pink' size='5vw'/></div>}
              {!props.waitingAPI && <>
                {props.card?.map((items, index) => (
                <Card
                  cn = {props.cn}
                  bid={props.id}
                  id={items.id}
                  index={index}
                  key={items.id}
                  author={items.author}
                  title={items.title}
                  img_url={items.img_url}
                  tags={items.tags}
                  updateCard={props.updateCard}
                  removeCard={props.removeCard}
                  card={items}
                />
              ))}
              {provided.placeholder}
              
              </>}

            </div>
          )}
        </Droppable>
         <div className="board__footer">
           <Editable
            name={"Add Book"}
            btnName={"Add Book"}
            placeholder={"Enter ISBN/ASIN"}
            onSubmit={(value) => props.addCard(value, props.id)}
          />
        </div>
      
     </div>
  );
}
