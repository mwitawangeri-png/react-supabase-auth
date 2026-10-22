import { useEffect, useState } from "react";
import CourseCard from "../reusables/ListCard";
import { supabase } from "../supabase";
import { type Course } from "../reusables/courseSchema";

export function ProDashboard(){

const [courses, setCourses] = useState<Course[]>([]);


useEffect(() => {
    async function fetchCourses() {
        const { data, error } = await supabase
            .from('Courses')
            .select();

        if (error) {
            console.error("Fetch attempt failed", error);
        } else {
            console.log(data);
            setCourses(data); // Save data to state
        }
    }

    fetchCourses();
}, []); 

    return(
        <div className="ProDashboardParent" style={{display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '50px'}} >
            <div style={{display: 'flex', flexDirection: 'column',gap: '30px', maxWidth: '1000px', width: '100%'}}>
                
                <div className="pageNav" 
                style={{height: '40px',
                maxWidth: '300px', 
                border: '1px solid #cfd1d4', 
                borderRadius: '30px', 
                backgroundColor: '#f0f5fc',
                padding: '5px 15px',
                display: 'flex',
                gap: '10px'}}>
                    <input
                    style={{flexGrow: 1, width: '0', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent'}}
                    placeholder="Start typing...">
                    </input>
                    {/* End of page name */}
                </div>
                <div className="itemsListWraper">
                <p style={{width: '100%', textAlign: 'left', marginBottom: '10px', fontWeight: '500', color: "black"}}>{courses.length} courses available</p>
                   <div className="itemListParent" style={{display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
                    {courses.map((course) => {

                        return (
                            <CourseCard key={course.id} Course={course}/>

                        );
                    })}
                    
                    </div> 

                </div>
            </div>
        </div>
    );
}