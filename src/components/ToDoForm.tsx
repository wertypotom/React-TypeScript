import React from "react";

// indicating props
interface TodoFormProps {
  onAdd(title: string): void;
}

// typizating props
export const ToDoForm: React.FC<TodoFormProps> = (props) => {
  //   const [title, setTitle] = React.useState<string>("");
  const ref = React.useRef<HTMLInputElement>(null);

  //   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(e.target.value);
  //   };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value); // current is not null, avoiding warnings
      ref.current!.value = "";
      //   console.log(title);
      //   setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // value={title}
        // onChange={changeHandler}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter what to do"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter what to do
      </label>
    </div>
  );
};
