import React, { type ReactNode } from 'react';
import {type Course } from './courseSchema';

interface ModalShellProps {
  onClose: () => void;
  children: ReactNode;
}

export function ModalShell({ onClose, children }: ModalShellProps) {
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalBoxStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const closeBtnStyle: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#64748b'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      {/* e.stopPropagation() prevents clicking inside the white box from closing the modal */}
      <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}

// 1. The Course Info Popup
export function InfoPopup({ course, onSwitchToEdit, onSwitchToDelete }: { course: Course, onSwitchToEdit: () => void, onSwitchToDelete: () => void }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ margin: 0, color: '#0f172a' }}>{course.Title}</h2>
        <div style={{ fontSize: '13px', color: '#64748b' }}>
          <span>Tutor: <strong>{course.Tutor}</strong></span> | <span>{course.created_at}</span>
        </div>
        <p style={{ color: '#475569', lineHeight: '1.6', margin: '10px 0' }}>
          {course.Description} 
          {/* You will eventually map your longer DB description here */}
        </p>
        
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button onClick={onSwitchToEdit} style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Edit Course</button>
          <button onClick={onSwitchToDelete} style={{ padding: '8px 16px', backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Delete Course</button>
        </div>
      </div>
    );
  }
  
  // 2. The Pro Alert Popup
  export function ProAlertPopup({ onClose }: { onClose: () => void }) {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔒</div>
        <h2 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Premium Content</h2>
        <p style={{ color: '#475569', marginBottom: '24px' }}>This is a paid course only. Upgrade your account to access this material.</p>
        <button onClick={onClose} style={{ padding: '10px 24px', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Close Window</button>
      </div>
    );
  }
  
  // 3. The Edit Form Popup
  export function EditPopup({ course, onCancel }: { course: Course, onCancel: () => void }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ margin: 0 }}>Edit Course</h2>
        <input defaultValue={course.Title} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} placeholder="Course Title" />
        <textarea defaultValue={course.Description} style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', minHeight: '100px' }} placeholder="Course Description" />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '8px 16px', backgroundColor: '#047857', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Save Changes</button>
          <button onClick={onCancel} style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Cancel</button>
        </div>
      </div>
    );
  }
  
  // 4. The Delete Confirmation Popup
  export function DeletePopup({ onCancel }: { onCancel: () => void }) {
    return (
      <div style={{ textAlign: 'center', padding: '10px 0' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#ef4444' }}>Are you sure?</h2>
        <p style={{ color: '#475569', marginBottom: '24px' }}>This action cannot be undone. The course will be permanently deleted.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button style={{ padding: '10px 24px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Yes, Delete</button>
          <button onClick={onCancel} style={{ padding: '10px 24px', backgroundColor: '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
        </div>
      </div>
    );
  }