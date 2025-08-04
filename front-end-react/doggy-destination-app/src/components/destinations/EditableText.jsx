import { useEffect, useState } from "react";

const EditableText = ( {value, onChange} ) => { 
    const [text, setText] = useState(value);  // State to hold the text value
    const [isEditing, setIsEditing] = useState(false);  // State to track if the text is being edited

    useEffect(() => {
        setText(value);
    }, [value]);

    const handleDoubleClick = () => { 
        setIsEditing(true);
    };

    const handleChange = (event) => {       
        setText(event.target.value);    
    };

    const handleBlur = () => {
        setIsEditing(false);
        if (text.toString().trim() !== value.toString().trim()) {  // Use toString() to handle both string and number types for rating and review
            onChange(text);
        }
    };

    return (
        <div onDoubleClick={handleDoubleClick} className="editable-text">
            {isEditing ? (
                <input type="text" value={text} onChange={handleChange} onBlur={handleBlur} />
            ) : (
                <span>{text}</span>
            )}
        </div>
    );
};

export default EditableText;
