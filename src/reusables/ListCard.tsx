export interface Item {
    id: number;
    title: string;
    price: string;
  }

interface ListCardProps{
 Item: Item;
}

export function ListCard({Item}: ListCardProps){
    return(
        
        <div style={{border: '1px solid grey', borderRadius: '8px'}}>
        <p>{Item.title}</p>
        <p>{Item.price}</p>
        </div>
        );
}

export default function CourseCard() {
    // Standalone mock data
    const course = {
      title: "Advanced Full-Stack Web Development",
      description: "Master building scalable backend architectures, relational databases, and dynamic API bindings for production apps.",
      tutor: "Felix Mwita",
      date: "Oct 21, 2026",
      isFree: false,
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    };
  
    // Typed as React.CSSProperties to prevent TypeScript errors on properties like flexDirection
    const cardStyle: React.CSSProperties = {
      
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column'
    };
  
    const imageStyle: React.CSSProperties = {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      display: 'block'
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
      backgroundColor: course.isFree ? '#047857' : '#0f172a',
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
      <div style={cardStyle}>
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          style={imageStyle} 
        />
        <div style={contentStyle}>
          <span style={tagStyle}>
            {course.isFree ? 'Free Course' : 'Paid Course'}
          </span>
          <h3 style={titleStyle}>{course.title}</h3>
          <p style={descriptionStyle}>{course.description}</p>
          <div style={footerStyle}>
            <span>Tutor: <strong style={tutorStyle}>{course.tutor}</strong></span>
            <span>{course.date}</span>
          </div>
        </div>
      </div>
    );
  }