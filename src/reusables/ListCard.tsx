import { type Course } from "./courseSchema";

export type ModalType = 'info' | 'pro-alert' | 'edit' | 'delete' | null;

interface ListCardProps{
 Course: Course;
 openModal: (course: Course, type: ModalType) => void;
}

export default function CourseCard({Course, openModal}: ListCardProps) {
    // Typed as React.CSSProperties to prevent TypeScript errors on properties like flexDirection
    const cardStyle: React.CSSProperties = {
      
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      cursor: Course.priced? 'url("https://img.icons8.com/fluency/48/lock-2--v1.png"), auto': 'pointer'
    };

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative', // Locks the absolute overlay to this specific container
        width: '100%',
        height: '150px' 
      };
  
      
    const imageStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // The 0.4 darkening effect
        backdropFilter: 'blur(4px)',           // The actual blur effect
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        gap: '8px'
      };
  
    const contentStyle: React.CSSProperties = {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: '1',
      textAlign: 'left'
    };
  
    const tagStyle: React.CSSProperties = {
      alignSelf: 'flex-start',
      backgroundColor: Course.priced ?'#0f172a': '#047857' ,
      color: '#ffffff',
      padding: '3px 10px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    };
  
    const titleStyle: React.CSSProperties = {
      fontSize: '18px',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0',
      lineHeight: '1.4',
    };
  
    const descriptionStyle: React.CSSProperties = {
      fontSize: '13.5px',
      color: '#475569',
      margin: '0',
      lineHeight: '1.5'
    };
  
    const footerStyle: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '12px',
      paddingTop: '12px',
      borderTop: '1px solid #f1f5f9',
      fontSize: '12px',
      color: '#64748b'
    };
  
    const tutorStyle: React.CSSProperties = {
      fontWeight: '600',
      color: '#334155'
    };
  
    return (
      <div style={cardStyle}
      onClick={() => openModal(Course, Course.priced?'pro-alert':'info')}
      >
<div style={imageContainerStyle}>
          <img 
            src={Course.Image} 
            alt={Course.Title} 
            style={imageStyle} 
          />
          
          {/* Conditionally render the blur overlay if priced is true */}
          {Course.priced && (
            <div style={overlayStyle}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>Premium</span>
            </div>
          )}
        </div>
        <div style={contentStyle}>
          <span style={tagStyle}>
            {Course.priced? 'Paid': 'Free'}
          </span>
          <h3 style={titleStyle}>{Course.Title}</h3>
          <p style={descriptionStyle}>{Course.Description}</p>
          <div style={footerStyle}>
            <span>Tutor: <strong style={tutorStyle}>{Course.Tutor}</strong></span>
            <span>{Course.created_at}</span>
          </div>
        </div>
      </div>
    );
  }