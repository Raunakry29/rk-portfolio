import { useState } from 'react'

//Cursor Hooks apply it's therefore we can get's
const cursorHook = ()=>{
    const [hideCursor, setHideCursor] = useState(false);
    return {hideCursor , setHideCursor};
}


//cursor Hooks
export default cursorHook;
