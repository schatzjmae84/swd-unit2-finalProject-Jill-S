import { useEffect, useState } from "react";

const EditableText = ( {value, onChange} ) => { 
    const [text, setText] = useState(value);
    const [isEditing, setIsEditing] = useState(false);

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
        if (text.trim() !== value.trim()) {
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
