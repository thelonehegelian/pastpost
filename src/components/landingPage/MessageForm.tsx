"use client";
import {useState} from 'react';
export default function MessageForm() {
const [message, setMessage] = useState('')
    return (
        <div>
            
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
    )
}
