import React, { useState } from "react";

export default function AdminNotes({ feedbacks = [], onAdd = () => { }, onToggleRespond = () => { } }) {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        className="form-control mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note or feedback..."
        style={{ minHeight: '80px', borderRadius: '8px' }}
      />
      <div className="d-flex gap-2">
        <button
          className="btn text-white fw-bold btn-sm px-3"
          onClick={() => {
            if (!text) return;
            onAdd(text);
            setText("");
          }}
          style={{ background: "#7b1e2b", borderRadius: '8px' }}
        >
          Add Note
        </button>

        <button
          className="btn btn-sm fw-bold px-3"
          onClick={() => setText("")}
          style={{ background: "#f3d9a4", color: "#7b1e2b", borderRadius: '8px' }}
        >
          Clear
        </button>
      </div>

      <div className="mt-3 d-flex flex-column gap-2">
        {feedbacks.length === 0 && <p className="text-muted small">No notes yet.</p>}
        {feedbacks.map((f) => (
          <div key={f.id} className="p-3 border rounded-3 bg-white">
            <div className="fw-bold" style={{ color: "#5b1b1b" }}>{f.text}</div>
            <div className="text-muted small mt-1">{f.when}</div>
            <div className="mt-2">
              <button
                onClick={() => onToggleRespond(f.id)}
                className="btn btn-sm fw-bold border-0"
                style={{
                  background: f.responded ? "#f3d9a4" : "#7b1e2b",
                  color: f.responded ? "#7b1e2b" : "#fff",
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              >
                {f.responded ? "Responded" : "Mark Responded"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
